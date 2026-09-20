import { Bell, Bot, Settings } from "lucide-react";
import { Link, Outlet, useLocation as useRouterLocation } from "react-router-dom";
import UniversalSearch from "@/components/UniversalSearch";
import LocationSelectorNew from "@/components/LocationSelectorNew";
import BrandingDisplay from "@/components/layout/BrandingDisplay";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "@/hooks/useLocation";
import { useNotifications } from "@/hooks/useNotifications";
import { citySlugFromName } from "@/lib/locations";

const PublicShell = () => {
  const { isAdmin } = useAuth();
  const { unreadCount } = useNotifications();
  const { selectedCity } = useLocation();
  const { pathname } = useRouterLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const isHome = /^\/(?:[a-z-]+)?$/.test(pathname);
  const isSearch = pathname === "/search";

  const pageHeading = (() => {
    if (isHome) return "";
    const parts = pathname.split("/").filter(Boolean);
    const categoryIndex = parts.indexOf("category");
    const productIndex = parts.indexOf("product");
    const raw = categoryIndex >= 0
      ? parts[categoryIndex + 1]
      : productIndex >= 0
        ? parts[productIndex + 1]
        : parts.at(-1);
    if (!raw || raw === citySlug) return "BevOry";
    return raw.split("-").map((word) => word ? word[0].toUpperCase() + word.slice(1) : word).join(" ");
  })();

  const compactHeader = !isHome;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 md:h-[72px] md:gap-4">
          <BrandingDisplay variant={compactHeader ? "mark" : "header"} className="shrink-0" />
          {compactHeader && (
            <h1 className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground md:text-base">
              {pageHeading}
            </h1>
          )}
          <div className={`${compactHeader ? "ml-auto" : "ml-auto md:ml-0"} shrink-0`}>
            <LocationSelectorNew variant={compactHeader ? "compact" : "default"} />
          </div>
          <div className={`${isHome || isSearch ? "" : "hidden"} min-w-0 flex-1`}>
            <UniversalSearch />
          </div>
          {isAdmin && (
            <Link
              to="/admin"
              className="hidden min-h-11 min-w-11 items-center justify-center rounded-xl hover:bg-secondary sm:flex"
              aria-label="Admin panel"
            >
              <Settings className="h-[18px] w-[18px] text-muted-foreground" />
            </Link>
          )}
          <Link
            to="/notifications"
            className="relative flex min-h-11 min-w-11 items-center justify-center rounded-xl hover:bg-secondary"
            aria-label="Notifications"
          >
            <Bell className="h-[18px] w-[18px] text-muted-foreground" />
            {unreadCount > 0 && (
              <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </Link>
        </div>
        {(isHome || isSearch) && <div className="mx-auto max-w-7xl px-4 pb-2 md:hidden"><UniversalSearch /></div>}
      </header>

      <div className={`${isHome || isSearch ? "pt-[110px]" : "pt-[64px]"} md:pt-[72px]`}>
        <Outlet />
      </div>

      <Link
        to={`/${citySlug}`}
        aria-label="Open oRy AI home"
        className="fixed bottom-20 right-4 z-40 flex min-h-12 items-center gap-2 rounded-full border border-accent/30 bg-foreground px-3.5 py-2 text-background shadow-xl transition-transform hover:scale-105 active:scale-95 md:bottom-6"
      >
        <span
          aria-hidden="true"
          className="h-7 w-7 shrink-0 bg-current"
          style={{
            WebkitMask: "url('/favicon.png?v=5') center / contain no-repeat",
            mask: "url('/favicon.png?v=5') center / contain no-repeat",
          }}
        />
        <span className="leading-tight">
          <span className="flex items-center gap-1 text-xs font-bold">
            oRy AI <Bot className="h-3.5 w-3.5" />
          </span>
          <span className="block text-[9px] text-background/65">Coming soon</span>
        </span>
      </Link>
    </>
  );
};

export default PublicShell;
