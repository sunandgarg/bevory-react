import type { RequestHandler } from "express";

type RateLimitOptions = {
  windowMs: number;
  max: number;
  message: string;
};

type Bucket = { count: number; resetAt: number };

export const createRateLimit = ({ windowMs, max, message }: RateLimitOptions): RequestHandler => {
  const buckets = new Map<string, Bucket>();
  let calls = 0;

  return (req, res, next) => {
    const now = Date.now();
    const key = req.ip || req.socket.remoteAddress || "unknown";
    const current = buckets.get(key);
    const bucket = !current || current.resetAt <= now
      ? { count: 0, resetAt: now + windowMs }
      : current;

    if (bucket.count >= max) {
      res.setHeader("Retry-After", String(Math.max(1, Math.ceil((bucket.resetAt - now) / 1000))));
      res.setHeader("RateLimit-Limit", String(max));
      res.setHeader("RateLimit-Remaining", "0");
      res.setHeader("RateLimit-Reset", String(Math.ceil(bucket.resetAt / 1000)));
      return res.status(429).json({ data: null, error: { message } });
    }

    bucket.count += 1;
    buckets.set(key, bucket);
    res.setHeader("RateLimit-Limit", String(max));
    res.setHeader("RateLimit-Remaining", String(max - bucket.count));
    res.setHeader("RateLimit-Reset", String(Math.ceil(bucket.resetAt / 1000)));

    calls += 1;
    if (calls % 1_000 === 0) {
      for (const [candidate, value] of buckets) {
        if (value.resetAt <= now) buckets.delete(candidate);
      }
    }

    return next();
  };
};
