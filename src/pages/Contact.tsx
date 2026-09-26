import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { INFORMATIONAL_PRICE_NOTICE } from "@/lib/informationNotice";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Contact Us | BevOry" description="Get in touch with BevOry — India's smart beverage discovery platform." />
    <Header />
    <main className="px-4 py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
      <p className="text-muted-foreground text-sm mb-8">We'd love to hear from you. Reach out for feedback, partnerships, or support.</p>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
          <div className="p-2.5 rounded-lg bg-primary/10"><Mail className="h-5 w-5 text-primary" /></div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Email</h3>
            <a href="mailto:bevory.main@gmail.com" className="text-sm text-primary hover:underline">bevory.main@gmail.com</a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
          <div className="p-2.5 rounded-lg bg-primary/10"><MapPin className="h-5 w-5 text-primary" /></div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Location</h3>
            <p className="text-sm text-foreground">Dwarka, Delhi</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border/50">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> {INFORMATIONAL_PRICE_NOTICE} Be cautious of fraudulent messages claiming delivery in
          our name; contact us directly using the information above.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          For privacy, content, rights, account, or legal complaints, follow our{" "}
          <Link to="/grievance-redressal" className="text-primary hover:underline">Grievance Redressal process</Link>.
          These are BevOry's current published operator-contact details; no separate legal-entity name or postal service
          address is represented here.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
