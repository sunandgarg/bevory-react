import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export const LEGAL_LAST_UPDATED = "20 September 2026";
export const LEGAL_EMAIL = "bevory.main@gmail.com";
export const LEGAL_PHONE_DISPLAY = "+91 8010321712";
export const LEGAL_PHONE_HREF = "+918010321712";

const legalLinks = [
  ["Terms & Conditions", "/terms"],
  ["Privacy Policy", "/privacy-policy"],
  ["Cookie & Local Storage Policy", "/cookie-policy"],
  ["Disclaimer", "/disclaimer"],
  ["Responsible Drinking & Age Policy", "/responsible-drinking"],
  ["IP, Trademark & Image Rights", "/intellectual-property"],
  ["Community & Review Guidelines", "/community-guidelines"],
  ["Source, Ranking & Commercial Disclosure", "/source-disclosure"],
  ["Grievance Redressal", "/grievance-redressal"],
] as const;

type LegalPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export const LegalContact = ({ purpose = "questions or notices" }: { purpose?: string }) => (
  <address className="not-italic rounded-xl border border-border/70 bg-muted/35 p-4">
    <strong>BevOry Grievance Desk</strong><br />
    Email: <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a><br />
    Phone: <a href={`tel:${LEGAL_PHONE_HREF}`}>{LEGAL_PHONE_DISPLAY}</a><br />
    Location: Dwarka, Delhi
    <p className="mb-0 mt-3 text-xs text-muted-foreground">
      These are BevOry's current published operator-contact details for {purpose}. No separate legal-entity name or
      postal service address is represented on this page.
    </p>
  </address>
);

const LegalPage = ({ title, description, children }: LegalPageProps) => (
  <div className="min-h-screen bg-background">
    <SEOHead title={`${title} | BevOry`} description={description} />
    <main className="mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-sm max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-primary">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        <p className="mt-0 text-xs text-muted-foreground">
          Effective and last updated: {LEGAL_LAST_UPDATED}
        </p>
        <div className="my-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm">
          <strong>Important:</strong> BevOry is an information and discovery service. It does not sell, deliver,
          distribute, fulfil, broker, or process payment for alcoholic beverages.
        </div>
        {children}
        <hr />
        <nav aria-label="Related legal policies">
          <h2>Related policies</h2>
          <ul className="grid gap-x-6 sm:grid-cols-2">
            {legalLinks.map(([label, path]) => (
              <li key={path}><Link to={path}>{label}</Link></li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
    <Footer />
  </div>
);

export default LegalPage;
