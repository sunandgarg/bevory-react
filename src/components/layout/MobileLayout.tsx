import { memo, ReactNode, lazy, Suspense } from "react";
import { ChevronLeft } from "lucide-react";
import { usePublicNavigation } from "@/hooks/usePublicNavigation";
import BottomNav from "./BottomNav";

const CheersGuide = lazy(() => import("@/components/CheersGuide"));

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
  showHeader?: boolean;
  showLocation?: boolean;
  showBack?: boolean;
  showBottomNav?: boolean;
  showSearch?: boolean;
  showCheersGuide?: boolean;
}

const MobileLayout = memo(({
  children,
  title,
  showHeader = true,
  showLocation = true,
  showBack = false,
  showBottomNav = true,
  showSearch = true,
  showCheersGuide = false,
}: MobileLayoutProps) => {
  const { back } = usePublicNavigation();

  return (
    <div className="min-h-screen bg-background custom-scrollbar md:mx-auto md:max-w-[1120px] md:border-x md:border-border/50">
      {showHeader && (showBack || title) && (
        <div className="flex min-h-12 items-center gap-2 border-b border-border/50 bg-background px-4">
          {showBack && (
            <button
              onClick={back}
              className="-ml-2 flex min-h-11 min-w-11 items-center justify-center rounded-lg hover:bg-secondary"
              aria-label="Go back"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {title && <h1 className="truncate text-base font-semibold">{title}</h1>}
        </div>
      )}
      
      {showCheersGuide && (
        <div className="bg-background py-2.5">
          <Suspense fallback={<div className="h-20" />}>
            <CheersGuide />
          </Suspense>
        </div>
      )}
      
      <main className={showBottomNav ? "pb-16" : ""}>
        {children}
      </main>
      {showBottomNav && <BottomNav />}
    </div>
  );
});

MobileLayout.displayName = "MobileLayout";
export default MobileLayout;
