import { beforeEach, describe, expect, it, vi } from "vitest";

const query = vi.hoisted(() => ({
  from: vi.fn(),
  select: vi.fn(),
  eq: vi.fn(),
  order: vi.fn(),
}));

vi.mock("@/integrations/api/client", () => ({ apiClient: { from: query.from } }));

import { fetchActiveCategories } from "./useProducts";

describe("shared public category query", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    query.from.mockReturnValue(query);
    query.select.mockReturnValue(query);
    query.eq.mockReturnValue(query);
  });

  it("requests only active categories in catalogue order and normalizes Beer", async () => {
    query.order.mockResolvedValue({ data: [
      { id: "current-beer", slug: "beers", name: "Beers", emoji: null },
      { id: "red-wine", slug: "red-wine", name: "Red Wine", emoji: null },
    ], error: null });

    const categories = await fetchActiveCategories();
    expect(query.from).toHaveBeenCalledWith("categories");
    expect(query.eq).toHaveBeenCalledExactlyOnceWith("is_active", true);
    expect(query.order).toHaveBeenCalledWith("order_index");
    expect(categories.map(category => category.name)).toEqual(["Beer", "Red Wine"]);
    expect(categories[0].id).toBe("current-beer");
  });

  it("returns an empty list for no active records", async () => {
    query.order.mockResolvedValue({ data: null, error: null });
    await expect(fetchActiveCategories()).resolves.toEqual([]);
  });

  it("reports query errors so the picker can offer a retry", async () => {
    const error = new Error("Catalogue unavailable");
    query.order.mockResolvedValue({ data: null, error });
    await expect(fetchActiveCategories()).rejects.toBe(error);
  });
});
