import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "bevory-analytics-consent-v1";
const AGE_VERIFIED_KEY = "bevory-age-policy-2026-09-20";
const MEASUREMENT_ID = "G-QPBTP7TCDV";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const updateGoogleConsent = (choice: ConsentChoice) => {
  window.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const enableAnalytics = () => {
  updateGoogleConsent("granted");
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

  useEffect(() => {
    const applySavedChoice = () => {
      const saved = localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
      if (saved === "granted") enableAnalytics();
      else if (saved === "denied") updateGoogleConsent("denied");
      else setIsOpen(true);
    };

    if (localStorage.getItem(AGE_VERIFIED_KEY)) applySavedChoice();

    const openChoices = () => setIsOpen(true);
    window.addEventListener("bevory:age-verified", applySavedChoice);
    window.addEventListener("bevory:open-privacy-choices", openChoices);
    return () => {
      window.removeEventListener("bevory:age-verified", applySavedChoice);
      window.removeEventListener("bevory:open-privacy-choices", openChoices);
    };
  }, []);

  const choose = (choice: ConsentChoice) => {
    localStorage.setItem(CONSENT_KEY, choice);
    if (choice === "granted") enableAnalytics();
    else updateGoogleConsent("denied");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="privacy-consent-title"
      aria-describedby="privacy-consent-description"
      className="fixed inset-x-3 bottom-16 z-[90] mx-auto max-w-xl border border-border bg-card p-4 shadow-lg sm:bottom-4"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <h2 id="privacy-consent-title" className="text-sm font-semibold">
            Your privacy choices
          </h2>
          <p id="privacy-consent-description" className="mt-1 text-xs text-muted-foreground">
            BevOry uses necessary storage for age and city preferences. Optional Google Analytics helps us improve the site and stays off unless you allow it.
          </p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            <Link to="/privacy-policy" className="text-xs text-foreground underline underline-offset-2">
              Privacy policy
            </Link>
            <Link to="/cookie-policy" className="text-xs text-foreground underline underline-offset-2">
              Cookie & local storage policy
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button type="button" variant="outline" onClick={() => choose("denied")}>
          Necessary only
        </Button>
        <Button type="button" onClick={() => choose("granted")}>
          Allow analytics
        </Button>
      </div>
    </section>
  );
};

export default PrivacyConsent;
