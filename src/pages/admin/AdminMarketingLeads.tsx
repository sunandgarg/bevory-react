import { useEffect, useMemo, useState } from "react";
import { AlertCircle, ArrowDownToLine, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, MapPin, RefreshCw, Search, ShieldCheck, Users, X } from "lucide-react";
import { apiClient } from "@/integrations/api/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useCsvOperations } from "@/hooks/useCsvOperations";
import { DEFAULT_LEAD_FILTERS, filterMarketingLeads, LEAD_CSV_COLUMNS, leadConsent, leadDateTime, leadState, marketingLeadCsvRow, summarizeMarketingLeads, type LeadFilters, type MarketingLead } from "@/lib/marketingLeads";

const formatDate = (value: string, time = false) => {
  const parts = leadDateTime(value);
  return time && parts.date !== "Not recorded" ? `${parts.date}, ${parts.time}` : parts.date;
};

const TABLE_HEADERS = ["Date (IST)", "Time (IST)", "Name", "Email", "Mobile", "City", "State / UT", "Offer consent", "Age declaration", "Contact status", ""];

const Verification = ({ verified }: { verified?: boolean }) => (
  <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ${verified === true ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" : "bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200"}`}>
    {verified === true ? <ShieldCheck className="h-3.5 w-3.5" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
    {verified === true ? "Verified" : "Unverified"}
  </span>
);

const AdminMarketingLeads = () => {
  const [leads, setLeads] = useState<MarketingLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [updatedAt, setUpdatedAt] = useState("");
  const [filters, setFilters] = useState(DEFAULT_LEAD_FILTERS);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [selected, setSelected] = useState<MarketingLead | null>(null);
  const csv = useCsvOperations<MarketingLead>({ tableName: "city-offer-leads", columns: LEAD_CSV_COLUMNS, formatRow: marketingLeadCsvRow });

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    // shortcut: filter the existing all-leads response locally; use server pagination when lead volume reaches thousands.
    apiClient.from("marketing_leads").select("id,name,email,mobile,city,consented_at,contact_verified,age_confirmed")
      .order("consented_at", { ascending: false })
      .then(({ data, error: loadError }) => {
        if (!active) return;
        if (loadError) setError(loadError.message);
        else {
          const records: MarketingLead[] = data || [];
          setLeads(records);
          setSelected(current => current ? records.find(lead => lead.id === current.id) || null : null);
          setUpdatedAt(new Date().toISOString());
        }
        setLoading(false);
      }, () => {
        if (active) { setError("Could not load leads. Please try again."); setLoading(false); }
      });
    return () => { active = false; };
  }, [refresh]);

  const summary = useMemo(() => summarizeMarketingLeads(leads), [leads, updatedAt]);
  const filtered = useMemo(() => filterMarketingLeads(leads, filters), [leads, filters]);
  const cities = useMemo(() => summary.cities.map(([city]) => city).sort((a, b) => a.localeCompare(b)), [summary]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);
  const dateError = filters.from && filters.to && filters.from > filters.to;
  const hasFilters = Boolean(filters.search || filters.city !== "all" || filters.verification !== "all" || filters.from || filters.to);
  const changeFilters = (patch: Partial<LeadFilters>) => { setFilters(current => ({ ...current, ...patch })); setPage(1); };
  const clearFilters = () => { setFilters(DEFAULT_LEAD_FILTERS); setPage(1); };
  const initialLoading = loading && !updatedAt;

  return (
    <div className="min-w-0 space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Audience / City offers</p>
          <h1 className="text-2xl font-bold">All city leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">City-wise offer and update signups</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" disabled={loading} onClick={() => setRefresh(value => value + 1)}>
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />Refresh
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading || Boolean(error) || !filtered.length || Boolean(dateError)} onClick={() => csv.exportToCsv(filtered)}>
            <ArrowDownToLine className="mr-2 h-4 w-4" />Export CSV
          </Button>
        </div>
      </header>

      <section aria-label="All signup totals" className="grid grid-cols-2 gap-y-5 border-y border-border bg-background py-5 sm:grid-cols-4">
        {[
          ["Total signups", summary.total, "All time"],
          ["New today", summary.todayCount, "India time"],
          ["Last 7 days", summary.weekCount, "Including today"],
          ["Cities represented", summary.cities.length, `${summary.verifiedCount} verified contacts`],
        ].map(([label, value, note]) => (
          <div key={label} className="border-l border-border px-4 first:border-l-0 sm:px-6">
            <p className="text-xs font-medium text-muted-foreground">{label}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">{!updatedAt ? "--" : Number(value).toLocaleString("en-IN")}</p>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
          </div>
        ))}
      </section>

      {summary.cities.length > 0 && (
        <section aria-label="Top signup cities" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><MapPin className="h-3.5 w-3.5" />Top cities</span>
          {summary.cities.slice(0, 5).map(([city, count]) => (
            <button key={city} type="button" onClick={() => changeFilters({ city: filters.city === city ? "all" : city })} aria-pressed={filters.city === city} className={`flex items-center gap-2 rounded-sm py-1 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring ${filters.city === city ? "font-semibold text-foreground underline" : "text-muted-foreground"}`}>
              {city}<span className="text-xs tabular-nums text-foreground">{count.toLocaleString("en-IN")}</span>
            </button>
          ))}
        </section>
      )}

      <section aria-label="Lead filters" className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <label className="relative sm:col-span-2">
            <span className="sr-only">Search leads</span>
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input value={filters.search} onChange={event => changeFilters({ search: event.target.value })} placeholder="Search name, email, mobile, city or state" className="bg-background pl-9" />
          </label>
          <Select value={filters.city} onValueChange={city => changeFilters({ city })}>
            <SelectTrigger aria-label="Filter by city" className="bg-background"><SelectValue placeholder="All cities" /></SelectTrigger>
            <SelectContent><SelectItem value="all">All cities</SelectItem>{cities.map(city => <SelectItem key={city} value={city}>{city}</SelectItem>)}</SelectContent>
          </Select>
          <Select value={filters.verification} onValueChange={verification => changeFilters({ verification })}>
            <SelectTrigger aria-label="Filter by contact verification" className="bg-background"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="all">All contact statuses</SelectItem><SelectItem value="unverified">Unverified contacts</SelectItem><SelectItem value="verified">Verified contacts</SelectItem></SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <label className="min-w-0 flex-1 space-y-1 text-xs text-muted-foreground sm:flex-none">Signed up from
            <Input type="date" aria-label="Signed up from" value={filters.from} max={filters.to || undefined} onChange={event => changeFilters({ from: event.target.value })} className="mt-1 w-full bg-background sm:w-40" />
          </label>
          <label className="min-w-0 flex-1 space-y-1 text-xs text-muted-foreground sm:flex-none">To
            <Input type="date" aria-label="Signed up to" value={filters.to} min={filters.from || undefined} onChange={event => changeFilters({ to: event.target.value })} className="mt-1 w-full bg-background sm:w-40" />
          </label>
          <div className="w-full sm:ml-auto sm:w-44">
            <Select value={filters.sort} onValueChange={sort => changeFilters({ sort })}>
              <SelectTrigger aria-label="Sort leads" className="bg-background"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="newest">Newest first</SelectItem><SelectItem value="oldest">Oldest first</SelectItem><SelectItem value="name">Name A to Z</SelectItem></SelectContent>
            </Select>
          </div>
          {hasFilters && <Button variant="ghost" size="sm" onClick={clearFilters}><X className="mr-1 h-4 w-4" />Clear filters</Button>}
        </div>
        {dateError && <p role="alert" className="text-xs text-destructive">Choose an end date on or after the start date.</p>}
      </section>

      {error && <div role="alert" className="flex flex-wrap items-center gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"><AlertCircle className="h-4 w-4 shrink-0" /><span className="min-w-0 flex-1 break-words">{error}{updatedAt ? " Showing the last loaded data." : ""}</span><Button variant="outline" size="sm" onClick={() => setRefresh(value => value + 1)} disabled={loading}>Try again</Button></div>}

      <section className="min-w-0 overflow-hidden rounded-md border border-border bg-background" aria-label="City signup leads" aria-busy={loading}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 text-xs">
          <p role="status" className="font-medium">{initialLoading ? "Loading signups..." : `${filtered.length.toLocaleString("en-IN")} of ${leads.length.toLocaleString("en-IN")} leads`}</p>
          <p className="text-muted-foreground">{updatedAt ? `Updated ${formatDate(updatedAt, true)} IST` : "All dates in India time"}</p>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full min-w-[1540px] text-left text-sm">
            <caption className="sr-only">City offer signups with separate date, time, name, email, mobile, city, state, consent, age and contact verification columns. Dates and times use Asia/Kolkata; state is based on the selected city.</caption>
            <thead className="border-b border-border bg-muted/40 text-xs text-muted-foreground"><tr>
              {TABLE_HEADERS.map((heading, index) => <th key={index} scope="col" title={heading === "State / UT" ? "Based on the selected city, not device location" : heading === "Offer consent" ? "Consent recorded at signup; not proof of current permission after a withdrawal" : undefined} className="whitespace-nowrap px-4 py-3 font-medium">{heading || <span className="sr-only">Details</span>}</th>)}
            </tr></thead>
            <tbody>
              {initialLoading ? Array.from({ length: 5 }, (_, index) => <tr key={index} aria-hidden="true" className="border-b border-border/60">{TABLE_HEADERS.map((_, column) => <td key={column} className="px-4 py-5"><div className="h-4 w-3/4 animate-pulse rounded bg-muted" /></td>)}</tr>) : visible.map(lead => (
                <tr key={lead.id} className="border-b border-border/60 last:border-0 hover:bg-muted/25">
                  <td className="whitespace-nowrap px-4 py-4 text-xs tabular-nums">{leadDateTime(lead.consented_at).date}</td>
                  <td className="whitespace-nowrap px-4 py-4 text-xs tabular-nums">{leadDateTime(lead.consented_at).time}</td>
                  <td className="min-w-[160px] max-w-[230px] px-4 py-4"><button className="block max-w-full break-words text-left font-semibold underline-offset-4 hover:underline focus-visible:underline" onClick={() => setSelected(lead)}>{lead.name || "Unnamed signup"}</button></td>
                  <td className="min-w-[210px] max-w-[280px] break-all px-4 py-4">{lead.email || "Not recorded"}</td>
                  <td className="whitespace-nowrap px-4 py-4 tabular-nums">{lead.mobile || "Not recorded"}</td>
                  <td className="whitespace-nowrap px-4 py-4">{lead.city || "Not recorded"}</td>
                  <td className="whitespace-nowrap px-4 py-4">{leadState(lead.city)}</td>
                  <td className="px-4 py-4"><span className={`inline-flex whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ${leadConsent(lead) === "Recorded" ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" : "bg-muted text-muted-foreground"}`}>{leadConsent(lead)}</span></td>
                  <td className="whitespace-nowrap px-4 py-4 text-xs">{lead.age_confirmed === true ? "Self-confirmed 25+" : "Not recorded"}</td>
                  <td className="px-4 py-4"><Verification verified={lead.contact_verified} /></td>
                  <td className="px-3 py-4"><Tooltip><TooltipTrigger asChild><Button size="icon" variant="ghost" className="h-8 w-8" aria-label={`View ${lead.name || "signup"} details`} onClick={() => setSelected(lead)}><ArrowUpRight className="h-4 w-4" /></Button></TooltipTrigger><TooltipContent>View lead details</TooltipContent></Tooltip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!initialLoading && !visible.length && <div className="px-4 py-12 text-center"><Users className="mx-auto mb-3 h-6 w-6 text-muted-foreground" /><h2 className="text-sm font-semibold">{error && !updatedAt ? "Leads could not be loaded" : hasFilters ? "No matching leads" : "No city signups yet"}</h2><p className="mt-1 text-xs text-muted-foreground">{hasFilters ? "Try another city, date range or search." : error ? "Try refreshing to load signups." : "New city-offer signups will appear here."}</p>{hasFilters && <Button variant="outline" size="sm" className="mt-4" onClick={clearFilters}>Clear filters</Button>}</div>}
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 text-xs text-muted-foreground">
          <span>{filtered.length ? start + 1 : 0}-{Math.min(start + pageSize, filtered.length)} of {filtered.length.toLocaleString("en-IN")}</span>
          <div className="flex items-center gap-3">
            <Select value={String(pageSize)} onValueChange={value => { setPageSize(Number(value)); setPage(1); }}><SelectTrigger aria-label="Leads per page" className="h-8 w-24 text-xs"><SelectValue /></SelectTrigger><SelectContent>{[25, 50, 100].map(size => <SelectItem key={size} value={String(size)}>{size} rows</SelectItem>)}</SelectContent></Select>
            <span className="tabular-nums">{currentPage} / {pageCount}</span>
            <Button variant="outline" size="icon" className="h-8 w-8" aria-label="Previous page" title="Previous page" disabled={currentPage === 1 || loading} onClick={() => setPage(currentPage - 1)}><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" className="h-8 w-8" aria-label="Next page" title="Next page" disabled={currentPage === pageCount || loading} onClick={() => setPage(currentPage + 1)}><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </footer>
      </section>
      <p className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />Contact ownership is not verified by signup. Confirm ownership and current permission before sending offers.</p>

      <Sheet open={Boolean(selected)} onOpenChange={open => { if (!open) setSelected(null); }}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          <SheetHeader className="border-b border-border pb-5 text-left"><p className="text-xs font-medium uppercase text-muted-foreground">Lead details</p><SheetTitle className="break-words pr-6">{selected?.name || "City signup"}</SheetTitle><SheetDescription>City offers and updates</SheetDescription></SheetHeader>
          {selected && <div className="space-y-6 pt-5">
            <Verification verified={selected.contact_verified} />
            <dl className="space-y-4 text-sm">{[
              ["Email", selected.email || "Not recorded"], ["Mobile", selected.mobile || "Not recorded"],
              ["City", selected.city || "Not recorded"], ["State / UT (from city)", leadState(selected.city)], ["Source", "City offers form"],
              ["Signup date (IST)", leadDateTime(selected.consented_at).date], ["Signup time (IST)", leadDateTime(selected.consented_at).time],
            ].map(([label, value]) => <div key={label}><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 break-words font-medium">{value}</dd></div>)}</dl>
            <section className="border-y border-border py-5"><h3 className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="h-4 w-4 text-emerald-700" />Signup declarations</h3><dl className="mt-4 space-y-4 text-sm"><div><dt className="text-xs text-muted-foreground">Offer consent recorded</dt><dd className="mt-1">{formatDate(selected.consented_at, true)}{Number.isFinite(new Date(selected.consented_at).getTime()) ? " IST" : ""}</dd></div><div><dt className="text-xs text-muted-foreground">Age declaration</dt><dd className="mt-1">{selected.age_confirmed === true ? "Self-confirmed 25 or older" : "Not recorded"}</dd></div></dl><p className="mt-4 text-xs leading-5 text-muted-foreground">A submitted declaration is not identity or contact verification. This record does not establish current permission after a withdrawal.</p></section>
            <div><p className="text-xs text-muted-foreground">Lead ID</p><p className="mt-1 break-all font-mono text-xs">{selected.id}</p></div>
          </div>}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminMarketingLeads;
