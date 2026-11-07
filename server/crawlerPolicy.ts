import type { RequestHandler } from "express";

// A declared crawler policy, not proof of identity; unknown clients still face request limits.
export const denyUnlicensedCrawler: RequestHandler = (req, res, next) => {
  if (req.path === "/robots.txt") return next();
  if (!/\b(GPTBot|OAI-SearchBot|ChatGPT-User|CCBot|AhrefsBot)\b/i.test(req.header("user-agent") || "")) return next();
  res.setHeader("Cache-Control", "private, no-store");
  return res.status(403).type("text").send("Automated extraction is not authorised. Stop requests. See https://bevory.in/terms for permission enquiries.");
};
