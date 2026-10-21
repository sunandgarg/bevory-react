import { useState, useEffect, useMemo, useRef, type ReactNode } from "react";
import { useParams, Link, useNavigate, useLocation as useRouterLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Heart, Share2, MapPin, ChevronDown, ArrowLeftRight, Check, Info, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MobileLayout from "@/components/layout/MobileLayout";
import { apiClient } from "@/integrations/api/client";
import { useRouteCity } from "@/hooks/useRouteCity";
import { usePublicPageTitle } from "@/hooks/usePublicNavigation";
import { useCompare } from "@/components/home/CompareProducts";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/layout/Footer";
import RateProductSection from "@/components/product/RateProductSection";
import UserReviewsSection from "@/components/product/UserReviewsSection";
import ProductBrandSpotlight from "@/components/product/ProductBrandSpotlight";
import ProductFAQs from "@/components/product/ProductFAQs";
import RelatedArticles from "@/components/product/RelatedArticles";
import OtherProductsSection from "@/components/product/OtherProductsSection";
import ExploreCategories from "@/components/product/ExploreCategories";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { generateProductUrl, generateProductUrlWithVolume } from "@/lib/productSlug";
import { fullProductName } from "@/lib/productName";
import { cityRecordIdFromSlug } from "@/lib/locations";

interface FAQ {
  question: string;
  answer: string;
}

interface Product {
  resolvedFrom?: string;
  id: string;
  slug: string | null;
  name: string;
  brand: string;
  category_id: string | null;
  sub_category_id: string | null;
  description: string | null;
  volume: string | null;
  abv: number | null;
  age: string | null;
  origin: string | null;
  origin_flag: string | null;
  taste_profile: string | null;
  tasting_notes: string | null;
  colour_note: string | null;
  aroma_note: string | null;
  flavour_note: string | null;
  texture_note: string | null;
  finish_note: string | null;
  ingredients_note: string | null;
  production_note: string | null;
  serving_temperature: string | null;
  glassware: string | null;
  serving_guide: string | null;
  food_pairings: string[] | null;
  cocktail_uses: string | null;
  who_may_enjoy: string | null;
  label_guidance: string | null;
  responsible_notice: string | null;
  author_line: string | null;
  content_updated_at: string | null;
  product_content_version?: string | null;
  image_emoji: string | null;
  image_url: string | null;
  rating: number | null;
  review_count: number | null;
  type_tag: string | null;
  type_description: string | null;
  is_trending: boolean | null;
  faqs: FAQ[] | null;
  meta_title: string | null;
  meta_description: string | null;
  available_volumes_ml?: number[] | null;
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
  product_type?: {
    name: string;
    description: string | null;
  } | null;
}

interface VolumePrice {
  volume: string;
  price: number;
  mrp: number | null;
  in_stock: boolean;
}

interface DisplayVolume {
  volume: string;
  price: number | null;
}

interface RelatedProduct {
  id: string;
  name: string;
  brand: string;
  slug: string | null;
  image_emoji: string | null;
  image_url: string | null;
  rating: number | null;
  price: number;
  price_volume: string;
  category?: { name: string; slug: string } | null;
}

const normalizeVolume = (value: string) => value.toLowerCase().replace(/\s+/g, "");
const volumeSize = (value: string) => Number.parseInt(value.replace(/[^0-9]/g, "")) || 0;

const DeferredProductContent = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return <div ref={ref} style={visible ? undefined : { minHeight: 360 }}>{visible ? children : null}</div>;
};

// Volume options are now fetched from the database - no fixed options

const ProductDetail = () => {
  const { slug, productSlug, state, citySlug, volume } = useParams<{
    slug?: string;
    productSlug?: string;
    state?: string;
    citySlug?: string;
    volume?: string;
    category?: string;
    subcategory?: string;
  }>();

  // Use productSlug from new route or slug from legacy route
  const effectiveSlug = productSlug || slug;

  const [product, setProduct] = useState<Product | null>(null);
  const [volumePrices, setVolumePrices] = useState<VolumePrice[]>([]);
  const [selectedVolume, setSelectedVolume] = useState<string>("750ml");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [unavailableVariant, setUnavailableVariant] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [reviewRefresh, setReviewRefresh] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);

  const legacyCityByState: Record<string, string> = {
    delhi: "delhi",
    goa: "goa",
    haryana: "gurgaon",
    india: "gurgaon",
    karnataka: "bangalore",
  };
  const canonicalCitySlug = citySlug || legacyCityByState[state || ""] || "gurgaon";
  const {
    selectedCity,
    allCities,
    setSelectedCity,
    routeCity,
  } = useRouteCity(canonicalCitySlug);
  const { addToCompare, isInCompare, setShowCompareSheet } = useCompare();
  const { toast } = useToast();
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();
  const requestedVolume = volume ? normalizeVolume(volume) : null;
  const priceCityId = routeCity
    ? cityRecordIdFromSlug(routeCity.slug)
    : selectedCity?.id;
  const displayCityName = routeCity?.name || selectedCity?.name;

  const currentPrice = volumePrices.find((vp) => normalizeVolume(vp.volume) === normalizeVolume(selectedVolume));
  const price = currentPrice?.price ?? null;
  const mrp = currentPrice?.mrp ?? null;

  useEffect(() => {
    const fetchProduct = async () => {
      if (!effectiveSlug) return;

      setLoading(true);
      setLoadError(null);
      setProduct(null);
      setUnavailableVariant(false);
      setVolumePrices([]);

      // Try to fetch by slug first, then by id for backwards compatibility
      let productData = null;

      const { data: dataBySlug, error: slugError } = await apiClient
        .from("products")
        .select(
          `
          *,
          category:categories(name, slug, emoji),
          sub_category:sub_categories(name, slug, emoji),
          product_type:product_types(name, description)
        `,
        )
        .eq("slug", effectiveSlug)
        .maybeSingle();

      if (dataBySlug) {
        productData = dataBySlug;
      } else {
        // Fallback: try by ID for old links
        const { data: dataById, error: idError } = await apiClient
          .from("products")
          .select(
            `
            *,
            category:categories(name, slug, emoji),
            sub_category:sub_categories(name, slug, emoji),
            product_type:product_types(name, description)
          `,
          )
          .eq("id", effectiveSlug)
          .maybeSingle();
        productData = dataById;
        if (!dataById && (slugError || idError)) setLoadError(idError?.message || slugError?.message || "Unable to load this product");
      }

      if (!productData) {
        setLoading(false);
        return;
      }

      // Parse FAQs
      const parsedProduct = {
        ...productData,
        resolvedFrom: effectiveSlug,
        slug: productData.public_slug || productData.slug,
        faqs: Array.isArray(productData.faqs) ? (productData.faqs as unknown as FAQ[]) : [],
      };

      setProduct(parsedProduct);
      setLoading(false);

      if (productData.category_id) {
        void (async () => {
          const { data: relatedData } = await apiClient
            .from("products")
            .select("id, name, brand, slug, image_emoji, image_url, rating, category:categories(name, slug)")
            .eq("category_id", productData.category_id)
            .eq("is_active", true)
            .neq("id", productData.id)
            .limit(24);

          const candidates = (relatedData ?? []) as Array<Omit<RelatedProduct, "price" | "price_volume">>;
          if (!priceCityId || candidates.length === 0) {
            setRelatedProducts([]);
            return;
          }

          const { data: relatedPriceData } = await apiClient
            .from("product_prices")
            .select("product_id, price, volume, volume_ml")
            .eq("city_id", priceCityId)
            .eq("price_available", true)
            .neq("requires_review", true)
            .in("product_id", candidates.map((candidate) => candidate.id));

          const preferredPriceByProduct = new Map<string, {
            price: number;
            volume: string;
            volumeMl: number;
          }>();
          for (const row of relatedPriceData ?? []) {
            const localPrice = Number(row.price);
            const volumeMl = Number(row.volume_ml) || volumeSize(String(row.volume || ""));
            if (!Number.isFinite(localPrice) || localPrice <= 0) continue;
            const current = preferredPriceByProduct.get(row.product_id);
            const isPreferred = !current
              || (volumeMl === 750 && current.volumeMl !== 750)
              || ((volumeMl === 750) === (current.volumeMl === 750) && volumeMl > current.volumeMl);
            if (isPreferred) {
              preferredPriceByProduct.set(row.product_id, {
                price: localPrice,
                volume: String(row.volume || (volumeMl ? `${volumeMl}ml` : "")),
                volumeMl,
              });
            }
          }

          setRelatedProducts(candidates.flatMap((candidate) => {
            const localPrice = preferredPriceByProduct.get(candidate.id);
            return localPrice ? [{
              ...candidate,
              price: localPrice.price,
              price_volume: localPrice.volume,
            }] : [];
          }).slice(0, 6));
        })();
      } else {
        setRelatedProducts([]);
      }

      // Product pages only request prices for their route city. Besides keeping
      // local prices unambiguous, this avoids transferring and processing every
      // city row for the same product.
      if (priceCityId) {
        const { data: priceData } = await apiClient
          .from("product_prices")
          .select("volume, volume_ml, price, mrp, in_stock")
          .eq("product_id", productData.id)
          .eq("city_id", priceCityId)
          .eq("price_available", true)
          .neq("requires_review", true);

        const validPrices = (priceData ?? []).filter((item) => Number(item.price) > 0);
        if (validPrices.length > 0) {
          const prices: VolumePrice[] = validPrices.map((p) => ({
            volume: p.volume || "750ml",
            price: p.price,
            mrp: p.mrp,
            in_stock: p.in_stock ?? true,
          }));
          // Sort by volume size (largest first)
          prices.sort((a, b) => volumeSize(b.volume) - volumeSize(a.volume));
          setVolumePrices(prices);
          const routeVolume = requestedVolume
            ? prices.find((candidate) => normalizeVolume(candidate.volume) === requestedVolume)
            : null;
          const globallyKnownVolume = requestedVolume && (
            (productData.available_volumes_ml ?? []).some((size: number) => normalizeVolume(`${size}ml`) === requestedVolume)
            || normalizeVolume(String(productData.volume || "")) === requestedVolume
          );
          if (requestedVolume && !routeVolume) {
            setUnavailableVariant(!globallyKnownVolume);
            setSelectedVolume(requestedVolume);
          } else {
            const defaultVol = routeVolume || prices.find((p) => normalizeVolume(p.volume) === "750ml") || prices[0];
            if (defaultVol) setSelectedVolume(defaultVol.volume);
          }
        } else {
          setVolumePrices([]);
          if (requestedVolume) {
            const globallyKnownVolume = (productData.available_volumes_ml ?? [])
              .some((size: number) => normalizeVolume(`${size}ml`) === requestedVolume)
              || normalizeVolume(String(productData.volume || "")) === requestedVolume;
            setUnavailableVariant(!globallyKnownVolume);
          }
          setSelectedVolume(
            requestedVolume
            || String(productData.volume || "")
            || (Array.isArray(productData.available_volumes_ml) && productData.available_volumes_ml[0]
              ? `${productData.available_volumes_ml[0]}ml`
              : ""),
          );
        }
      } else {
        setVolumePrices([]);
        if (requestedVolume) {
          const globallyKnownVolume = (productData.available_volumes_ml ?? [])
            .some((size: number) => normalizeVolume(`${size}ml`) === requestedVolume)
            || normalizeVolume(String(productData.volume || "")) === requestedVolume;
          setUnavailableVariant(!globallyKnownVolume);
        }
        setSelectedVolume(requestedVolume || String(productData.volume || ""));
      }

      setLoading(false);
    };

    fetchProduct();
  }, [effectiveSlug, priceCityId, requestedVolume, loadAttempt]);

  const productPath = product ? generateProductUrl({
    citySlug: canonicalCitySlug,
    productSlug: product.slug || product.id,
  }) : null;
  const canonicalPath = productPath && requestedVolume
    ? generateProductUrlWithVolume({
      citySlug: canonicalCitySlug,
      productSlug: product?.slug || product?.id,
    }, requestedVolume)
    : productPath;

  useEffect(() => {
    if (product?.resolvedFrom === effectiveSlug && canonicalPath && routerLocation.pathname !== canonicalPath) {
      navigate(`${canonicalPath}${routerLocation.search}${routerLocation.hash}`, { replace: true });
    }
  }, [product?.resolvedFrom, effectiveSlug, canonicalPath, routerLocation.pathname, routerLocation.search, routerLocation.hash, navigate]);

  const displayRating = product?.rating && product.rating > 0
    ? Number(product.rating).toFixed(1)
    : null;
  const displayReviewCount = product?.review_count || 0;
  const productLabel = product ? fullProductName(product.brand, product.name) : "";
  usePublicPageTitle(productLabel);
  const hasResearchedEditorial = product?.product_content_version?.startsWith("researched-product-batch-") ?? false;
  const pageHeading = displayCityName
    ? `${productLabel} price in ${displayCityName}`
    : productLabel;
  const editorialDate = product?.content_updated_at
    ? new Date(product.content_updated_at).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : null;
  const sensoryDetails = product ? [
    ["Colour", product.colour_note],
    ["Aroma", product.aroma_note],
    ["Flavour", product.flavour_note],
    ["Body", product.texture_note],
    ["Finish", product.finish_note],
  ].filter((item): item is [string, string] => Boolean(item[1])) : [];

  // Keep client-rendered metadata aligned with the initial Cloudflare SEO shell.
  useEffect(() => {
    if (product && canonicalPath) {
      const cityName = routeCity?.name || selectedCity?.name || "Gurgaon";
      const variantLabel = requestedVolume ? ` ${selectedVolume}` : "";
      const title = `${productLabel}${variantLabel} Price in ${cityName} | BevOry`;
      const description = price
        ? `${productLabel}${variantLabel} price in ${cityName} is ₹${price.toLocaleString("en-IN")}. Compare locally listed bottle sizes, product details and reviews.`
        : `${productLabel}${variantLabel} details for ${cityName}. A verified local price is not available yet; explore known bottle sizes, product information and reviews.`;
      const canonicalUrl = `https://bevory.in${canonicalPath}`;

      document.title = title;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);

      // Add canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);

      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement("meta");
        robots.setAttribute("name", "robots");
        document.head.appendChild(robots);
      }
      robots.setAttribute(
        "content",
        unavailableVariant
          ? "noindex, follow, max-image-preview:large"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      );

      // Add structured data for SEO (JSON-LD)
      let jsonLd = document.querySelector('script[data-bevory-seo="product"]');
      if (!jsonLd) {
        jsonLd = document.createElement("script");
        jsonLd.setAttribute("type", "application/ld+json");
        jsonLd.setAttribute("data-bevory-seo", "product");
        document.head.appendChild(jsonLd);
      }

      // Use valid image URL or default OG image
      const productImage =
        product.image_url &&
        (product.image_url.startsWith("http://") ||
          product.image_url.startsWith("https://") ||
          product.image_url.startsWith("/"))
          ? product.image_url
          : "https://bevory.in/og-image.png";

      const productGroupId = product.slug || product.id;
      const variantSchema = (variant: VolumePrice) => ({
        "@type": "Product",
        name: `${productLabel} ${variant.volume}`,
        description: `${productLabel} ${variant.volume} with an indicative local price for ${cityName}.`,
        brand: { "@type": "Brand", name: product.brand },
        image: productImage,
        sku: `${productGroupId}-${variant.volume.toLowerCase().replace(/\s+/g, "")}-${canonicalCitySlug}`,
        size: variant.volume,
        category: product.category?.name || "Alcoholic Beverages",
        url: `https://bevory.in${generateProductUrlWithVolume({
          citySlug: canonicalCitySlug,
          productSlug: productGroupId,
        }, variant.volume)}`,
        inProductGroupWithID: productGroupId,
        offers: {
          "@type": "Offer",
          url: `https://bevory.in${generateProductUrlWithVolume({
            citySlug: canonicalCitySlug,
            productSlug: productGroupId,
          }, variant.volume)}`,
          price: variant.price,
          priceCurrency: "INR",
          availability: variant.in_stock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          areaServed: { "@type": "City", name: cityName },
        },
      });

      const selectedVariant = volumePrices.find((variant) => normalizeVolume(variant.volume) === normalizeVolume(selectedVolume));
      const variantGroup = {
        "@type": "ProductGroup",
        name: productLabel,
        productGroupID: productGroupId,
      };
      const productSchema: Record<string, unknown> = requestedVolume
        ? selectedVariant
          ? {
            ...variantSchema(selectedVariant),
            isVariantOf: variantGroup,
          }
          : {
            "@type": "Product",
            name: `${productLabel} ${selectedVolume}`,
            description: `${productLabel} ${selectedVolume} product details for ${cityName}. A verified local price is not available yet.`,
            brand: { "@type": "Brand", name: product.brand },
            image: productImage,
            sku: `${productGroupId}-${normalizeVolume(selectedVolume)}-${canonicalCitySlug}`,
            size: selectedVolume,
            category: product.category?.name || "Alcoholic Beverages",
            url: canonicalUrl,
            isVariantOf: variantGroup,
          }
        : {
          "@type": "ProductGroup",
          name: productLabel,
          description: product.description || `${productLabel} local price guide for ${cityName}.`,
          brand: { "@type": "Brand", name: product.brand },
          image: productImage,
          productGroupID: productGroupId,
          variesBy: ["https://schema.org/size"],
          url: canonicalUrl,
          hasVariant: volumePrices.map(variantSchema),
        };

      if (displayRating && displayReviewCount > 0) {
        productSchema.aggregateRating = {
          "@type": "AggregateRating",
          ratingValue: displayRating,
          reviewCount: displayReviewCount,
          bestRating: "5",
          worstRating: "1",
        };
      }

      jsonLd.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          productSchema,
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://bevory.in/" },
              {
                "@type": "ListItem",
                position: 2,
                name: cityName,
                item: `https://bevory.in/${canonicalCitySlug}`,
              },
              ...(product.category?.slug ? [{
                "@type": "ListItem",
                position: 3,
                name: product.category.name,
                item: `https://bevory.in/${canonicalCitySlug}/category/${product.category.slug}`,
              }] : []),
              {
                "@type": "ListItem",
                position: product.category?.slug ? 4 : 3,
                name: `${productLabel}${variantLabel}`,
                item: canonicalUrl,
              },
            ],
          },
          ...(product.faqs?.length ? [{
            "@type": "FAQPage",
            mainEntity: product.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }] : []),
        ],
      });

    }

    return () => {
      document.title = "BevOry - Know Before You Drink";
      document.querySelector('script[data-bevory-seo="product"]')?.remove();
    };
  }, [
    canonicalCitySlug,
    canonicalPath,
    displayRating,
    displayReviewCount,
    price,
    product,
    productLabel,
    requestedVolume,
    routeCity?.name,
    selectedCity?.name,
    selectedVolume,
    unavailableVariant,
    volumePrices,
  ]);

  const displayVolumes = useMemo<DisplayVolume[]>(() => {
    const byVolume = new Map<string, DisplayVolume>();
    volumePrices.forEach((variant) => byVolume.set(normalizeVolume(variant.volume), {
      volume: variant.volume,
      price: variant.price,
    }));
    (product?.available_volumes_ml ?? []).forEach((volumeMl) => {
      const label = `${volumeMl}ml`;
      if (!byVolume.has(normalizeVolume(label))) byVolume.set(normalizeVolume(label), { volume: label, price: null });
    });
    if (product?.volume && !byVolume.has(normalizeVolume(product.volume))) {
      byVolume.set(normalizeVolume(product.volume), { volume: product.volume, price: null });
    }
    if (requestedVolume && !byVolume.has(requestedVolume)) {
      byVolume.set(requestedVolume, { volume: requestedVolume, price: null });
    }
    return [...byVolume.values()].sort((left, right) => volumeSize(right.volume) - volumeSize(left.volume));
  }, [product?.available_volumes_ml, product?.volume, requestedVolume, volumePrices]);
  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${product?.brand} ${product?.name}`,
        text: `Check out ${product?.brand} ${product?.name} on BevOry`,
        url: window.location.href,
      });
    } catch {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Product link copied to clipboard",
      });
    }
  };

  const handleCompare = async () => {
    if (!product?.id) return;

    if (isInCompare(product.id)) {
      setShowCompareSheet(true);
    } else {
      await addToCompare(product.id);
      toast({
        title: "Added to compare",
        description: "Product added to comparison list",
      });
    }
  };

  const handleCitySelect = (city: any) => {
    setSelectedCity(city);
    setShowCitySelector(false);
    if (product) {
      navigate(generateProductUrl({
        cityName: city.name,
        productSlug: product.slug || product.id,
      }), { replace: true });
    }
    toast({
      title: `City changed to ${city.name}`,
      description: "Prices updated for your location",
    });
  };

  if (loading) {
    return (
      <MobileLayout showBack showLocation={false} showBottomNav={false}>
        <div className="pb-24">
          <div
            key="product-hero"
            className="aspect-square bg-muted/30 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-muted/30 animate-pulse" />
          </div>
          <div className="p-4">
            <div className="h-6 w-48 bg-muted rounded animate-pulse mb-2" />
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </MobileLayout>
    );
  }

  if (!product) {
    return (
      <MobileLayout showBack showLocation={false}>
        <div className="p-4 text-center py-12">
          <div className="text-5xl mb-4">{loadError ? "↻" : "❓"}</div>
          <h3 className="font-semibold">{loadError ? "This product did not load" : "Product not found"}</h3>
          {loadError ? (
            <>
              <p className="mt-2 text-sm text-muted-foreground">Your connection may have paused. The product is still available to retry.</p>
              <Button className="mt-4" onClick={() => setLoadAttempt((attempt) => attempt + 1)}>
                <RefreshCw className="mr-2 h-4 w-4" /> Retry
              </Button>
            </>
          ) : (
            <Link to="/search" className="text-accent mt-2 inline-block">Browse products →</Link>
          )}
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout showBack showLocation={false} showBottomNav={false}>
      <div className="pb-24">
        {/* Product Image */}
        <div
          key="product-hero"
          className="relative flex h-[350px] items-center justify-center overflow-hidden bg-white"
        >
          {product.image_url ? (
            <div className="h-full w-full p-8 sm:p-12">
              <OptimizedImage
                src={product.image_url}
                alt={`${product.brand} ${product.name}${selectedVolume ? ` ${selectedVolume}` : ""} bottle`}
                width={1080}
                height={1080}
                sizes="100vw"
                className="w-full h-full"
                objectFit="contain"
                priority
              />
            </div>
          ) : (
            <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-9xl">
              {product.image_emoji || "🥃"}
            </motion.span>
          )}

          {/* Origin badge */}
          {(product.origin || product.origin_flag) && (
            <div className="absolute right-4 top-10 flex flex-col items-center gap-1 bg-transparent text-sm text-muted-foreground [writing-mode:vertical-rl]">
              <span className="[writing-mode:initial]">{product.origin_flag}</span>
              {product.origin && <span className="text-muted-foreground">{product.origin}</span>}
            </div>
          )}

          {/* Trending badge */}
          {product.is_trending && (
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm text-xs font-medium text-accent-foreground">
              Trending
            </div>
          )}

          {/* Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-full bg-card/90 backdrop-blur-sm ${
                liked ? "text-red-500" : "text-muted-foreground"
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-card/90 backdrop-blur-sm text-muted-foreground"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <Link
                  to={`/${canonicalCitySlug}/brand/${product.brand.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="inline-flex items-center text-xl font-semibold text-accent underline decoration-accent/60 underline-offset-4"
                >
                  Brand: {product.brand} <span aria-hidden="true" className="ml-1">›</span>
                </Link>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">{productLabel}</h1>
              </div>
              {displayRating ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-[#ed5f9e] px-3 py-2 text-lg font-semibold text-white">
                  <Star className="h-5 w-5 fill-current" /> {displayRating}
                </span>
              ) : (
                <span className="shrink-0 text-xs text-muted-foreground">Not rated</span>
              )}
            </div>
            <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">{selectedVolume || product.volume || "See label"}</p>
            {(product.author_line || editorialDate) && (
              <p className="mt-2 text-xs text-muted-foreground">
                {product.author_line ? `Editorial: ${product.author_line}` : ""}
                {product.author_line && editorialDate ? " · " : ""}
                {editorialDate ? `Updated ${editorialDate}` : ""}
              </p>
            )}
          </div>

          {/* Price with Volume & City Selector */}
          <div className="space-y-4 border-y border-border py-5">
            {/* City Selector */}
            <button
              onClick={() => setShowCitySelector(true)}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <MapPin className="w-3 h-3" />
              {displayCityName ? `Price in ${displayCityName}` : "Select city for price"}
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Volume Options */}
            {displayVolumes.length > 0 && (
              <div className="flex flex-wrap justify-end gap-2">
                {displayVolumes.map((variant) => (
                  <Link
                    key={variant.volume}
                    to={generateProductUrlWithVolume({
                      citySlug: canonicalCitySlug,
                      productSlug: product.slug || product.id,
                    }, variant.volume)}
                    className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all ${
                      normalizeVolume(selectedVolume) === normalizeVolume(variant.volume)
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-border bg-background text-foreground hover:border-accent/50"
                    }`}
                  >
                    <span className="block uppercase">{variant.volume}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Price Display */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className={price ? "text-4xl font-bold tracking-tight" : "text-lg font-semibold text-muted-foreground"}>
                    {price ? `₹${price.toLocaleString("en-IN")}` : "Price not available"}
                  </span>
                  {price && mrp && Number(mrp) > Number(price) && (
                    <span className="text-sm text-muted-foreground line-through">₹{mrp.toLocaleString()}</span>
                  )}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">* This is the MRP set by the state government</p>
              </div>
            </div>
            <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              {price
                ? `Indicative price for ${displayCityName || "your selected city"}. Local retail prices may vary.`
                : `No local price is listed for ${displayCityName || "your selected city"} yet.`}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button variant="secondary" className="h-14 rounded-xl gap-2 text-sm" onClick={() => setLiked(!liked)}>
              <Heart className={`h-5 w-5 text-accent ${liked ? "fill-current" : ""}`} /> Wishlist
            </Button>
            <Button variant="secondary" className="h-14 rounded-xl gap-2 text-sm" onClick={handleCompare}>
              <ArrowLeftRight className="h-5 w-5 text-accent" /> Compare
            </Button>
            <Button variant="secondary" className="h-14 rounded-xl gap-2 text-sm" onClick={() => navigate("/party-planner")}>
              <span className="text-lg text-accent" aria-hidden="true">✣</span> Party
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-secondary text-center">
              <p className="text-xs text-muted-foreground mb-1">Selected</p>
              <p className="font-semibold">{selectedVolume || product.volume || "See label"}</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary text-center">
              <p className="text-xs text-muted-foreground mb-1">ABV</p>
              <p className="font-semibold">{product.abv ? `${product.abv}%` : "See label"}</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary text-center">
              <p className="text-xs text-muted-foreground mb-1">Age</p>
              <p className="font-semibold">{product.age || "Not verified"}</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary text-center">
              <p className="text-xs text-muted-foreground mb-1">Origin</p>
              <p className="font-semibold">{product.origin_flag && <span className="mr-1">{product.origin_flag}</span>}{product.origin || "Not verified"}</p>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <section>
              <h2 className="font-semibold mb-2">About {productLabel}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </section>
          )}

          {/* Taste Profile */}
          {product.taste_profile && (
            <section>
              <h2 className="font-semibold mb-2">General taste profile</h2>
              <p className="text-muted-foreground">{product.taste_profile}</p>
            </section>
          )}

          {/* Tasting Notes */}
          {product.tasting_notes && (
            <section>
              <h2 className="font-semibold mb-2">How to assess this product</h2>
              <p className="text-muted-foreground leading-relaxed">{product.tasting_notes}</p>
            </section>
          )}

          {sensoryDetails.length > 0 && (
            <section aria-labelledby="sensory-guide-heading">
              <h2 id="sensory-guide-heading" className="font-semibold mb-3">{hasResearchedEditorial ? "Tasting notes" : "Sensory guide"}</h2>
              <dl className="divide-y divide-border border-y border-border">
                {sensoryDetails.map(([label, value]) => (
                  <div key={label} className="py-3 grid grid-cols-[72px_1fr] gap-3 text-sm">
                    <dt className="font-medium text-foreground">{label}</dt>
                    <dd className="text-muted-foreground leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Product Type */}
          {(product.type_tag || product.product_type) && (
            <div className="p-4 rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="font-medium">
                  {product.type_tag || product.product_type?.name}
                </Badge>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="flex items-center gap-1 text-xs text-accent hover:underline">
                      <Info className="w-3 h-3" />
                      What's this?
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="text-sm">
                      {hasResearchedEditorial
                        ? product.type_tag
                        : product.type_description || product.product_type?.description ||
                          `A type classification for ${product.category?.name || "beverages"}.`}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              {(product.type_description || (!hasResearchedEditorial && product.product_type?.description)) && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.type_description || product.product_type?.description}
                </p>
              )}
            </div>
          )}

          <DeferredProductContent>
            <div className="space-y-6">
              {(product.serving_guide || product.serving_temperature || product.glassware) && (
                <section aria-labelledby="serving-guide-heading">
                  <h2 id="serving-guide-heading" className="font-semibold mb-2">Serving guide</h2>
                  {product.serving_guide && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.serving_guide}</p>
                  )}
                  <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="font-medium">Temperature</dt>
                      <dd className="mt-1 text-muted-foreground">{product.serving_temperature || "Follow the current label"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Glassware</dt>
                      <dd className="mt-1 text-muted-foreground">{product.glassware || "Clean glassware suited to the style"}</dd>
                    </div>
                  </dl>
                </section>
              )}

              {Array.isArray(product.food_pairings) && product.food_pairings.length > 0 && (
                <section aria-labelledby="pairing-heading">
                  <h2 id="pairing-heading" className="font-semibold mb-2">Food pairing ideas</h2>
                  <ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {product.food_pairings.map((pairing) => <li key={pairing}>{pairing}</li>)}
                  </ul>
                </section>
              )}

              {product.cocktail_uses && (
                <section>
                  <h2 className="font-semibold mb-2">Cocktail use</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.cocktail_uses}</p>
                </section>
              )}

              {product.who_may_enjoy && (
                <section>
                  <h2 className="font-semibold mb-2">{hasResearchedEditorial ? "Why this bottle stands out" : "Who may find it useful to compare"}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.who_may_enjoy}</p>
                </section>
              )}

              {(product.ingredients_note || product.production_note || product.label_guidance) && (
                <section aria-labelledby="label-check-heading">
                  <h2 id="label-check-heading" className="font-semibold mb-3">{hasResearchedEditorial ? "How it's made" : "Before you choose"}</h2>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    {product.ingredients_note && <p><strong className="text-foreground">Ingredients:</strong> {product.ingredients_note}</p>}
                    {product.production_note && <p>{!hasResearchedEditorial && <strong className="text-foreground">Production: </strong>}{product.production_note}</p>}
                    {product.label_guidance && <p><strong className="text-foreground">Label check:</strong> {product.label_guidance}</p>}
                  </div>
                </section>
              )}

              {product.responsible_notice && (
                <aside className="border-l-2 border-accent pl-4 text-sm text-muted-foreground leading-relaxed">
                  {product.responsible_notice}
                </aside>
              )}

              {/* Rate This Product */}
              <RateProductSection productId={product.id} onReviewSubmitted={() => setReviewRefresh((prev) => prev + 1)} />

              {/* User Reviews */}
              <UserReviewsSection productId={product.id} refreshTrigger={reviewRefresh} />

              {/* Brand Spotlight */}
              <ProductBrandSpotlight brandName={product.brand} />

              {/* FAQs */}
              <ProductFAQs faqs={product.faqs || []} />

              {/* Related Articles */}
              <RelatedArticles productId={product.id} brandName={product.brand} />

              {/* Other Products in Same Category */}
              <OtherProductsSection products={relatedProducts} title={`More ${product.category?.name || "Products"}`} />

              {/* Explore Other Categories */}
              <ExploreCategories currentCategoryId={product.category_id} />
            </div>
          </DeferredProductContent>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-xl border-t border-border">
        <div className="flex gap-3 max-w-lg mx-auto">
          <Button variant="outline" className="flex-1 gap-2" onClick={handleCompare}>
            <ArrowLeftRight className="w-4 h-4" />
            {isInCompare(product?.id || "") ? "View Compare" : "Compare"}
          </Button>
          <Button className="flex-1 bg-accent text-accent-foreground gap-2" onClick={() => setShowCitySelector(true)}>
            <MapPin className="w-4 h-4" />
            Change City
          </Button>
        </div>
      </div>

      {/* City Selector Dialog */}
      <Dialog open={showCitySelector} onOpenChange={setShowCitySelector}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Select Your City</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-1">
              {allCities
                .filter((c) => c.state)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCitySelect(city)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors ${
                      selectedCity?.id === city.id ? "bg-accent/10 border border-accent" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{city.name}</span>
                      {city.state && <span className="text-sm text-muted-foreground">({city.state.name})</span>}
                    </div>
                    {selectedCity?.id === city.id && <Check className="w-4 h-4 text-accent" />}
                  </button>
                ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </MobileLayout>
  );
};

export default ProductDetail;
