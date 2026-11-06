import { useEffect, useRef, useState } from "react";

const CLIENT = "ca-pub-4858806955717066";
const SLOTS = {
  top: "3094605531",
  middle: "5618816199",
  bottom: "7907948513",
} as const;
const ADS_CONSENT_KEY = "bevory-ads-consent-v2";
const AGE_VERIFIED_KEY = "bevory-age-policy-2026-09-20";

declare global {
  interface Window {
    bevoryAgeGateDisabled?: boolean;
  }
}

const canShowAds = () =>
  typeof window !== "undefined" &&
  (window.bevoryAgeGateDisabled || localStorage.getItem(AGE_VERIFIED_KEY) !== null) &&
  localStorage.getItem(ADS_CONSENT_KEY) === "granted";

const GuideAd = ({ placement = "middle" }: { placement?: keyof typeof SLOTS }) => {
  const [allowed, setAllowed] = useState(canShowAds);
  const slot = useRef<HTMLModElement>(null);

  useEffect(() => {
    const refresh = () => setAllowed(canShowAds());
    window.addEventListener("bevory:ad-consent-changed", refresh);
    window.addEventListener("bevory:age-verified", refresh);
    return () => {
      window.removeEventListener("bevory:ad-consent-changed", refresh);
      window.removeEventListener("bevory:age-verified", refresh);
    };
  }, []);

  useEffect(() => {
    if (!allowed || !slot.current || slot.current.dataset.initialized) return;
    if (!document.getElementById("bevory-adsense")) {
      const script = document.createElement("script");
      script.id = "bevory-adsense";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`;
      document.head.appendChild(script);
    }
    slot.current.dataset.initialized = "true";
    const ads = window as Window & { adsbygoogle?: Record<string, never>[] };
    (ads.adsbygoogle = ads.adsbygoogle || []).push({});
  }, [allowed]);

  if (!allowed) return null;

  return (
    <aside aria-label="Advertisement" data-ad-placement={placement} className="mx-auto my-2 w-full max-w-[1120px] border-y border-border px-4 py-2 sm:px-6">
      <p className="mb-1 text-center text-[11px] leading-4 text-muted-foreground">Advertisement</p>
      <ins
        ref={slot}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", maxWidth: 970, height: 90, margin: "0 auto" }}
        data-ad-client={CLIENT}
        data-ad-slot={SLOTS[placement]}
      />
    </aside>
  );
};

export default GuideAd;
