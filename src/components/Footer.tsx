import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import BrandingDisplay from "@/components/layout/BrandingDisplay";
import { INFORMATIONAL_PRICE_NOTICE } from "@/lib/informationNotice";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-4 py-8">
      {/* Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-3">Explore</h2>
          <ul className="space-y-2">
            <li><Link to="/search" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Trending</Link></li>
            <li><Link to="/categories" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Categories</Link></li>
            <li><Link to="/brands" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Brands</Link></li>
            <li><Link to="/party-planner" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Party Planner</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-3">Learn</h2>
          <ul className="space-y-2">
            <li><Link to="/masterclass" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">MasterClass</Link></li>
            <li><Link to="/cocktails" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Cocktails</Link></li>
            <li><Link to="/guide" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Guide</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-3">Legal</h2>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Disclaimer</Link></li>
            <li><Link to="/cookie-policy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Cookie & Storage Policy</Link></li>
            <li><Link to="/responsible-drinking" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Responsible Drinking</Link></li>
            <li><Link to="/intellectual-property" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">IP & Takedown</Link></li>
            <li><Link to="/community-guidelines" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Community Guidelines</Link></li>
            <li><Link to="/source-disclosure" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Source & Ranking Disclosure</Link></li>
            <li><Link to="/grievance-redressal" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Grievance Redressal</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-3">Contact</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-primary-foreground/50" />
              <a href="mailto:bevory.main@gmail.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">bevory.main@gmail.com</a>
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-primary-foreground/50" />
              <span className="text-sm text-primary-foreground/70">Dwarka, Delhi</span>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-accent hover:underline">Contact Us →</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimers */}
      <div className="space-y-2 mb-6 pt-4 border-t border-primary-foreground/10">
        <p className="text-sm font-semibold text-accent">Drink Less. Drink Better. Drink Responsibly.</p>
        <p className="text-xs text-primary-foreground/50">
          <strong className="text-primary-foreground/70">Information Notice:</strong> {INFORMATIONAL_PRICE_NOTICE}
        </p>
        <p className="text-xs text-primary-foreground/50">
          <strong className="text-primary-foreground/70">25+ and local law:</strong> Alcohol can harm health. Never drink and drive. Access does not prove legal eligibility in your location.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-primary-foreground/10">
        <BrandingDisplay variant="footer" className="text-primary-foreground" />
        <div className="flex items-center gap-2">
          <div className="px-2 py-0.5 rounded-full bg-destructive/20 text-destructive text-[10px] font-bold">
            25+
          </div>
          <p className="text-primary-foreground/50 text-xs">
            © 2026 BevOry. All rights reserved.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="mt-3 text-xs text-primary-foreground/70 underline underline-offset-2 hover:text-primary-foreground"
        onClick={() => window.dispatchEvent(new Event("bevory:open-privacy-choices"))}
      >
        Privacy choices
      </button>
    </footer>
  );
};

export default Footer;
