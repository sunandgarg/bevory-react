import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "bevory-analytics-consent-v1";
const ADS_CONSENT_KEY = "bevory-ads-consent-v2";
const AGE_VERIFIED_KEY = "bevory-age-policy-2026-09-20";
const MEASUREMENT_ID = "G-QPBTP7TCDV";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const updateGoogleConsent = (analytics: ConsentChoice, ads: ConsentChoice) => {
  window.gtag?.("consent", "update", {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const enableAnalytics = () => {
  if (document.getElementById("bevory-google-tag")) return;

  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.id = "bevory-google-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
};

const PrivacyConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [adsAllowed, setAdsAllowed] = useState(false);

  useEffect(() => {
    const applySavedChoice = () => {
      const analytics = localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
      const ads = localStorage.getItem(ADS_CONSENT_KEY) as ConsentChoice | null;
      setAnalyticsAllowed(analytics === "granted");
      setAdsAllowed(ads === "granted");
      updateGoogleConsent(analytics === "granted" ? "granted" : "denied", ads === "granted" ? "granted" : "denied");
      if (analytics === "granted") enableAnalytics();
      if (!analytics || !ads) setIsOpen(true);
    };

    if (localStorage.getItem(AGE_VERIFIED_KEY)) applySavedChoice();

    const openChoices = () => setIsOpen(true);
    const onLeadModal = (event: Event) => setLeadOpen((event as CustomEvent<boolean>).detail);
    window.addEventListener("bevory:age-verified", applySavedChoice);
    window.addEventListener("bevory:open-privacy-choices", openChoices);
    window.addEventListener("bevory:lead-modal", onLeadModal);
    return () => {
      window.removeEventListener("bevory:age-verified", applySavedChoice);
      window.removeEventListener("bevory:open-privacy-choices", openChoices);
      window.removeEventListener("bevory:lead-modal", onLeadModal);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("bevory-consent-open", isOpen && !leadOpen);
    return () => document.body.classList.remove("bevory-consent-open");
  }, [isOpen, leadOpen]);

  const choose = (analytics: ConsentChoice, ads: ConsentChoice) => {
    localStorage.setItem(CONSENT_KEY, analytics);
    localStorage.setItem(ADS_CONSENT_KEY, ads);
    setAnalyticsAllowed(analytics === "granted");
    setAdsAllowed(ads === "granted");
    updateGoogleConsent(analytics, ads);
    if (analytics === "granted") enableAnalytics();
    window.dispatchEvent(new Event("bevory:ad-consent-changed"));
    setShowDetails(false);
    setIsOpen(false);
  };

  if (!isOpen || leadOpen) return null;

  return (
    <section role="dialog" aria-modal="false" aria-label="Privacy choices" className="fixed inset-x-0 top-0 z-[90] border-b border-border bg-card px-2 py-1.5 shadow-sm sm:px-4">
      <div className="mx-auto flex max-w-7xl items-center gap-1.5 text-xs sm:gap-3">
        <span className="min-w-0 flex-1 truncate text-foreground">Essential on; extras optional</span>
        <Button type="button" size="sm" variant="outline" className="h-7 shrink-0 px-2 text-[11px]" onClick={() => choose("denied", "denied")}>Essential only</Button>
        <Button type="button" size="sm" className="h-7 shrink-0 px-2 text-[11px]" onClick={() => choose("granted", "granted")}>Allow all</Button>
        <Button type="button" size="icon" variant="ghost" className="h-7 w-7 shrink-0" title="Privacy settings" aria-label="Privacy settings" aria-expanded={showDetails} onClick={() => setShowDetails(!showDetails)}><Settings2 className="h-4 w-4" /></Button>
      </div>
      {showDetails && <div className="mx-auto max-w-7xl border-t border-border pt-2 text-xs">
        <p className="text-muted-foreground">Essential storage keeps age and city preferences. Analytics and ads on public content pages are optional.</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <label className="flex items-center gap-1.5"><input type="checkbox" checked={analyticsAllowed} onChange={(event) => setAnalyticsAllowed(event.target.checked)} />Analytics</label>
          <label className="flex items-center gap-1.5"><input type="checkbox" checked={adsAllowed} onChange={(event) => setAdsAllowed(event.target.checked)} />Ads on public content pages</label>
          <Button type="button" size="sm" className="h-7 px-2 text-[11px]" onClick={() => choose(analyticsAllowed ? "granted" : "denied", adsAllowed ? "granted" : "denied")}>Save choices</Button>
          <Link to="/privacy-policy" className="underline underline-offset-2">Privacy</Link>
          <Link to="/cookie-policy" className="underline underline-offset-2">Cookie policy</Link>
        </div>
      </div>}
    </section>
  );
};

export default PrivacyConsent;
