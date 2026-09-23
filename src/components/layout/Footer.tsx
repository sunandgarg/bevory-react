import { Link } from "react-router-dom";
import BrandingDisplay from "@/components/layout/BrandingDisplay";
import { INFORMATIONAL_PRICE_NOTICE } from "@/lib/informationNotice";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Explore</h2>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Trending</Link></li>
              <li><Link to="/categories" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
              <li><Link to="/brands" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Brands</Link></li>
              <li><Link to="/party-planner" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Party Planner</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Learn</h2>
            <ul className="space-y-2">
              <li><Link to="/masterclass" className="text-xs text-muted-foreground hover:text-foreground transition-colors">MasterClass</Link></li>
              <li><Link to="/cocktails" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cocktails</Link></li>
              <li><Link to="/guide" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Guide</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Legal</h2>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Disclaimer</Link></li>
              <li><Link to="/cookie-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookie & Storage Policy</Link></li>
              <li><Link to="/responsible-drinking" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Responsible Drinking</Link></li>
              <li><Link to="/intellectual-property" className="text-xs text-muted-foreground hover:text-foreground transition-colors">IP & Takedown</Link></li>
              <li><Link to="/community-guidelines" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Community Guidelines</Link></li>
              <li><Link to="/source-disclosure" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Source & Ranking Disclosure</Link></li>
              <li><Link to="/grievance-redressal" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Grievance Redressal</Link></li>
              <li><Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Reach Us</h2>
            <ul className="space-y-2">
              <li><a href="mailto:bevory.main@gmail.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">bevory.main@gmail.com</a></li>
              <li><a href="tel:+918010321712" className="text-xs text-muted-foreground hover:text-foreground transition-colors">+91 8010321712</a></li>
              <li><span className="text-xs text-muted-foreground">Dwarka, Delhi</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="mb-3 text-sm font-semibold text-accent">Drink Less. Drink Better. Drink Responsibly.</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandingDisplay variant="footer" />
              <span className="text-xs text-muted-foreground hidden sm:inline">Know Before You Drink</span>
            </div>
            <p className="text-[10px] text-muted-foreground">© 2026 BevOry</p>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">
            For adults aged 25+ who also meet local law. {INFORMATIONAL_PRICE_NOTICE}
          </p>
          <button
            type="button"
            className="mt-2 text-[10px] text-muted-foreground underline underline-offset-2 hover:text-foreground"
            onClick={() => window.dispatchEvent(new Event("bevory:open-privacy-choices"))}
          >
            Privacy choices
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
