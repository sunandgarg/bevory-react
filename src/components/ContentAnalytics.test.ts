import { afterEach, expect, it, vi } from "vitest";
import { recordContentView } from "./ContentAnalytics";

afterEach(() => vi.unstubAllGlobals());
it("tracks public content without form data, queries or duplicate page_view events", () => {
  const gtag = vi.fn();
  vi.stubGlobal("window", { gtag, location: { origin: "https://bevory.in", search: "?email=private@example.com" } });
  recordContentView("/guide/whisky-guide");
  recordContentView("/auth");
  recordContentView("/admin/users");
  expect(gtag).toHaveBeenCalledTimes(1);
  expect(gtag).toHaveBeenCalledWith("event", "content_view", {
    send_to: "G-QPBTP7TCDV", page_location: "https://bevory.in/guide/whisky-guide", page_path: "/guide/whisky-guide",
  });
});
