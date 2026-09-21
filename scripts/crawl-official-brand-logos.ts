import "dotenv/config";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import {
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { Prisma, PrismaClient } from "@prisma/client";
import sharp from "sharp";
import { assertPublicHttpUrl, validatePublicBaseUrl } from "./image-migration-lib.js";

/**
 * Crawl and publish first-party brand logos.
 *
 * This deliberately does not use Livcheers (or any other catalogue mirror) as
 * an authority. A logo is accepted only when an official brand domain exposes
 * an Organization/Brand JSON-LD logo (or an explicitly labelled logo image)
 * and the image is served from that same domain. Missing/ambiguous brands are
 * reported and left unchanged.
 */

const apply = process.argv.includes("--apply");
const quarantineUnverified = process.argv.includes("--quarantine-unverified");
const useWikidata = process.argv.includes("--wikidata");
const limitArgument = process.argv.indexOf("--limit");
const limit = limitArgument >= 0 ? Number(process.argv[limitArgument + 1]) : Infinity;
const domainsArgument = process.argv.indexOf("--domains-file");
const domainsFile = domainsArgument >= 0 ? process.argv[domainsArgument + 1] : undefined;
const quality = 95;
const concurrency = Math.max(1, Math.min(6, Number(process.env.BRAND_LOGO_CONCURRENCY || 4)));
const maxSourceBytes = 15 * 1024 * 1024;
const immutableCacheControl = "public, max-age=31536000, immutable";
const prisma = new PrismaClient();

type JsonObject = Record<string, unknown>;
type BrandRow = { id: string; updatedAt: Date; data: JsonObject };
type OfficialSource = {
  pageUrl: string;
  imageUrl: string;
  evidence: "json-ld" | "labelled-image";
  host: string;
};
type CrawlResult = {
  id: string;
  brandName: string;
  status: "verified" | "unchanged" | "quarantined" | "unresolved" | "failed";
  reason?: string;
  source?: OfficialSource;
  webpBytes?: number;
  width?: number;
  height?: number;
  webpKey?: string;
};

const normalize = (value: string) => value
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const safeSegment = (value: string) => value
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .slice(0, 72) || "brand";

const sha = (value: Uint8Array | string) => createHash("sha256").update(value).digest("hex");

const parseDomainsFile = async () => {
  if (!domainsFile) return new Map<string, string>();
  const parsed: unknown = JSON.parse(await readFile(domainsFile, "utf8"));
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("--domains-file must contain a JSON object mapping brand names/slugs to HTTPS URLs");
  }
  const result = new Map<string, string>();
  for (const [key, value] of Object.entries(parsed)) {
    if (typeof value !== "string") continue;
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    if (url.protocol !== "https:" || url.username || url.password) {
      throw new Error(`Official domain for ${key} must be an HTTPS URL without credentials`);
    }
    result.set(normalize(key), url.toString());
  }
  return result;
};

const pageFetch = async (initialUrl: URL) => {
  let current = initialUrl;
  const initialHost = current.hostname.toLowerCase();
  for (let redirects = 0; redirects <= 5; redirects += 1) {
    await assertPublicHttpUrl(current);
    const response = await fetch(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(20_000),
      headers: { "user-agent": "BevOryOfficialBrandLogoCrawler/1.0 (+https://bevory.in)" },
    });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) throw new Error(`Redirect from ${current} omitted Location`);
      const next = new URL(location, current);
      if (!sameOfficialHost(initialHost, next.hostname)) throw new Error("Redirect left the official brand domain");
      current = next;
      continue;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status} from ${current}`);
    return { response, finalUrl: current };
  }
  throw new Error("Official page redirected too many times");
};

const sameOfficialHost = (officialHost: string, candidateHost: string) => {
  const left = officialHost.toLowerCase().replace(/^www\./, "");
  const right = candidateHost.toLowerCase().replace(/^www\./, "");
  return left === right || left.endsWith(`.${right}`) || right.endsWith(`.${left}`);
};

const absoluteSameHost = (value: string, pageUrl: URL) => {
  try {
    const candidate = new URL(value, pageUrl);
    if (candidate.protocol !== "https:" || !sameOfficialHost(pageUrl.hostname, candidate.hostname)) return null;
    return candidate;
  } catch {
    return null;
  }
};

const jsonLdValues = (html: string): unknown[] => {
  const values: unknown[] = [];
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      values.push(JSON.parse(match[1].trim()));
    } catch {
      // Invalid JSON-LD is ignored; the official page must still expose a usable logo.
    }
  }
  return values;
};

const flattenJsonLd = (value: unknown): JsonObject[] => {
  if (Array.isArray(value)) return value.flatMap(flattenJsonLd);
  if (!value || typeof value !== "object") return [];
  const object = value as JsonObject;
  return [object, ...(Array.isArray(object["@graph"]) ? object["@graph"].flatMap(flattenJsonLd) : [])];
};

const jsonLdLogo = (html: string, brandName: string, pageUrl: URL) => {
  const target = normalize(brandName);
  for (const value of jsonLdValues(html).flatMap(flattenJsonLd)) {
    const type = Array.isArray(value["@type"]) ? value["@type"].join(" ") : String(value["@type"] || "");
    if (!/(organization|brand|corporation)/i.test(type)) continue;
    const name = normalize(String(value.name || ""));
    if (!name || (name !== target && !name.includes(target) && !target.includes(name))) continue;
    const logo = value.logo;
    const raw = typeof logo === "string" ? logo : logo && typeof logo === "object" ? (logo as JsonObject).url : null;
    if (typeof raw !== "string") continue;
    const imageUrl = absoluteSameHost(raw, pageUrl);
    if (imageUrl) return imageUrl;
  }
  return null;
};

const labelledImage = (html: string, pageUrl: URL) => {
  for (const match of html.matchAll(/<img\b([^>]+)>/gi)) {
    const attrs = match[1];
    const alt = attrs.match(/\balt\s*=\s*["']([^"']*)["']/i)?.[1] || "";
    const className = attrs.match(/\bclass\s*=\s*["']([^"']*)["']/i)?.[1] || "";
    if (!/\blogo\b/i.test(`${alt} ${className}`)) continue;
    const raw = attrs.match(/\bsrc\s*=\s*["']([^"']+)["']/i)?.[1];
    if (!raw) continue;
    const imageUrl = absoluteSameHost(raw, pageUrl);
    if (imageUrl) return imageUrl;
  }
  return null;
};

const discoverOfficialLogo = async (brandName: string, homepage: string): Promise<OfficialSource> => {
  const pageUrl = new URL(homepage);
  if (pageUrl.protocol !== "https:") throw new Error("Official homepage must use HTTPS");
  const { response, finalUrl } = await pageFetch(pageUrl);
  const contentType = response.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() || "";
  if (!contentType.includes("html")) throw new Error(`Official homepage returned ${contentType || "unknown content"}`);
  const html = await response.text();
  const jsonLogo = jsonLdLogo(html, brandName, finalUrl);
  if (jsonLogo) return { pageUrl: finalUrl.toString(), imageUrl: jsonLogo.toString(), evidence: "json-ld", host: finalUrl.hostname };
  const labelled = labelledImage(html, finalUrl);
  if (labelled) return { pageUrl: finalUrl.toString(), imageUrl: labelled.toString(), evidence: "labelled-image", host: finalUrl.hostname };
  throw new Error("Official page did not expose a same-domain Organization/Brand logo");
};

const downloadImage = async (source: OfficialSource) => {
  const { response, finalUrl } = await pageFetch(new URL(source.imageUrl));
  if (!sameOfficialHost(source.host, finalUrl.hostname)) throw new Error("Logo image redirected off the official domain");
  const contentType = response.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() || "";
  if (!/^image\/(?:png|jpe?g|webp|svg\+xml)$/.test(contentType)) {
    throw new Error(`Official logo returned unsupported content type ${contentType || "unknown"}`);
  }
  const length = Number(response.headers.get("content-length") || 0);
  if (length > maxSourceBytes) throw new Error("Official logo exceeds 15 MB");
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!bytes.length || bytes.length > maxSourceBytes) throw new Error("Official logo is empty or exceeds 15 MB");
  const metadata = await sharp(bytes, { animated: false, limitInputPixels: 50_000_000 }).metadata();
  if (!metadata.width || !metadata.height || metadata.width < 32 || metadata.height < 32) {
    throw new Error("Official logo dimensions are too small");
  }
  return { bytes, contentType, metadata, finalUrl: finalUrl.toString() };
};

const sourceExtension = (contentType: string, metadataFormat?: string) => {
  if (contentType === "image/svg+xml" || metadataFormat === "svg") return "svg";
  if (contentType === "image/png" || metadataFormat === "png") return "png";
  if (contentType === "image/webp" || metadataFormat === "webp") return "webp";
  return "jpg";
};

const requiredEnv = (name: string) => {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is required with --apply`);
  return value;
};

const isLegacyMirror = (value: unknown) => {
  if (typeof value !== "string" || !value.trim()) return false;
  try {
    return new URL(value).hostname.toLowerCase().endsWith("livcheers.com");
  } catch {
    return false;
  }
};

const quarantineLegacyLogo = async (row: BrandRow) => {
  if (!isLegacyMirror(row.data.logo_source_url) && row.data.imported_from !== "livcheers_csv") return false;
  const now = new Date().toISOString();
  const nextData: JsonObject = {
    ...row.data,
    logo_url: null,
    logo_identity_verified: false,
    logo_source_url: null,
    logo_quarantined_at: now,
    logo_storage_status: "quarantined_unverified",
    logo_previous_url: row.data.logo_url || null,
    logo_previous_source_url: row.data.logo_source_url || null,
    image_license_status: "unverified",
  };
  const updated = await prisma.contentRecord.updateMany({
    where: { key: `brand_spotlights:${row.id}`, updatedAt: row.updatedAt },
    data: { data: nextData as Prisma.InputJsonObject },
  });
  if (updated.count !== 1) throw new Error("Brand changed while quarantining; database update skipped");
  return true;
};

const uploadIfNeeded = async (s3: S3Client, bucket: string, key: string, body: Uint8Array, contentType: string, metadata: Record<string, string>) => {
  try {
    const existing = await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
    if (existing.Metadata?.["migration-version"] === metadata["migration-version"] && existing.Metadata?.["source-sha256"] === metadata["source-sha256"]) return false;
  } catch (error) {
    const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
    if (status !== 404) throw error;
  }
  await s3.send(new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: contentType,
    CacheControl: immutableCacheControl,
    Metadata: metadata,
  }));
  return true;
};

const main = async () => {
  if (!Number.isFinite(limit) || limit < 1) {
    if (limit !== Infinity) throw new Error("--limit must be a positive integer");
  }
  const domains = await parseDomainsFile();
  const rows = (await prisma.contentRecord.findMany({ where: { tableName: "brand_spotlights" } }))
    .map((record): BrandRow => ({
      id: record.recordId,
      updatedAt: record.updatedAt,
      data: record.data && typeof record.data === "object" && !Array.isArray(record.data) ? record.data as JsonObject : {},
    }))
    .filter((row) => row.data.is_active !== false)
    .slice(0, limit);

  const bucket = apply ? requiredEnv("S3_BUCKET") : process.env.S3_BUCKET?.trim() || "dry-run";
  const region = apply ? requiredEnv("S3_REGION") : process.env.S3_REGION?.trim() || "ap-south-1";
  const publicBaseUrl = validatePublicBaseUrl(apply
    ? requiredEnv("IMAGE_PUBLIC_URL")
    : process.env.IMAGE_PUBLIC_URL?.trim() || "https://bevory.in/media");
  const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim();
  if (Boolean(accessKeyId) !== Boolean(secretAccessKey)) throw new Error("S3 access-key variables must be provided together");
  const s3 = new S3Client({
    region,
    endpoint: process.env.S3_ENDPOINT?.trim() || undefined,
    forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
    credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
  });

  const results = new Array<CrawlResult>(rows.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, rows.length) }, async () => {
    while (next < rows.length) {
      const index = next++;
      const row = rows[index];
      const brandName = String(row.data.brand_name || row.data.name || "").trim();
      try {
        const homepage = domains.get(normalize(brandName)) || (useWikidata ? await resolveWikidataHomepage(brandName) : null);
        if (!homepage) {
          const quarantined = apply && quarantineUnverified ? await quarantineLegacyLogo(row) : false;
          results[index] = {
            id: row.id,
            brandName,
            status: quarantined ? "quarantined" : "unresolved",
            reason: quarantined ? "Legacy catalogue-mirror logo removed pending first-party verification" : "No verified official domain supplied",
          };
          continue;
        }
        const source = await discoverOfficialLogo(brandName, homepage);
        const downloaded = await downloadImage(source);
        const digest = sha(downloaded.bytes).slice(0, 20);
        const originalKey = `brand-logo-originals/${safeSegment(row.id)}/${digest}.${sourceExtension(downloaded.contentType, downloaded.metadata.format)}`;
        const webpKey = `migrated-images/brand-spotlights/${safeSegment(row.id)}/${digest}.webp`;
        const converted = await sharp(downloaded.bytes, { animated: false, limitInputPixels: 50_000_000 })
          .rotate()
          .toColorspace("srgb")
          .webp({ quality, alphaQuality: 100, smartSubsample: true, effort: 4 })
          .toBuffer({ resolveWithObject: true });
        const webpUrl = `${publicBaseUrl}/${webpKey.split("/").map(encodeURIComponent).join("/")}`;
        if (apply) {
          await uploadIfNeeded(s3, bucket, originalKey, downloaded.bytes, downloaded.contentType, {
            "migration-version": "official-brand-logo-v1-original",
            "source-sha256": digest,
            "source-url-sha256": sha(source.imageUrl),
            "official-page-sha256": sha(source.pageUrl),
            "original-retained": "true",
          });
          await uploadIfNeeded(s3, bucket, webpKey, converted.data, "image/webp", {
            "migration-version": "official-brand-logo-v1-webp",
            "source-sha256": digest,
            "source-url-sha256": sha(source.imageUrl),
            "webp-quality": String(quality),
            "output-width": String(converted.info.width),
            "output-height": String(converted.info.height),
            "original-retained": "true",
          });
          const now = new Date().toISOString();
          const nextData: JsonObject = {
            ...row.data,
            logo_url: webpUrl,
            logo_source_url: source.imageUrl,
            logo_source_page: source.pageUrl,
            logo_source_evidence: source.evidence,
            logo_identity_verified: true,
            logo_verified_at: now,
            logo_storage_provider: "s3",
            logo_storage_status: "official_first_party",
            logo_webp_quality: quality,
            logo_original_key: originalKey,
            logo_webp_key: webpKey,
            logo_previous_url: row.data.logo_url || null,
            logo_previous_source_url: row.data.logo_source_url || null,
            // A first-party identity check is not a copyright licence grant.
            image_license_status: row.data.image_license_status || "unverified",
          };
          const updated = await prisma.contentRecord.updateMany({
            where: { key: `brand_spotlights:${row.id}`, updatedAt: row.updatedAt },
            data: { data: nextData as Prisma.InputJsonObject },
          });
          if (updated.count !== 1) throw new Error("Brand changed while crawling; database update skipped");
        }
        results[index] = {
          id: row.id,
          brandName,
          status: apply ? "verified" : "unchanged",
          source,
          webpBytes: converted.data.length,
          width: converted.info.width,
          height: converted.info.height,
          webpKey,
        };
      } catch (error) {
        results[index] = {
          id: row.id,
          brandName,
          status: "failed",
          reason: error instanceof Error ? error.message : String(error),
        };
      }
      if ((index + 1) % 25 === 0 || index + 1 === rows.length) console.log(`Processed ${index + 1}/${rows.length} brands`);
    }
  }));

  const report = {
    mode: apply ? "apply" : "dry-run",
    sourcePolicy: "official-domain-only",
    wikidataResolution: useWikidata,
    quality,
    originalsRetained: true,
    total: results.length,
    verified: results.filter((result) => result.status === "verified" || result.status === "unchanged").length,
    quarantined: results.filter((result) => result.status === "quarantined").length,
    unresolved: results.filter((result) => result.status === "unresolved").length,
    failed: results.filter((result) => result.status === "failed").length,
    results,
  };
  console.log(JSON.stringify(report, null, 2));
  if (report.failed) process.exitCode = 1;
};

const resolveWikidataHomepage = async (brandName: string) => {
  const searchUrl = new URL("https://www.wikidata.org/w/api.php");
  searchUrl.search = new URLSearchParams({
    action: "wbsearchentities",
    search: brandName,
    language: "en",
    format: "json",
    limit: "5",
  }).toString();
  const searchResponse = await fetch(searchUrl, { signal: AbortSignal.timeout(20_000), headers: { "user-agent": "BevOryOfficialBrandLogoCrawler/1.0" } });
  if (!searchResponse.ok) throw new Error(`Wikidata search failed: HTTP ${searchResponse.status}`);
  const search = await searchResponse.json() as { search?: Array<{ id: string; label?: string }> };
  const candidate = (search.search || []).find((item) => normalize(item.label || "") === normalize(brandName));
  if (!candidate) return null;
  const entityUrl = new URL("https://www.wikidata.org/w/api.php");
  entityUrl.search = new URLSearchParams({ action: "wbgetentities", ids: candidate.id, props: "claims", format: "json" }).toString();
  const entityResponse = await fetch(entityUrl, { signal: AbortSignal.timeout(20_000), headers: { "user-agent": "BevOryOfficialBrandLogoCrawler/1.0" } });
  if (!entityResponse.ok) throw new Error(`Wikidata entity lookup failed: HTTP ${entityResponse.status}`);
  const entity = await entityResponse.json() as { entities?: Record<string, { claims?: Record<string, Array<{ mainsnak?: { datavalue?: { value?: unknown } } }>> }> };
  const claims = entity.entities?.[candidate.id]?.claims?.P856 || [];
  const official = claims.map((claim) => claim.mainsnak?.datavalue?.value).find((value): value is string => typeof value === "string" && /^https:\/\//i.test(value));
  return official || null;
};

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) main().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
}).finally(() => prisma.$disconnect());

export { normalize, sameOfficialHost };
