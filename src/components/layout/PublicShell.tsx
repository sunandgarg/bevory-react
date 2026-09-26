import { Bell } from "lucide-react";
import { lazy, Suspense } from "react";
import { Link, Outlet, useLocation as useRouterLocation } from "react-router-dom";
import UniversalSearch from "@/components/UniversalSearch";
import LocationSelectorNew from "@/components/LocationSelectorNew";
import BrandingDisplay from "@/components/layout/BrandingDisplay";
import { useLocation } from "@/hooks/useLocation";
import { useNotifications } from "@/hooks/useNotifications";
import { CITY_SLUGS, citySlugFromName } from "@/lib/locations";
import { PublicNavigationProvider, usePublicNavigation } from "@/hooks/usePublicNavigation";
import { productHeadingFromSlug } from "@/lib/pageNavigation";

const OryAssistant = lazy(() => import("@/components/ai/OryAssistant"));

const PublicShellContent = () => {
  const { unreadCount } = useNotifications();
  const { selectedCity } = useLocation();
  const { pathname } = useRouterLocation();
  const { pageTitle } = usePublicNavigation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const isHome = pathname === "/" || CITY_SLUGS.includes(pathname.slice(1));
  const isSearchPage = pathname === "/search";

  const pageHeading = (() => {
    if (isHome) return "";
    if (pageTitle) return pageTitle;
    const parts = pathname.split("/").filter(Boolean);
    const categoryIndex = parts.indexOf("category");
    const productIndex = parts.indexOf("product");
    if (productIndex >= 0) return productHeadingFromSlug(parts[productIndex + 1] || "");
    const raw = categoryIndex >= 0
      ? parts[categoryIndex + 1]
      : parts.at(-1);
    if (!raw || raw === citySlug) return "BevOry";
    if (raw === "beers") return "Beer";
    return raw.split("-").map((word) => word ? word[0].toUpperCase() + word.slice(1) : word).join(" ");
  })();

  const compactHeader = !isHome;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1120px] items-center gap-2 px-4 md:h-[72px] md:gap-4">
          <BrandingDisplay variant={compactHeader ? "mark" : "header"} className="shrink-0" />
          {compactHeader && (
            <h1 className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground md:text-base">
              {pageHeading}
            </h1>
          )}
          <div className={`${compactHeader ? "ml-auto" : "ml-auto md:ml-0"} shrink-0`}>
            <LocationSelectorNew variant={compactHeader ? "compact" : "default"} />
          </div>
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
        {!isSearchPage && (
          <div className="mx-auto max-w-[1120px] px-4 pb-2 pt-2">
            <UniversalSearch />
          </div>
        )}
      </header>

      <div className={isSearchPage ? "pt-14 md:pt-[72px]" : "pt-[126px] md:pt-[136px]"}>
        <Outlet />
      </div>

      <Suspense fallback={null}>
        <OryAssistant />
      </Suspense>
    </>
  );
};

const PublicShell = () => <PublicNavigationProvider><PublicShellContent /></PublicNavigationProvider>;

export default PublicShell;
