import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { useAppSettings } from "./useAppSettings";

vi.mock("@/integrations/api/client", () => ({ apiClient: {} }));

describe("popup settings", () => {
  it("keeps the city-offers prompt off until an admin enables it", () => {
    const Settings = () => {
      const { ageSettings } = useAppSettings();
      return <span>{ageSettings.cityUpdatesPopupEnabled ? "on" : "off"}</span>;
    };

    expect(renderToStaticMarkup(<Settings />)).toBe("<span>off</span>");
  });
});
