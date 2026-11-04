import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";
import { GA4_MEASUREMENT_ID, GA4_PROPERTY_ID } from "./lib/googleAnalyticsConfig";

const html = readFileSync("index.html", "utf8");
const bootstrap = html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];

const commandsFor = (values: Record<string, string> = {}) => {
  const context: Record<string, unknown> = {
    localStorage: { getItem: (key: string) => values[key] ?? null },
    location: { origin: "https://bevory.in", pathname: "/auth" },
  };
  context.window = context;
  runInNewContext(bootstrap!, context);
  return (context.dataLayer as (IArguments | { event: string })[]).map((entry) =>
    "event" in entry ? [entry] : Array.from(entry)
  );
};

describe("page-load analytics consent", () => {
  it("loads GA4 after denied defaults without exposing sign-in query data", () => {
    const commands = commandsFor();
    expect(commands[0]).toMatchObject(["consent", "default", { analytics_storage: "denied", ad_storage: "denied" }]);
    expect(commands.find(([command]) => command === "config")?.[2]).toMatchObject({ page_location: "https://bevory.in/auth" });
    expect(html).toContain(`gtag('config', '${GA4_MEASUREMENT_ID}'`);
    expect(html).toContain(`gtag/js?id=${GA4_MEASUREMENT_ID}`);
    expect(GA4_PROPERTY_ID).toMatch(/^\d+$/);
    const gtmStart = commands.findIndex(([entry]) => typeof entry === "object" && entry?.event === "gtm.js");
    expect(gtmStart).toBeGreaterThan(0);
    expect(commands[gtmStart][0]).toMatchObject({ "gtm.start": expect.any(Number), event: "gtm.js" });
    expect(gtmStart).toBeLessThan(commands.findIndex(([command]) => command === "config"));
    expect(html).toContain('id="bevory-google-tag" async');
    expect(html.match(/gtm\.js\?id=GTM-WZMQX2NW/g)).toHaveLength(1);
    expect(html.indexOf("gtag('consent', 'default'")).toBeLessThan(html.indexOf("gtm.js?id=GTM-WZMQX2NW"));
    expect(html.indexOf("event: 'gtm.js'")).toBeLessThan(html.indexOf("gtm.js?id=GTM-WZMQX2NW"));
  });

  it("restores a previously granted choice before GA4 config when the age gate is disabled", () => {
    const commands = commandsFor({
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
