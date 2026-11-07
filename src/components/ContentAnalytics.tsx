import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { GA4_MEASUREMENT_ID } from "@/lib/googleAnalyticsConfig";

export const recordContentView = (pathname: string) => {
  if (/^\/(admin|auth|profile|settings|notifications|favorites|recent|locations|search)(\/|$)/.test(pathname)) return;
  // Enhanced Measurement owns page_view; this separate event must not count a second pageview.
  window.gtag?.("event", "content_view", {
    send_to: GA4_MEASUREMENT_ID,
    page_location: `${window.location.origin}${pathname}`,
    page_path: pathname,
  });
};

const ContentAnalytics = () => {
  const { pathname } = useLocation();
  const lastPath = useRef<string>();
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    recordContentView(pathname);
  }, [pathname]);
  return null;
};

export default ContentAnalytics;
