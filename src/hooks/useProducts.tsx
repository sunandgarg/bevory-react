import { useMemo, useCallback } from "react";
import { apiClient } from "@/integrations/api/client";
import { useLocation } from "./useLocation";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { PRODUCT_BATCH_SIZE } from "@/lib/catalogPagination";

/* ===================== TYPES ===================== */

export interface Product {
  id: string;
  name: string;
  brand: string;
  slug: string | null;
  category_id: string | null;
  sub_category_id?: string | null;
  price?: number | null;
  mrp?: number | null;
  volume?: string | null;
  rating?: number | null;
  image_emoji?: string | null;
  image_url?: string | null;
  origin?: string | null;
  origin_flag?: string | null;
  abv?: number | null;
  age?: string | null;
  type_tag?: string | null;
  taste_profile?: string | null;
  is_trending?: boolean;
  is_all_time_favourite?: boolean;
  available_volumes_ml?: number[];
  available_variants?: Array<{
    volume: string;
    volume_ml: number | null;
    price: number;
    mrp: number | null;
  }>;
  category?: {
    name: string;
    slug: string;
    emoji: string | null;
  };
  sub_category?: {
    name: string;
    slug: string | null;
    emoji: string | null;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string | null;
  image_url?: string | null;
  description?: string | null;
}

const EMPTY_CATEGORIES: Category[] = [];
const EMPTY_PRODUCTS: Product[] = [];

/* ===================== FETCHERS ===================== */

const fetchCategories = async (): Promise<Category[]> => {
  const { data, error } = await apiClient
    .from("categories")
    .select("id, name, slug, emoji, image_url, description")
    .eq("is_active", true)
    .order("order_index");
  if (error) throw error;
  return data as Category[];
};

type CatalogView = "full" | "home" | "category";

type CatalogPage = {
  categories: Category[];
  products: Product[];
  totalProducts: number;
  categoryCounts: Record<string, number>;
  brandNames: string[];
  hasMore: boolean;
  offset: number;
};

const fetchCityCatalog = async (
  cityId: string,
  view: CatalogView,
  categorySlug?: string,
  pagination?: { offset: number; limit: number },
): Promise<CatalogPage> => {
  const { data, error } = await apiClient.catalog.getCity(cityId, view, categorySlug, pagination);
  if (error) throw error;
  return {
    categories: (data?.categories ?? []) as Category[],
    products: (data?.products ?? []) as Product[],
    totalProducts: Number(data?.totalProducts ?? 0),
    categoryCounts: data?.categoryCounts ?? {},
    brandNames: data?.brandNames ?? [],
    hasMore: data?.hasMore === true,
    offset: Number(data?.offset ?? 0),
  };
};

/* ===================== HOOK ===================== */

export const useProducts = (
  enabled = true,
  view: CatalogView = "full",
  categorySlug?: string,
  progressive = false,
) => {
  const { selectedCity } = useLocation();

  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000, // categories rarely change
    enabled: enabled && !selectedCity?.id,
  });

  const { data: catalogData, isLoading: queryLoading } = useQuery({
    queryKey: ["city-catalog", selectedCity?.id ?? "none", view, categorySlug ?? "all"],
    queryFn: () => fetchCityCatalog(selectedCity!.id, view, categorySlug),
    staleTime: 5 * 60 * 1000,
    enabled: enabled && !progressive && Boolean(selectedCity?.id) && (view !== "category" || Boolean(categorySlug)),
  });

  const infiniteCatalog = useInfiniteQuery({
    queryKey: ["city-catalog-pages", selectedCity?.id ?? "none", view, categorySlug ?? "all", PRODUCT_BATCH_SIZE],
    queryFn: ({ pageParam }) => fetchCityCatalog(selectedCity!.id, view, categorySlug, {
      offset: pageParam,
      limit: PRODUCT_BATCH_SIZE,
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.hasMore
      ? lastPage.offset + lastPage.products.length
      : undefined,
    staleTime: 5 * 60 * 1000,
    enabled: enabled && progressive && view !== "home" && Boolean(selectedCity?.id)
      && (view !== "category" || Boolean(categorySlug)),
  });

  const firstPage = infiniteCatalog.data?.pages[0];
  const categories = firstPage?.categories ?? catalogData?.categories ?? categoriesData ?? EMPTY_CATEGORIES;
  const productsRaw = progressive
    ? infiniteCatalog.data?.pages.flatMap((page) => page.products) ?? EMPTY_PRODUCTS
    : catalogData?.products ?? EMPTY_PRODUCTS;
  const loading = progressive ? infiniteCatalog.isLoading : queryLoading;

  // Pre-index products by category slug for O(1) lookups
  const productsByCategorySlug = useMemo(() => {
    const map = new Map<string, Product[]>();
    for (const p of productsRaw) {
      const slug = p.category?.slug;
      if (!slug) continue;
      const arr = map.get(slug);
      if (arr) arr.push(p);
      else map.set(slug, [p]);
    }
    return map;
  }, [productsRaw]);

  const getProductsByCategory = useCallback(
    (slug: string) => productsByCategorySlug.get(slug) ?? [],
    [productsByCategorySlug]
  );

  const trendingProducts = useMemo(
    () => productsRaw.filter(p => p.is_trending).slice(0, 12),
    [productsRaw]
  );

  return {
    products: productsRaw,
    categories,
    totalProducts: firstPage?.totalProducts ?? catalogData?.totalProducts ?? productsRaw.length,
    categoryCounts: firstPage?.categoryCounts ?? catalogData?.categoryCounts ?? {},
    brandNames: firstPage?.brandNames ?? catalogData?.brandNames ?? [],
    loading,
    hasNextPage: infiniteCatalog.hasNextPage,
    fetchNextPage: infiniteCatalog.fetchNextPage,
    isFetchingNextPage: infiniteCatalog.isFetchingNextPage,
    getProductsByCategory,
    trendingProducts,
  };
};
