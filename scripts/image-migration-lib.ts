import { createHash } from "node:crypto";

export type PathPart = string | number;

export type ImageTarget = {
  kind: "field" | "html";
  path: PathPart[];
  sourceUrl: string;
  sourceValue?: string;
};

export type ImageOutputExtension = "png" | "jpg";

const IMAGE_FIELD_TOKENS = new Set([
  "image", "images", "logo", "logos", "cover", "thumbnail", "avatar", "favicon",
  "photo", "picture", "banner", "hero", "background", "poster", "icon",
]);
const EXTERNAL_REFERENCE_FIELD_TOKENS = new Set([
  "source", "provenance", "page", "link", "video", "youtube",
]);
const IMAGE_OBJECT_URL_KEYS = new Set(["url", "src", "href"]);
const MEDIA_PATH = "/media";

const normalizedKey = (key: string) => key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
const fieldTokens = (field: string) => normalizedKey(field).split(/[^a-z0-9]+/).filter(Boolean);

export const shouldMigrateField = (key: string) => {
  const tokens = fieldTokens(key);
  return tokens.some((token) => (
    IMAGE_FIELD_TOKENS.has(token)
    || /^(?:image|logo|cover|thumbnail|avatar|favicon|photo|picture|banner|hero|background|poster|icon)\d+$/.test(token)
  )) && !tokens.some((token) => EXTERNAL_REFERENCE_FIELD_TOKENS.has(token));
};

const externalReferenceField = (key: string) => fieldTokens(key)
  .some((token) => EXTERNAL_REFERENCE_FIELD_TOKENS.has(token));

const decodeHtmlEntities = (value: string) => value.replace(
  /&(?:#(\d+);?|#x([\da-f]+);?|(?:colon|sol|tab|newline|amp|quot|apos);?)/gi,
  (entity, decimal: string | undefined, hexadecimal: string | undefined) => {
    if (decimal) return String.fromCodePoint(Number.parseInt(decimal, 10));
    if (hexadecimal) return String.fromCodePoint(Number.parseInt(hexadecimal, 16));
    const named: Record<string, string> = {
      "&colon;": ":",
      "&sol;": "/",
      "&tab;": "\t",
      "&newline;": "\n",
      "&amp;": "&",
      "&quot;": "\"",
      "&apos;": "'",
    };
    const normalizedEntity = entity.endsWith(";") ? entity.toLowerCase() : `${entity.toLowerCase()};`;
    return named[normalizedEntity] ?? entity;
  },
);

const configuredMediaOrigin = (publicBaseUrl: string) => {
  let parsed: URL;
  try {
    parsed = new URL(publicBaseUrl);
  } catch {
    throw new Error("IMAGE_PUBLIC_URL must be a valid HTTPS URL ending in /media");
  }
  const pathname = parsed.pathname.replace(/\/+$/, "") || "/";
  if (
    parsed.protocol !== "https:"
    || parsed.username
    || parsed.password
    || parsed.search
    || parsed.hash
    || pathname !== MEDIA_PATH
  ) {
    throw new Error("IMAGE_PUBLIC_URL must be an HTTPS origin plus the exact /media path");
  }
  return parsed.origin;
};

export const validatePublicBaseUrl = (publicBaseUrl: string) => {
  configuredMediaOrigin(publicBaseUrl);
  return publicBaseUrl.replace(/\/+$/, "");
};

const normalizedExternalHttpUrl = (value: unknown, publicBaseUrl?: string) => {
  const publicOrigin = publicBaseUrl ? configuredMediaOrigin(publicBaseUrl) : null;
  if (typeof value !== "string") return null;
  const decoded = decodeHtmlEntities(value).trim();
  const absolute = decoded.startsWith("//") ? `https:${decoded}` : decoded;
  if (!/^https?:\/\//i.test(absolute)) return null;
  try {
    const candidate = new URL(absolute);
    const isMigratedMedia = publicOrigin
      && candidate.protocol === "https:"
      && !candidate.username
      && !candidate.password
      && candidate.origin === publicOrigin
      && candidate.pathname.startsWith(`${MEDIA_PATH}/`);
    return isMigratedMedia ? null : absolute;
  } catch {
    return null;
  }
};

export const isExternalHttpUrl = (value: unknown, publicBaseUrl?: string) => (
  normalizedExternalHttpUrl(value, publicBaseUrl) !== null
);

const attributeValues = (value: string, attribute: "src" | "srcset") => {
  const values: string[] = [];
  const pattern = new RegExp(
    `(?:\\s|/)${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'=<>\\x60]+))`,
    "gi",
  );
  for (const match of value.matchAll(pattern)) values.push(match[1] ?? match[2] ?? match[3] ?? "");
  return values;
};

const embeddedImageTargets = (value: string, publicBaseUrl: string | undefined, path: PathPart[]) => {
  const targets: ImageTarget[] = [];
  const add = (raw: string) => {
    const sourceUrl = normalizedExternalHttpUrl(raw, publicBaseUrl);
    if (sourceUrl) targets.push({ kind: "html", path, sourceUrl, sourceValue: raw });
  };
  for (const tag of value.match(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi) ?? []) {
    attributeValues(tag, "src").forEach(add);
    for (const sourceSet of attributeValues(tag, "srcset")) {
      sourceSet.split(",").map((item) => item.trim().split(/\s+/)[0]).filter(Boolean).forEach(add);
    }
  }
  const cssUrlPattern = /\burl\(\s*(?:"([^"]*)"|'([^']*)'|([^\s"')]+))\s*\)/gi;
  for (const match of value.matchAll(cssUrlPattern)) add(match[1] ?? match[2] ?? match[3] ?? "");
  return targets;
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
  imageContainer = false,
  skipEmbeddedImages = false,
): ImageTarget[] => {
  if (typeof value === "string") {
    const targets: ImageTarget[] = [];
    const key = String(path.at(-1) ?? "");
    const sourceUrl = (shouldMigrateField(key) || imageContainer)
      ? normalizedExternalHttpUrl(value, publicBaseUrl)
      : null;
    if (sourceUrl) targets.push({ kind: "field", path, sourceUrl, sourceValue: value });
    if (!skipEmbeddedImages) targets.push(...embeddedImageTargets(value, publicBaseUrl, path));
    return targets;
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectImageTargets(
      item,
      publicBaseUrl,
      [...path, index],
      imageContainer,
      skipEmbeddedImages,
    ));
  }
  if (!value || typeof value !== "object") return [];
  const object = value as Record<string, unknown>;
  const typedImage = String(object.type ?? "").toLowerCase() === "image";
  const objectIsImage = imageContainer || typedImage;
  return Object.entries(object).flatMap(([key, item]) => {
    const keyIsImage = shouldMigrateField(key);
    const keyIsExternalReference = externalReferenceField(key);
    const imageObjectUrl = objectIsImage && IMAGE_OBJECT_URL_KEYS.has(key.toLowerCase());
    const nestedImageContainer = keyIsImage && item != null && typeof item === "object";
    return collectImageTargets(
      item,
      publicBaseUrl,
      [...path, key],
      (objectIsImage && !keyIsExternalReference) || imageObjectUrl || nestedImageContainer,
      typedImage ? false : skipEmbeddedImages || keyIsExternalReference,
    );
  });
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
    writePath(next, target.path, html.split(target.sourceValue ?? target.sourceUrl).join(migrated));
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
  `${validatePublicBaseUrl(baseUrl)}/${key.split("/").map(encodeURIComponent).join("/")}`
);
