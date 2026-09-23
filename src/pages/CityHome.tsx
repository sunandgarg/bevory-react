import { useEffect } from "react";
import { useLocation } from "@/hooks/useLocation";
import SEOHead from "@/components/SEOHead";
import { cityFromSlug } from "@/lib/locations";
import Home from "./Home";

interface CityHomeProps {
  citySlug: string;
  canonicalPath?: string;
}

const CityHome = ({ citySlug, canonicalPath }: CityHomeProps) => {
  const { setCityByName, selectedCity } = useLocation();
  const city = cityFromSlug(citySlug);
  const cityName = city?.name || citySlug.split("-").map((part) => (
    part.charAt(0).toUpperCase() + part.slice(1)
  )).join(" ");
  const isRootHomepage = canonicalPath === "/";

  useEffect(() => {
    // Set city if not already selected or different
    if (!selectedCity || selectedCity.name.toLowerCase() !== cityName.toLowerCase()) {
      setCityByName(cityName);
    }
  }, [cityName, setCityByName, selectedCity]);

  return (
    <>
      <SEOHead
        title={isRootHomepage
          ? "BevOry: Compare Drink Prices, Brands & Bottle Sizes"
          : `Alcohol Prices in ${cityName} | BevOry`}
        description={isRootHomepage
          ? "Explore beverage brands, bottle sizes, local price guides, cocktails and planning tools across India. BevOry is informational and does not sell alcohol."
          : `Compare alcohol prices in ${cityName}. Explore whisky, beer, wine, rum and more with BevOry's local price guide.`}
        canonical={canonicalPath || `/${citySlug}`}
        geoPlacename={isRootHomepage ? undefined : cityName}
      />
      <Home />
    </>
  );
};

export default CityHome;
