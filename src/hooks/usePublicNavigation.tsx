import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useLocation as useRouterLocation, useNavigate, useNavigationType } from "react-router-dom";
import { useLocation } from "./useLocation";
import { citySlugFromName } from "@/lib/locations";
import { pathForCity, recordPageVisit } from "@/lib/pageNavigation";

const PublicNavigationContext = createContext<{
  back: () => void;
  pageTitle: string;
  setPageTitle: (value: { path: string; title: string } | null) => void;
} | null>(null);

export const PublicNavigationProvider = ({ children }: { children: ReactNode }) => {
  const location = useRouterLocation();
  const navigate = useNavigate();
  const action = useNavigationType();
  const { selectedCity } = useLocation();
  const history = useRef<string[]>([]);
  const [title, setPageTitle] = useState<{ path: string; title: string } | null>(null);
  const path = `${location.pathname}${location.search}${location.hash}`;

  useLayoutEffect(() => {
    history.current = recordPageVisit(history.current, path, action);
  }, [path, action]);

  const back = useCallback(() => {
    if (history.current.length > 1) history.current.pop();
    else history.current = ["/"];
    const previous = history.current[history.current.length - 1];
    navigate(pathForCity(previous, citySlugFromName(selectedCity?.name) || "gurgaon"), { replace: true });
  }, [navigate, selectedCity?.name]);

  return <PublicNavigationContext.Provider value={{
    back,
    pageTitle: title?.path === location.pathname ? title.title : "",
    setPageTitle,
  }}>{children}</PublicNavigationContext.Provider>;
};

export const usePublicNavigation = () => {
  const context = useContext(PublicNavigationContext);
  if (!context) throw new Error("Public navigation requires PublicNavigationProvider");
  return context;
};

export const usePublicPageTitle = (title: string) => {
  const { pathname } = useRouterLocation();
  const { setPageTitle } = usePublicNavigation();
  useEffect(() => {
    setPageTitle({ path: pathname, title });
    return () => setPageTitle(null);
  }, [pathname, title, setPageTitle]);
};
