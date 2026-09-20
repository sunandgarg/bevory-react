import { createHash } from "node:crypto";

export type PathPart = string | number;

export type ImageTarget = {
  kind: "field" | "html";
  path: PathPart[];
  sourceUrl: string;
};

export type ImageOutputExtension = "png" | "jpg";

const IMAGE_FIELD = /(?:^|_)(?:image|logo|cover|thumbnail|avatar|favicon)(?:_|$)/i;
const SOURCE_FIELD = /source|page|link|video|youtube/i;
const HTML_IMAGE = /<img\b[^>]*?\bsrc=["'](https?:\/\/[^"']+)["']/gi;

const normalizedKey = (key: string) => key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();

export const shouldMigrateField = (key: string) => {
  const normalized = normalizedKey(key);
  return IMAGE_FIELD.test(normalized) && !SOURCE_FIELD.test(normalized);
};

export const isExternalHttpUrl = (value: unknown, publicBaseUrl?: string) => {
  if (typeof value !== "string" || !/^https?:\/\//i.test(value)) return false;
  try {
    const candidate = new URL(value);
    const publicHost = publicBaseUrl ? new URL(publicBaseUrl).hostname.toLowerCase() : null;
    return !publicHost || candidate.hostname.toLowerCase() !== publicHost;
  } catch {
    return false;
  }
};

export const youtubeThumbnailUrl = (youtubeUrl: unknown) => {
  if (typeof youtubeUrl !== "string") return null;
  const match = youtubeUrl.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/shorts\/))([^"&?/\s]{11})/i);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
};

export const collectImageTargets = (
  value: unknown,
  publicBaseUrl?: string,
  path: PathPart[] = [],
): ImageTarget[] => {
  if (typeof value === "string") {
    const targets: ImageTarget[] = [];
    const key = String(path.at(-1) ?? "");
    if (shouldMigrateField(key) && isExternalHttpUrl(value, publicBaseUrl)) {
      targets.push({ kind: "field", path, sourceUrl: value });
    }
    for (const match of value.matchAll(HTML_IMAGE)) {
      if (isExternalHttpUrl(match[1], publicBaseUrl)) {
        targets.push({ kind: "html", path, sourceUrl: match[1] });
      }
    }
    return targets;
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectImageTargets(item, publicBaseUrl, [...path, index]));
  }
  if (!value || typeof value !== "object") return [];
  return Object.entries(value).flatMap(([key, item]) => (
    collectImageTargets(item, publicBaseUrl, [...path, key])
  ));
};

const readPath = (value: unknown, path: PathPart[]) => {
  let current = value;
  for (const part of path) {
    if (!current || typeof current !== "object") return undefined;
    current = (current as Record<string | number, unknown>)[part];
  }
  return current;
};

const writePath = (value: unknown, path: PathPart[], next: unknown) => {
  if (!path.length) throw new Error("Cannot replace the root value");
  let current = value as Record<string | number, unknown>;
  for (const part of path.slice(0, -1)) {
    current = current[part] as Record<string | number, unknown>;
  }
  current[path.at(-1)!] = next;
};

export const applyImageTargets = (
  value: Record<string, unknown>,
  targets: ImageTarget[],
  migratedUrls: Map<string, string>,
) => {
  const next = structuredClone(value);
  for (const target of targets) {
    const migrated = migratedUrls.get(target.sourceUrl);
    if (!migrated) throw new Error(`Missing migrated URL for ${target.sourceUrl}`);
    if (target.kind === "field") {
      writePath(next, target.path, migrated);
      continue;
    }
    const html = readPath(next, target.path);
    if (typeof html !== "string") throw new Error(`Expected HTML string at ${target.path.join(".")}`);
    writePath(next, target.path, html.split(target.sourceUrl).join(migrated));
  }
  return next;
};

const safeSegment = (value: string) => value
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .slice(0, 72) || "image";

export const imageObjectKey = (
  table: string,
  recordId: string,
  sourceUrl: string,
  extension: ImageOutputExtension,
) => {
  const digest = createHash("sha256").update(sourceUrl).digest("hex").slice(0, 20);
  return `migrated-images/${safeSegment(table)}/${safeSegment(recordId)}/${digest}.${extension}`;
};

export const imageObjectKeyCandidates = (table: string, recordId: string, sourceUrl: string) => ([
  imageObjectKey(table, recordId, sourceUrl, "png"),
  imageObjectKey(table, recordId, sourceUrl, "jpg"),
]);

export const publicObjectUrl = (baseUrl: string, key: string) => (
  `${baseUrl.replace(/\/$/, "")}/${key.split("/").map(encodeURIComponent).join("/")}`
);
