import "dotenv/config";
import cors from "cors";
import express from "express";
import multer from "multer";
import path from "node:path";
import { randomUUID, timingSafeEqual } from "node:crypto";
import { Prisma } from "@prisma/client";
import {
  createOAuthState,
  createSession,
  findOrCreateExternalUser,
  findOrCreatePhoneUser,
  getUserFromToken,
  optionalAuth,
  PolicyAcceptanceError,
  signIn,
  signUp,
  userIsAdmin,
  validatePolicyAcceptanceBeforePhoneOtp,
  verifyOAuthState,
  type AuthenticatedRequest,
  type PolicyAcceptanceInput,
} from "./auth.js";
import { queryHandler } from "./data.js";
import { cityCatalogHandler, prewarmCityHomeCatalogs } from "./catalog.js";
import { functionsHandler } from "./functions.js";
import { prisma } from "./db.js";
import {
  buildGoogleAuthorizationUrl,
  exchangeGoogleCode,
  googleOAuthConfigured,
  googleRedirectUri,
} from "./integrations/googleOAuth.js";
import { phoneOtpConfigured, sendPhoneOtp, verifyPhoneOtp } from "./integrations/phoneOtp.js";
import { geminiConfigured } from "./integrations/gemini.js";
import {
  createLegacyRedirectResolver,
  createSeoRenderer,
} from "./seo.js";
import { objectStorageConfigured, storedImagePathMatchesType, storeUpload } from "./storage.js";
import { createRateLimit } from "./rateLimit.js";
import { createMediaHandler } from "./media.js";

const app = express();
const port = Number(process.env.PORT) || 3001;
const projectRoot = process.cwd();
const uploadsRoot = path.join(projectRoot, "uploads");
const originVerifySecret = process.env.ORIGIN_VERIFY_SECRET?.trim();
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const acceptedStoredImageTypes = new Set(["image/jpeg", "image/png"]);

const detectStoredImageType = (body: Buffer) => {
  if (
    body.length >= 3
    && body[0] === 0xff
    && body[1] === 0xd8
    && body[2] === 0xff
  ) return "image/jpeg";
  if (
    body.length >= 8
    && body.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  ) return "image/png";
  return null;
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1, fields: 4, parts: 5 },
  fileFilter: (_req, file, callback) => callback(null, [
    "image/avif", "image/gif", "image/jpeg", "image/png", "image/webp",
  ].includes(file.mimetype)),
});
const signInRateLimit = createRateLimit({ windowMs: 15 * 60_000, max: 10, message: "Too many sign-in attempts; try again later" });
const signUpRateLimit = createRateLimit({ windowMs: 60 * 60_000, max: 5, message: "Too many sign-up attempts; try again later" });
const otpSendRateLimit = createRateLimit({ windowMs: 60 * 60_000, max: 5, message: "Too many verification-code requests; try again later" });
const otpVerifyRateLimit = createRateLimit({ windowMs: 15 * 60_000, max: 10, message: "Too many verification attempts; try again later" });
const publicReviewRateLimit = createRateLimit({ windowMs: 60 * 60_000, max: 5, message: "Too many review submissions; try again later" });

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use("/media", createMediaHandler());
app.use(cors({ origin: process.env.APP_URL || "http://localhost:8080", credentials: true }));
app.use(express.json({ limit: "25mb" }));
app.use(optionalAuth);
app.use("/uploads", express.static(uploadsRoot, { immutable: true, maxAge: "1h" }));
app.use("/api/auth", (_req, res, next) => {
  res.setHeader("Cache-Control", "private, no-store");
  next();
});
app.use("/api/storage", (_req, res, next) => {
  res.setHeader("Cache-Control", "private, no-store");
  next();
});

const noStore: express.RequestHandler = (_req, res, next) => {
  res.setHeader("Cache-Control", "private, no-store");
  next();
};

const rateLimit = (limit: number, windowMs: number): express.RequestHandler => (req, res, next) => {
  const now = Date.now();
  const key = `${req.ip}:${req.baseUrl}${req.path}`;
  const current = rateBuckets.get(key);
  const bucket = !current || current.resetAt <= now
    ? { count: 0, resetAt: now + windowMs }
    : current;
  bucket.count += 1;
  rateBuckets.set(key, bucket);

  if (rateBuckets.size > 10_000) {
    for (const [bucketKey, value] of rateBuckets) {
      if (value.resetAt <= now) rateBuckets.delete(bucketKey);
    }
  }

  res.setHeader("RateLimit-Limit", String(limit));
  res.setHeader("RateLimit-Remaining", String(Math.max(0, limit - bucket.count)));
  res.setHeader("RateLimit-Reset", String(Math.ceil(bucket.resetAt / 1000)));
  if (bucket.count > limit) {
    res.setHeader("Retry-After", String(Math.ceil((bucket.resetAt - now) / 1000)));
    return res.status(429).json({ data: null, error: { message: "Too many requests. Please try again later." } });
  }
  return next();
};

app.use("/api/auth", noStore);
app.use("/api/storage", noStore);
app.use("/api/auth/signin", rateLimit(10, 15 * 60 * 1000));
app.use("/api/auth/signup", rateLimit(5, 60 * 60 * 1000));
app.use("/api/auth/otp/send", rateLimit(5, 15 * 60 * 1000));
app.use("/api/auth/otp/verify", rateLimit(10, 15 * 60 * 1000));
app.use("/api/storage/upload", rateLimit(30, 60 * 60 * 1000));

app.use("/api", (req, res, next) => {
  if (process.env.NODE_ENV !== "production") return next();
  if (!originVerifySecret) {
    return res.status(503).json({ data: null, error: { message: "Origin verification is not configured" } });
  }

  const suppliedSecret = req.header("x-bevory-origin-verify") || "";
  const expected = Buffer.from(originVerifySecret);
  const supplied = Buffer.from(suppliedSecret);
  const verified = expected.length === supplied.length && timingSafeEqual(expected, supplied);
  return verified
    ? next()
    : res.status(404).json({ data: null, error: { message: "Not found" } });
});

app.get("/api/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    const records = await prisma.contentRecord.count();
    res.json({
      status: "ok",
      database: "mysql",
      orm: "prisma",
      records,
      integrations: {
        googleOAuth: googleOAuthConfigured(),
        phoneOtp: phoneOtpConfigured(),
        objectStorage: objectStorageConfigured() ? "s3" : "local",
        gemini: geminiConfigured(),
      },
    });
  } catch (error) {
    console.error("Health check failed", error);
    res.status(503).json({ status: "error", error: "Database unavailable" });
  }
});

app.post("/api/auth/signup", signUpRateLimit, async (req: AuthenticatedRequest, res) => {
  if (req.authUser) {
    return res.status(403).json({
      data: null,
      error: { message: "Sign out before creating a new account; administrators must use a self-registration link" },
    });
  }
  try {
    const user = await signUp(req.body ?? {});
    res.status(201).json({ data: { user, session: createSession(user) }, error: null });
  } catch (error) {
    res.status(400).json({ data: null, error: { message: error instanceof Error ? error.message : "Sign-up failed" } });
  }
});

app.post("/api/auth/signin", signInRateLimit, async (req, res) => {
  try {
    const user = await signIn(String(req.body?.email ?? ""), String(req.body?.password ?? ""));
    res.json({ data: { user, session: createSession(user) }, error: null });
  } catch (error) {
    res.status(401).json({ data: null, error: { message: error instanceof Error ? error.message : "Sign-in failed" } });
  }
});

app.get("/api/auth/providers", (_req, res) => {
  res.json({
    data: { google: googleOAuthConfigured(), phone: phoneOtpConfigured() },
    error: null,
  });
});

const allowedRedirect = (requested: string | undefined) => {
  const fallback = process.env.APP_URL || "http://localhost:8080";
  if (!requested) return fallback;
  try {
    const candidate = new URL(requested);
    const allowed = new URL(fallback);
    return candidate.origin === allowed.origin ? candidate.toString() : fallback;
  } catch {
    return fallback;
  }
};

const policyAcceptanceFromQuery = (query: express.Request["query"]): PolicyAcceptanceInput | undefined => {
  const supplied = query.policy_accepted !== undefined
    || query.terms_version !== undefined
    || query.privacy_version !== undefined;
  if (!supplied) return undefined;
  return {
    accepted: query.policy_accepted === "true",
    termsVersion: typeof query.terms_version === "string" ? query.terms_version : undefined,
    privacyVersion: typeof query.privacy_version === "string" ? query.privacy_version : undefined,
  };
};

const OAUTH_NONCE_COOKIE = "bevory_oauth_nonce";
const oauthNonceCookieOptions = (): express.CookieOptions => ({
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/api/auth/google/callback",
});

const cookieValue = (cookieHeader: string | undefined, name: string) => {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0 || part.slice(0, separator).trim() !== name) continue;
    try {
      return decodeURIComponent(part.slice(separator + 1).trim());
    } catch {
      return undefined;
    }
  }
  return undefined;
};

app.get("/api/auth/google", (req, res) => {
  try {
    if (!googleOAuthConfigured()) throw new Error("Google OAuth credentials are not configured");
    const redirectTo = allowedRedirect(typeof req.query.redirect_to === "string" ? req.query.redirect_to : undefined);
    const nonce = randomUUID();
    const state = createOAuthState(redirectTo, policyAcceptanceFromQuery(req.query), nonce);
    res.cookie(OAUTH_NONCE_COOKIE, nonce, { ...oauthNonceCookieOptions(), maxAge: 10 * 60_000 });
    res.redirect(buildGoogleAuthorizationUrl(googleRedirectUri(req), state));
  } catch (error) {
    const status = error instanceof PolicyAcceptanceError ? 400 : 503;
    res.status(status).json({ data: null, error: { message: error instanceof Error ? error.message : "Google sign-in unavailable" } });
  }
});

app.get("/api/auth/google/callback", async (req, res) => {
  try {
    const code = typeof req.query.code === "string" ? req.query.code : "";
    const state = typeof req.query.state === "string" ? req.query.state : "";
    const expectedNonce = cookieValue(req.headers.cookie, OAUTH_NONCE_COOKIE);
    res.clearCookie(OAUTH_NONCE_COOKIE, oauthNonceCookieOptions());
    if (!code || !state) throw new Error("Google callback is missing code or state");
    const oauthState = verifyOAuthState(state, expectedNonce);
    const redirectTo = allowedRedirect(oauthState.redirectTo);
    const profile = await exchangeGoogleCode(code, googleRedirectUri(req));
    const user = await findOrCreateExternalUser(
      { ...profile, provider: "google" },
      oauthState.policyAcceptance,
    );
    const session = createSession(user);
    const destination = new URL(redirectTo);
    destination.hash = new URLSearchParams({ bevory_oauth: session.access_token }).toString();
    res.redirect(destination.toString());
  } catch (error) {
    const destination = new URL(process.env.APP_URL || "http://localhost:8080");
    destination.pathname = "/auth";
    destination.searchParams.set("oauth_error", error instanceof Error ? error.message : "Google sign-in failed");
    res.redirect(destination.toString());
  }
});

app.post("/api/auth/otp/send", otpSendRateLimit, async (req, res) => {
  try {
    const result = await sendPhoneOtp(String(req.body?.phone ?? ""));
    res.json({ data: result, error: null });
  } catch (error) {
    res.status(400).json({ data: null, error: { message: error instanceof Error ? error.message : "OTP send failed" } });
  }
});

app.post("/api/auth/otp/verify", otpVerifyRateLimit, async (req, res) => {
  try {
    const phoneInput = String(req.body?.phone ?? "");
    await validatePolicyAcceptanceBeforePhoneOtp(phoneInput, req.body?.policyAcceptance);
    const phone = await verifyPhoneOtp(phoneInput, String(req.body?.token ?? ""));
    const user = await findOrCreatePhoneUser(phone, req.body?.policyAcceptance);
    res.json({ data: { user, session: createSession(user) }, error: null });
  } catch (error) {
    res.status(400).json({ data: null, error: { message: error instanceof Error ? error.message : "OTP verification failed" } });
  }
});

app.get("/api/auth/me", async (req: AuthenticatedRequest, res) => {
  if (req.authUser) return res.json({ data: { user: req.authUser }, error: null });
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ data: null, error: { message: "No active session" } });
  try {
    const user = await getUserFromToken(token);
    return user
      ? res.json({ data: { user }, error: null })
      : res.status(401).json({ data: null, error: { message: "No active session" } });
  } catch {
    return res.status(401).json({ data: null, error: { message: "Session expired" } });
  }
});

app.post("/api/query", (req, res, next) => {
  if (req.body?.table === "product_reviews" && req.body?.operation === "insert") {
    return publicReviewRateLimit(req, res, next);
  }
  return next();
}, queryHandler);
app.get("/api/catalog/:cityId", cityCatalogHandler);
app.use("/api/functions/party-planner-ai", noStore, rateLimit(10, 60 * 60 * 1000));
app.use("/api/functions/ai-recommend", noStore, rateLimit(30, 60 * 60 * 1000));
app.post("/api/functions/:name", functionsHandler);

app.post("/api/storage/upload", upload.single("file"), async (req: AuthenticatedRequest, res) => {
  if (!req.authUser) return res.status(401).json({ data: null, error: { message: "Authentication required" } });
  if (!await userIsAdmin(req.authUser.id)) {
    return res.status(403).json({ data: null, error: { message: "Administrator access required" } });
  }
  if (!req.file) return res.status(400).json({ data: null, error: { message: "An image file is required" } });
  const detectedImageType = detectStoredImageType(req.file.buffer);
  if (
    !acceptedStoredImageTypes.has(req.file.mimetype)
    || detectedImageType !== req.file.mimetype
  ) {
    return res.status(415).json({
      data: null,
      error: { message: "Only byte-verified JPEG or PNG images can be stored. Convert WebP, AVIF, or GIF files before uploading." },
    });
  }
  const bucket = String(req.body.bucket || "images").replace(/[^a-zA-Z0-9_-]/g, "");
  const safePath = String(req.body.path || req.file.originalname)
    .split("/")
    .filter((part) => part && part !== "." && part !== "..")
    .map((part) => part.replace(/[^a-zA-Z0-9._-]/g, "-"))
    .join("/");
  if (!safePath) return res.status(400).json({ data: null, error: { message: "A valid image path is required" } });
  if (!storedImagePathMatchesType(safePath, detectedImageType)) {
    return res.status(415).json({
      data: null,
      error: { message: "The image filename extension must match its verified JPEG or PNG bytes." },
    });
  }
  const stored = await storeUpload({
    uploadsRoot,
    bucket,
    filePath: safePath,
    mimeType: req.file.mimetype,
    body: req.file.buffer,
  });
  const id = randomUUID();
  await prisma.uploadedFile.upsert({
    where: { bucket_path: { bucket, path: safePath } },
    update: { mimeType: req.file.mimetype, size: req.file.size },
    create: { id, bucket, path: safePath, mimeType: req.file.mimetype, size: req.file.size },
  });
  res.status(201).json({ data: { id, path: safePath, publicUrl: stored.publicUrl, provider: stored.provider }, error: null });
});

app.use("/api", (_req, res) => res.status(404).json({ data: null, error: { message: "Not found" } }));

if (process.env.NODE_ENV === "production" && process.env.SERVE_FRONTEND !== "false") {
  const clientDist = path.join(projectRoot, "dist");
  const renderSeo = createSeoRenderer(clientDist);
  const resolveLegacyRedirect = createLegacyRedirectResolver(clientDist);
  app.use(express.static(clientDist, {
    index: false,
    setHeaders: (res, filePath) => {
      if (
        filePath.includes(`${path.sep}assets${path.sep}`)
        || filePath.includes(`${path.sep}fonts${path.sep}`)
      ) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      } else if (filePath.endsWith("sitemap.xml")) {
        res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
      }
    },
  }));
  app.get("/{*splat}", async (req, res, next) => {
    try {
      if (req.hostname === "www.bevory.in") {
        return res.redirect(308, `https://bevory.in${req.originalUrl}`);
      }
      const redirectPath = await resolveLegacyRedirect(req.path);
      if (redirectPath && redirectPath !== req.path) {
        const query = req.originalUrl.slice(req.path.length);
        return res.redirect(308, `${redirectPath}${query}`);
      }
      const rendered = await renderSeo(req.path);
      res.setHeader("Cache-Control", rendered.statusCode === 404
        ? "private, no-store"
        : "public, max-age=0, must-revalidate");
      return res.status(rendered.statusCode).type("html").send(rendered.html);
    } catch (error) {
      return next(error);
    }
  });
}

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled request error", error);
  const message = process.env.NODE_ENV === "production"
    ? "Unexpected server error"
    : error instanceof Error ? error.message : "Unexpected server error";
  res.status(500).json({ data: null, error: { message } });
});

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`BevOry API listening on http://localhost:${port}`);
  if (process.env.NODE_ENV === "production") {
    void prewarmCityHomeCatalogs()
      .then((count) => console.log(`Prewarmed ${count} city home catalogues`))
      .catch((error) => console.error("City catalogue prewarm failed", error));
  }
});

const shutdown = async () => {
  server.close();
  await prisma.$disconnect();
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
