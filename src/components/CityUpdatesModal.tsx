import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation as useRouterLocation } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "@/hooks/useLocation";
import { apiClient } from "@/integrations/api/client";

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
  const { pathname } = useRouterLocation();
  const [prompt, setPrompt] = useState(savedPrompt);
  const [ageVerified, setAgeVerified] = useState(() => Boolean(localStorage.getItem(AGE_VERIFIED_KEY)));
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(() => localStorage.getItem(SUBMITTED_KEY) === "yes");
  const [city, setCity] = useState(selectedCity?.name || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [adult, setAdult] = useState(false);
  const [consent, setConsent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const eligiblePage = !/^\/(auth|privacy-policy|terms|cookie-policy|responsible-drinking|disclaimer|contact|grievance-redressal)(\/|$)/.test(pathname);

  useEffect(() => {
    const onVerified = () => setAgeVerified(true);
    window.addEventListener("bevory:age-verified", onVerified);
    return () => window.removeEventListener("bevory:age-verified", onVerified);
  }, []);

  useEffect(() => {
    if (!open && selectedCity?.name) setCity(selectedCity.name);
  }, [selectedCity?.name, open]);

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
    const result = await apiClient.marketing.subscribe({ name, email, mobile, city, adult, consent });
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
      <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[430px] overflow-y-auto rounded-md border-[#e6e4df] p-5 sm:p-7">
        <DialogHeader className="pr-5 text-left">
          <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[#a53c4a]"><MapPin className="h-3.5 w-3.5" />{selectedCity?.name || "Your city"}</span>
          <DialogTitle className="pt-1 text-xl font-bold leading-tight">Stay in the know</DialogTitle>
          <DialogDescription className="text-xs leading-5">Get updates regarding the latest offers in your city.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-3">
          <label className="block text-xs font-semibold" htmlFor="updates-name">Name</label>
          <Input id="updates-name" autoComplete="name" required minLength={2} maxLength={100} value={name} onChange={(event) => setName(event.target.value)} />
          <label className="block text-xs font-semibold" htmlFor="updates-email">Email</label>
          <Input id="updates-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} />
          <label className="block text-xs font-semibold" htmlFor="updates-mobile">Mobile</label>
          <Input id="updates-mobile" type="tel" inputMode="tel" autoComplete="tel-national" required pattern="([+]91[- ]?)?[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number" value={mobile} onChange={(event) => setMobile(event.target.value)} />
          <label className="block text-xs font-semibold" htmlFor="updates-city">City</label>
          <select id="updates-city" required value={city} onChange={(event) => setCity(event.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option value="">Choose a city</option>
            {allCities.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
          </select>
          <label className="flex items-start gap-2 pt-1 text-xs leading-5"><input type="checkbox" className="mt-1 accent-[#a53c4a]" checked={adult} onChange={(event) => setAdult(event.target.checked)} required />I confirm I am at least 25 years old.</label>
          <label className="flex items-start gap-2 text-xs leading-5"><input type="checkbox" className="mt-1 accent-[#a53c4a]" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />I agree to receive BevOry city updates by email or mobile. I can withdraw consent at any time.</label>
          <p className="text-[11px] leading-4 text-muted-foreground">See our <Link to="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. BevOry does not sell alcohol.</p>
          {error && <p role="alert" className="text-xs text-destructive">{error}</p>}
          <Button type="submit" disabled={pending} className="w-full bg-[#a53c4a] text-white hover:bg-[#8f3340]">{pending ? "Saving..." : "Keep me updated"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CityUpdatesModal;
