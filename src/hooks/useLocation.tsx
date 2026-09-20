import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  BEVORY_CITIES,
  cityFromSlug,
  cityRecordIdFromSlug,
  type BevoryCity,
} from "@/lib/locations";
export { CITIES_BY_STATE, POPULAR_CITIES } from "@/lib/locations";

interface Country {
  id: string;
  name: string;
  code: string;
  flag: string | null;
}

interface State {
  id: string;
  name: string;
  code: string;
  country_id: string;
}

interface City {
  id: string;
  name: string;
  state_id: string;
}

interface CityWithState extends City {
  state?: State;
}

interface LocationContextType {
  countries: Country[];
  states: State[];
  cities: City[];
  allCities: CityWithState[];
  selectedCountry: Country | null;
  selectedState: State | null;
  selectedCity: City | null;
  setSelectedCountry: (country: Country | null) => void;
  setSelectedState: (state: State | null) => void;
  setSelectedCity: (city: City | null) => void;
  setCityByName: (cityName: string) => Promise<boolean>;
  loading: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);
const LOCATION_CACHE_KEY = "bevory_location";
const INDIA: Country = { id: "starter-country-india", name: "India", code: "IN", flag: null };

const stateId = (city: BevoryCity) => `bevory-state-${city.stateCode.toLowerCase()}`;
const STATIC_STATES: State[] = [...new Map(BEVORY_CITIES.map((city) => [city.state, {
  id: stateId(city),
  name: city.state,
  code: city.stateCode,
  country_id: INDIA.id,
}])).values()];
const stateByName = new Map(STATIC_STATES.map((state) => [state.name, state]));
const STATIC_CITIES: CityWithState[] = BEVORY_CITIES.map((city) => {
  const state = stateByName.get(city.state)!;
  return {
    id: cityRecordIdFromSlug(city.slug),
    name: city.name,
    state_id: state.id,
    state,
  };
});

export const DEFAULT_CITY = "Gurgaon";
export const DEFAULT_CITY_ID = "starter-city-gurgaon";

const cityByName = (name?: string | null) => STATIC_CITIES.find(
  (city) => city.name.toLowerCase() === name?.toLowerCase().trim(),
);

const initialCity = () => {
  const routeSlug = typeof window === "undefined" ? "" : window.location.pathname.split("/").filter(Boolean)[0] || "";
  const routeCity = cityFromSlug(routeSlug);
  if (routeCity) return cityByName(routeCity.name) ?? null;

  try {
    const cached = JSON.parse(localStorage.getItem(LOCATION_CACHE_KEY) || "null") as { city?: City } | null;
    const cachedCity = cityByName(cached?.city?.name);
    if (cachedCity) return cachedCity;
  } catch {
    localStorage.removeItem(LOCATION_CACHE_KEY);
  }

  return cityByName(DEFAULT_CITY) ?? null;
};

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCountry, setSelectedCountryState] = useState<Country | null>(INDIA);
  const [selectedCity, setSelectedCityState] = useState<CityWithState | null>(initialCity);
  const [selectedState, setSelectedStateState] = useState<State | null>(
    () => initialCity()?.state ?? null,
  );

  const cities = useMemo(
    () => selectedState ? STATIC_CITIES.filter((city) => city.state_id === selectedState.id) : STATIC_CITIES,
    [selectedState],
  );

  useEffect(() => {
    localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify({
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
    }));
  }, [selectedCountry, selectedState, selectedCity]);

  const setSelectedCountry = (country: Country | null) => {
    setSelectedCountryState(country);
    if (!country) {
      setSelectedStateState(null);
      setSelectedCityState(null);
    }
  };

  const setSelectedState = (state: State | null) => {
    setSelectedStateState(state);
  };

  const setSelectedCity = (city: City | null) => {
    const canonicalCity = cityByName(city?.name) ?? null;
    setSelectedCityState(canonicalCity);
    if (canonicalCity?.state) setSelectedStateState(canonicalCity.state);
  };

  const setCityByName = async (cityName: string): Promise<boolean> => {
    const city = cityByName(cityName);
    if (!city) return false;
    setSelectedCountryState(INDIA);
    setSelectedStateState(city.state ?? null);
    setSelectedCityState(city);
    return true;
  };

  return (
    <LocationContext.Provider value={{
      countries: [INDIA],
      states: STATIC_STATES,
      cities,
      allCities: STATIC_CITIES,
      selectedCountry,
      selectedState,
      selectedCity,
      setSelectedCountry,
      setSelectedState,
      setSelectedCity,
      setCityByName,
      loading: false,
    }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
