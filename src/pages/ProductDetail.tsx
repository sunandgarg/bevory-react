import { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Heart, Share2, MapPin, ChevronDown, ArrowLeftRight, Check, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MobileLayout from "@/components/layout/MobileLayout";
import { apiClient } from "@/integrations/api/client";
import { useRouteCity } from "@/hooks/useRouteCity";
import { useProducts } from "@/hooks/useProducts";
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
import { BEVORY_CITIES, cityRecordIdFromSlug } from "@/lib/locations";

interface FAQ {
  question: string;
  answer: string;
}

interface Product {
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

interface CityPrice extends VolumePrice {
  cityName: string;
  citySlug: string;
}

const normalizeVolume = (value: string) => value.toLowerCase().replace(/\s+/g, "");
const volumeSize = (value: string) => Number.parseInt(value.replace(/[^0-9]/g, "")) || 0;

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
  const [unavailableVariant, setUnavailableVariant] = useState(false);
  const [otherCityPrices, setOtherCityPrices] = useState<CityPrice[]>([]);
  const [liked, setLiked] = useState(false);
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [reviewRefresh, setReviewRefresh] = useState(0);
  const [loadRelatedProducts, setLoadRelatedProducts] = useState(false);

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
  const { products } = useProducts(loadRelatedProducts);
  const { addToCompare, isInCompare, setShowCompareSheet } = useCompare();
  const { toast } = useToast();
  const navigate = useNavigate();
  const requestedVolume = volume ? normalizeVolume(volume) : null;
  const priceCityId = routeCity
    ? cityRecordIdFromSlug(routeCity.slug)
    : selectedCity?.id;
  const displayCityName = routeCity?.name || selectedCity?.name;

  useEffect(() => {
    if (product && !product.image_url) setLoadRelatedProducts(true);
  }, [product]);

  const currentPrice = volumePrices.find((vp) => normalizeVolume(vp.volume) === normalizeVolume(selectedVolume));
  const price = currentPrice?.price ?? null;
  const mrp = currentPrice?.mrp ?? null;

  useEffect(() => {
    const fetchProduct = async () => {
      if (!effectiveSlug) return;

      setLoading(true);
      setUnavailableVariant(false);
      setOtherCityPrices([]);

      setVolumePrices([]);

      // Try to fetch by slug first, then by id for backwards compatibility
      let productData = null;

      const { data: dataBySlug } = await apiClient
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
        const { data: dataById } = await apiClient
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
      }

      if (!productData) {
        setLoading(false);
        return;
      }

      // Parse FAQs
      const parsedProduct = {
        ...productData,
        faqs: Array.isArray(productData.faqs) ? (productData.faqs as unknown as FAQ[]) : [],
      };

      setProduct(parsedProduct);
      setLoading(false);

      // Fetch this product once, then split prices by city. This also gives an
      // unpriced city page useful links to cities where a price is available.
      if (priceCityId) {
        const { data: priceData } = await apiClient
          .from("product_prices")
          .select("*")
          .eq("product_id", productData.id)
          .eq("price_available", true)
          .neq("requires_review", true);

        const validPrices = (priceData ?? []).filter((item) => Number(item.price) > 0);
        const localPriceData = validPrices.filter((item) => item.city_id === priceCityId);
        const cityById = new Map(BEVORY_CITIES.map((city) => [cityRecordIdFromSlug(city.slug), city]));
        setOtherCityPrices(validPrices.flatMap((item) => {
          if (item.city_id === priceCityId) return [];
          const city = cityById.get(item.city_id);
          if (!city) return [];
          return [{
            cityName: city.name,
            citySlug: city.slug,
            volume: item.volume || `${item.volume_ml || ""}ml`,
            price: Number(item.price),
            mrp: item.mrp == null ? null : Number(item.mrp),
            in_stock: item.in_stock ?? true,
          }];
        }));

        if (localPriceData.length > 0) {
          const prices: VolumePrice[] = localPriceData.map((p) => ({
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
  }, [effectiveSlug, priceCityId, requestedVolume]);

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

  const displayRating = product?.rating && product.rating > 0
    ? Number(product.rating).toFixed(1)
    : null;
  const displayReviewCount = product?.review_count || 0;

  // Keep client-rendered metadata aligned with the initial Cloudflare SEO shell.
  useEffect(() => {
    if (product && canonicalPath) {
      const productLabel = `${product.brand} ${product.name}`.trim();
      const cityName = routeCity?.name || selectedCity?.name || "Gurgaon";
      const variantLabel = requestedVolume ? ` ${selectedVolume}` : "";
      const title = `${productLabel}${variantLabel} Price in ${cityName} | Bevory`;
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
        ],
      });

    }

    return () => {
      document.title = "Bevory - Know Before You Drink";
      document.querySelector('script[data-bevory-seo="product"]')?.remove();
    };
  }, [
    canonicalCitySlug,
    canonicalPath,
    displayRating,
    displayReviewCount,
    price,
    product,
    requestedVolume,
    routeCity?.name,
    selectedCity?.name,
    selectedVolume,
    unavailableVariant,
    volumePrices,
  ]);

  const relatedProducts = products
    .filter((p) => p.category_id === product?.category_id && p.id !== product?.id)
    .slice(0, 6);
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
  const relevantOtherCityPrices = useMemo(() => {
    const selected = normalizeVolume(selectedVolume || "");
    const matching = selected
      ? otherCityPrices.filter((item) => normalizeVolume(item.volume) === selected)
      : otherCityPrices;
    const uniqueByCity = new Map<string, CityPrice>();
    for (const item of matching.sort((left, right) => left.price - right.price)) {
      if (!uniqueByCity.has(item.citySlug)) uniqueByCity.set(item.citySlug, item);
    }
    return [...uniqueByCity.values()].slice(0, 8);
  }, [otherCityPrices, selectedVolume]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${product?.brand} ${product?.name}`,
        text: `Check out ${product?.brand} ${product?.name} on Bevory`,
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
      }));
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
          <div className="text-5xl mb-4">❓</div>
          <h3 className="font-semibold">Product not found</h3>
          <Link to="/search" className="text-accent mt-2 inline-block">
            Browse products →
          </Link>
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
          className="aspect-square bg-muted/30 flex items-center justify-center relative overflow-hidden"
        >
          {product.image_url ? (
            <div className="w-full h-full">
              <OptimizedImage
                src={product.image_url}
                alt={`${product.brand} ${product.name}${selectedVolume ? ` ${selectedVolume}` : ""} bottle`}
                width={720}
                height={720}
                className="w-full h-full"
                objectFit="contain"
                priority
                onLoadComplete={() => setLoadRelatedProducts(true)}
              />
            </div>
          ) : (
            <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-9xl">
              {product.image_emoji || "🥃"}
            </motion.span>
          )}

          {/* Origin badge */}
          {product.origin && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-sm flex items-center gap-1">
              <span>{product.origin_flag}</span>
              <span className="text-muted-foreground">{product.origin}</span>
            </div>
          )}

          {/* Trending badge */}
          {product.is_trending && (
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm text-xs font-medium text-accent-foreground">
              🔥 Trending
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
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Link
                to={`/${canonicalCitySlug}/category/${product.category?.slug}`}
                className="px-2 py-0.5 rounded bg-secondary text-xs font-medium"
              >
                {product.category?.emoji} {product.category?.name}
              </Link>
              {product.sub_category && (
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent text-xs font-medium">
                  {product.sub_category.emoji} {product.sub_category.name}
                </span>
              )}
              {displayRating ? (
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-medium">{displayRating}</span>
                  <span className="text-muted-foreground">
                    ({displayReviewCount} {displayReviewCount === 1 ? "review" : "reviews"})
                  </span>
                </div>
              ) : (
                <span className="text-sm text-muted-foreground">Not rated yet</span>
              )}
            </div>

            <p className="text-muted-foreground">{product.brand}</p>
            <h1 className="text-2xl font-serif font-bold text-foreground">{product.name}</h1>
          </div>

          {/* Price with Volume & City Selector */}
          <div className="p-4 rounded-xl bg-card border border-border space-y-4">
            {/* City Selector */}
            <button
              onClick={() => setShowCitySelector(true)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="w-3 h-3" />
              {displayCityName ? `Price in ${displayCityName}` : "Select city for price"}
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Volume Options */}
            {displayVolumes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {displayVolumes.map((variant) => (
                  <Link
                    key={variant.volume}
                    to={generateProductUrlWithVolume({
                      citySlug: canonicalCitySlug,
                      productSlug: product.slug || product.id,
                    }, variant.volume)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      normalizeVolume(selectedVolume) === normalizeVolume(variant.volume)
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <span className="block">{variant.volume}</span>
                    <span className="block text-xs opacity-80">
                      {variant.price ? `₹${variant.price.toLocaleString("en-IN")}` : "No price"}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* Price Display */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className={price ? "text-3xl font-bold" : "text-lg font-semibold text-muted-foreground"}>
                    {price ? `₹${price.toLocaleString("en-IN")}` : "Price not available"}
                  </span>
                  {price && mrp && Number(mrp) > Number(price) && (
                    <span className="text-lg text-muted-foreground line-through">₹{mrp.toLocaleString()}</span>
                  )}
                  {selectedVolume && (
                    <span className="text-sm text-muted-foreground">for {selectedVolume}</span>
                  )}
                </div>
              </div>
              {price && mrp && Number(mrp) > Number(price) && (
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                  {Math.round(((Number(mrp) - Number(price)) / Number(mrp)) * 100)}% off
                </div>
              )}
            </div>
            <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              {price
                ? `Indicative price for ${displayCityName || "your selected city"}. Local retail prices may vary.`
                : `No local price is listed for ${displayCityName || "your selected city"} yet.`}
            </p>
          </div>

          {relevantOtherCityPrices.length > 0 && (
            <section aria-labelledby="other-city-prices">
              <h2 id="other-city-prices" className="font-semibold mb-2">
                {selectedVolume || product.volume} prices in other cities
              </h2>
              <div className="divide-y divide-border rounded-xl border border-border bg-card">
                {relevantOtherCityPrices.map((item) => (
                  <Link
                    key={`${item.citySlug}-${item.volume}`}
                    to={generateProductUrlWithVolume({
                      citySlug: item.citySlug,
                      productSlug: product.slug || product.id,
                    }, item.volume)}
                    className="flex items-center justify-between px-4 py-3 text-sm hover:bg-secondary/50 transition-colors"
                  >
                    <span>{item.cityName}</span>
                    <span className="font-semibold text-accent">₹{item.price.toLocaleString("en-IN")}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Quick Info */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-secondary text-center">
              <p className="text-xs text-muted-foreground mb-1">Selected</p>
              <p className="font-semibold">{selectedVolume || product.volume || "—"}</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary text-center">
              <p className="text-xs text-muted-foreground mb-1">ABV</p>
              <p className="font-semibold">{product.abv ? `${product.abv}%` : "—"}</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary text-center">
              <p className="text-xs text-muted-foreground mb-1">Age</p>
              <p className="font-semibold">{product.age || "—"}</p>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Taste Profile */}
          {product.taste_profile && (
            <div>
              <h3 className="font-semibold mb-2">Taste Profile</h3>
              <p className="text-muted-foreground">{product.taste_profile}</p>
            </div>
          )}

          {/* Tasting Notes */}
          {product.tasting_notes && (
            <div>
              <h3 className="font-semibold mb-2">Tasting Notes</h3>
              <p className="text-muted-foreground leading-relaxed">{product.tasting_notes}</p>
            </div>
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
                      {product.type_description ||
                        product.product_type?.description ||
                        `A type classification for ${product.category?.name || "beverages"}.`}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              {(product.type_description || product.product_type?.description) && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.type_description || product.product_type?.description}
                </p>
              )}
            </div>
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
          <OtherProductsSection products={relatedProducts as any} title={`More ${product.category?.name || "Products"}`} />

          {/* Explore Other Categories */}
          <ExploreCategories currentCategoryId={product.category_id} />

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
