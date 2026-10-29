import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation as useRouterLocation } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "@/hooks/useLocation";
import { useAuth } from "@/hooks/useAuth";
import { apiClient } from "@/integrations/api/client";
import { normalizeIndianMobile } from "@/lib/indianMobile";

const AGE_VERIFIED_KEY = "bevory-age-policy-2026-09-20";
const DISMISS_KEY = "bevory-city-updates-dismissals";
const SUBMITTED_KEY = "bevory-city-updates-submitted";
const FIRST_DELAY_MS = 30_000;
const RETRY_DELAY_MS = 60_000;

type PromptState = { dismissals: number; nextAt: number };

const savedPrompt = (): PromptState => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(DISMISS_KEY) || "null") as PromptState | null;
    if (saved && Number.isFinite(saved.dismissals) && Number.isFinite(saved.nextAt)) return saved;
  } catch { /* Ignore unavailable or stale session storage. */ }
  return { dismissals: 0, nextAt: Date.now() + FIRST_DELAY_MS };
};

const CityUpdatesModal = () => {
  const { selectedCity, allCities } = useLocation();
  const { user } = useAuth();
  const { pathname } = useRouterLocation();
  const [prompt, setPrompt] = useState(savedPrompt);
  const [ageVerified, setAgeVerified] = useState(() => Boolean(localStorage.getItem(AGE_VERIFIED_KEY)));
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(() => localStorage.getItem(SUBMITTED_KEY) === "yes");
  const [city, setCity] = useState(selectedCity?.name || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const eligiblePage = !/^\/(auth|privacy-policy|terms|cookie-policy|responsible-drinking|disclaimer|contact|grievance-redressal)(\/|$)/.test(pathname);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("bevory:lead-modal", { detail: open && eligiblePage }));
    return () => { window.dispatchEvent(new CustomEvent("bevory:lead-modal", { detail: false })); };
  }, [open, eligiblePage]);

  useEffect(() => {
    const onVerified = () => setAgeVerified(true);
    window.addEventListener("bevory:age-verified", onVerified);
    return () => window.removeEventListener("bevory:age-verified", onVerified);
  }, []);

  useEffect(() => {
    if (!open && selectedCity?.name) setCity(selectedCity.name);
  }, [selectedCity?.name, open]);

  useEffect(() => {
    if (!user) return;
    const profileName = user.user_metadata?.full_name ?? user.user_metadata?.name;
    if (typeof profileName === "string") setName((current) => current || profileName);
    if (user.email) setEmail((current) => current || user.email || "");
    if (user.phone) setMobile((current) => current || normalizeIndianMobile(user.phone || "").slice(0, 10));
  }, [user]);

  useEffect(() => {
    if (!ageVerified || !eligiblePage || submitted || prompt.dismissals >= 2) return;
    const timer = window.setTimeout(() => setOpen(true), Math.max(0, prompt.nextAt - Date.now()));
    return () => window.clearTimeout(timer);
  }, [ageVerified, eligiblePage, submitted, prompt]);

  const dismiss = () => {
    setOpen(false);
    const next = { dismissals: prompt.dismissals + 1, nextAt: Date.now() + RETRY_DELAY_MS };
    try { sessionStorage.setItem(DISMISS_KEY, JSON.stringify(next)); } catch { /* In-memory suppression still applies. */ }
    setPrompt(next);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError("");
    const result = await apiClient.marketing.subscribe({ name, email, mobile: normalizeIndianMobile(mobile), city, adult: consent, consent });
    setPending(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    try { localStorage.setItem(SUBMITTED_KEY, "yes"); } catch { /* Keep the current visit suppressed. */ }
    setSubmitted(true);
    setOpen(false);
  };

  return (
    <Dialog open={open && eligiblePage} onOpenChange={(next) => { if (!next && !pending) dismiss(); }}>
      <DialogContent className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1.5rem)] max-w-[370px] overflow-y-auto rounded-md border border-accent/40 border-t-4 border-t-accent bg-[#fff9e9] p-4 sm:p-5">
        <DialogHeader className="gap-0 pr-5 text-left">
          <span className="inline-flex w-fit items-center gap-1 text-[11px] font-semibold text-[#8f5700]"><MapPin className="h-3 w-3" />{city || selectedCity?.name || "Your city"}</span>
          <DialogTitle className="pt-1 text-lg font-bold leading-tight">Get exciting offers in {city || selectedCity?.name || "your city"}</DialogTitle>
          <DialogDescription className="text-[11px] leading-4">City updates from BevOry. <span className="font-medium text-red-600">BevOry does not sell alcohol of any kind.</span></DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} autoComplete="on" className="space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <label className="sr-only" htmlFor="updates-name">Name</label>
            <Input id="updates-name" name="name" className="h-9 focus-visible:ring-accent" placeholder="Name" autoComplete="name" required minLength={2} maxLength={100} value={name} onChange={(event) => setName(event.target.value)} />
            <label className="sr-only" htmlFor="updates-city">City</label>
            <select id="updates-city" name="address-level2" autoComplete="address-level2" aria-label="City" required value={city} onChange={(event) => setCity(event.target.value)} className="flex h-9 min-w-0 w-full rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <option value="">Choose a city</option>
            {allCities.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
          </div>
          <label className="sr-only" htmlFor="updates-email">Email</label>
          <Input id="updates-email" name="email" className="h-9 focus-visible:ring-accent" type="email" placeholder="Email" autoComplete="email" required maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} />
          <label className="sr-only" htmlFor="updates-mobile">Mobile</label>
          <Input id="updates-mobile" name="tel" className="h-9 focus-visible:ring-accent" type="tel" placeholder="10-digit mobile number" inputMode="numeric" autoComplete="tel" required pattern="[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number" value={mobile} onChange={(event) => setMobile(normalizeIndianMobile(event.target.value).slice(0, 10))} onBlur={(event) => setMobile(normalizeIndianMobile(event.target.value).slice(0, 10))} />
          <label className="flex items-start gap-2 text-[11px] leading-4"><input type="checkbox" className="mt-0.5 shrink-0 accent-accent" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />I confirm I am 25+ and agree to receive BevOry city-offer updates by email and mobile. I can withdraw consent at any time.</label>
          <p className="text-[10px] leading-4 text-muted-foreground">By subscribing, I accept the <Link to="/terms" className="underline underline-offset-2">Terms</Link>, <Link to="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link> and <Link to="/disclaimer" className="underline underline-offset-2">Disclaimer</Link>.</p>
          {error && <p role="alert" className="text-xs text-destructive">{error}</p>}
          <Button type="submit" disabled={pending} className="h-9 w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90">{pending ? "Saving..." : "Get city updates"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CityUpdatesModal;
