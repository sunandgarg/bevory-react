import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, it, vi } from "vitest";
import AgeVerificationModal from "./AgeVerificationModal";

const { state } = vi.hoisted(() => ({ state: { loading: true } }));

vi.mock("@/hooks/useAppSettings", () => ({
  useAppSettings: () => ({ ageSettings: { enabled: false }, loading: state.loading }),
}));
vi.mock("@/hooks/useLocation", () => ({
  useLocation: () => ({ setCityByName: vi.fn() }),
  POPULAR_CITIES: [],
  CITIES_BY_STATE: {},
}));

afterEach(() => vi.unstubAllGlobals());

it("does not show the age gate before settings have loaded", () => {
  state.loading = true;
  vi.stubGlobal("localStorage", { getItem: () => null });
  expect(renderToStaticMarkup(<MemoryRouter><AgeVerificationModal /></MemoryRouter>)).toBe("");
});

it("does not flash the age gate when the loaded setting disables it", () => {
  state.loading = false;
  vi.stubGlobal("localStorage", { getItem: () => null });
  expect(renderToStaticMarkup(<MemoryRouter><AgeVerificationModal /></MemoryRouter>)).toBe("");
});
