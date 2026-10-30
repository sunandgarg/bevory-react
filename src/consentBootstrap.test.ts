import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const html = readFileSync("index.html", "utf8");
const bootstrap = html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];

const commandsFor = (values: Record<string, string> = {}) => {
  const context: Record<string, unknown> = {
    localStorage: { getItem: (key: string) => values[key] ?? null },
    location: { origin: "https://bevory.in", pathname: "/auth" },
  };
  context.window = context;
  runInNewContext(bootstrap!, context);
  return (context.dataLayer as IArguments[]).map((args) => Array.from(args));
};

describe("page-load analytics consent", () => {
  it("loads GA4 after denied defaults without exposing sign-in query data", () => {
    const commands = commandsFor();
    expect(commands[0]).toMatchObject(["consent", "default", { analytics_storage: "denied", ad_storage: "denied" }]);
    expect(commands.find(([command]) => command === "config")?.[2]).toMatchObject({ page_location: "https://bevory.in/auth" });
    expect(html).toContain('id="bevory-google-tag" async');
  });

  it("restores only a previously granted choice before the GA4 config", () => {
    const commands = commandsFor({
      "bevory-age-policy-2026-09-20": "verified",
      "bevory-analytics-consent-v1": "granted",
      "bevory-ads-consent-v2": "denied",
    });
    const update = commands.findIndex(([command, action]) => command === "consent" && action === "update");
    const config = commands.findIndex(([command]) => command === "config");
    expect(update).toBeGreaterThan(0);
    expect(update).toBeLessThan(config);
    expect(commands[update][2]).toMatchObject({ analytics_storage: "granted", ad_storage: "denied" });
  });
});
