import { Bell } from "lucide-react";
import { Link, Outlet, useLocation as useRouterLocation } from "react-router-dom";
import UniversalSearch from "@/components/UniversalSearch";
import LocationSelectorNew from "@/components/LocationSelectorNew";
import BrandingDisplay from "@/components/layout/BrandingDisplay";
import { useLocation } from "@/hooks/useLocation";
import { useNotifications } from "@/hooks/useNotifications";
import { CITY_SLUGS, cityHomePath, citySlugFromName } from "@/lib/locations";

const PublicShell = () => {
  const { unreadCount } = useNotifications();
  const { selectedCity } = useLocation();
  const { pathname } = useRouterLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const isHome = pathname === "/" || CITY_SLUGS.includes(pathname.slice(1));

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
        <div className="mx-auto max-w-[1120px] px-4 pb-2 pt-2">
          <UniversalSearch />
        </div>
      </header>

      <div className="pt-[126px] md:pt-[136px]">
        <Outlet />
      </div>

      <Link
        to={cityHomePath(citySlug)}
        aria-label="Open oRy AI home"
        className="fixed bottom-20 right-4 z-40 flex flex-col items-center gap-1 text-foreground transition-transform hover:scale-105 active:scale-95 md:bottom-6"
      >
        <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/70 bg-white p-1 shadow-lg">
          <img src="/ory-ai-logo.png" alt="" width={148} height={148} className="h-full w-full rounded-full object-contain" />
        </span>
        <span className="text-xs font-bold">oRy AI</span>
      </Link>
    </>
  );
};

export default PublicShell;
