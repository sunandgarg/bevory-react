import { useState, useEffect, memo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ExternalLink, ChevronRight, Wine, Utensils, Sparkles, HelpCircle, Award, BookOpen } from "lucide-react";
import { apiClient } from "@/integrations/api/client";
import MobileLayout from "@/components/layout/MobileLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouteCity } from "@/hooks/useRouteCity";
import { generateProductUrlStatic } from "@/hooks/useProductUrl";
import SEOHead from "@/components/SEOHead";
import OptimizedImage from "@/components/ui/OptimizedImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { citySlugFromName } from "@/lib/locations";
import CategoryBottleVisual from "@/components/category/CategoryBottleVisual";
import ProductImage from "@/components/product/ProductImage";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useInfiniteQuery } from "@tanstack/react-query";

const PRODUCT_PAGE_SIZE = 20;

interface Brand {
  id: string;
  brand_name: string;
  slug: string | null;
  logo_emoji: string | null;
  logo_url: string | null;
  image_url: string | null;
  description: string | null;
  link_url: string | null;
  featured_product_id: string | null;
  country: string | null;
  tasting_notes: unknown;
  story: string | null;
  how_to_enjoy: unknown;
  pairing_ideas: unknown;
  why_choose: string | null;
  faqs: unknown;
  final_verdict: string | null;
  meta_title: string | null;
  meta_description: string | null;
  updated_at?: string | null;
}

interface Product {
  id: string;
  name: string;
  slug: string | null;
  brand: string;
  image_emoji: string | null;
  image_url: string | null;
  rating: number | null;
  review_count: number | null;
  volume: string | null;
  abv: number | null;
  category: {
    name: string;
    slug: string;
    emoji: string | null;
  } | null;
  sub_category: {
    name: string;
    slug: string | null;
  } | null;
}

interface ProductWithPrice extends Product {
  price?: number | null;
}

interface TastingNote {
  title?: string;
  description?: string;
  note?: string;
  name?: string;
}

interface HowToEnjoy {
  title?: string;
  subheading?: string;
  description?: string;
}

interface PairingIdea {
  title?: string;
  items?: string[];
  description?: string;
}

interface FAQ {
  question?: string;
  answer?: string;
}

const BrandDetail = () => {
  const { slug, citySlug } = useParams<{ slug: string; citySlug?: string }>();
  const { selectedCity, routeCityReady } = useRouteCity(citySlug);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [brandLoading, setBrandLoading] = useState(true);
  const canonicalCitySlug = citySlug || citySlugFromName(selectedCity?.name) || "gurgaon";

  useEffect(() => {
    const fetchBrandData = async () => {
      if (!slug || !routeCityReady) return;

      let brandData = null;
      
      const { data: dataBySlug } = await apiClient
        .from("brand_spotlights")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      
      if (dataBySlug) {
        brandData = dataBySlug;
      } else {
        const { data: dataById } = await apiClient
          .from("brand_spotlights")
          .select("*")
          .eq("id", slug)
          .maybeSingle();
        brandData = dataById;
      }

      if (brandData) {
        setBrand(brandData);

      }

      setBrandLoading(false);
    };

    fetchBrandData();
  }, [routeCityReady, slug, selectedCity?.id]);

  const productPages = useInfiniteQuery({
    queryKey: ["brand-products", brand?.id ?? "none", selectedCity?.id ?? "none", PRODUCT_PAGE_SIZE],
    queryFn: async ({ pageParam }): Promise<{ products: ProductWithPrice[]; nextOffset?: number }> => {
      const { data: productsData, error } = await apiClient
        .from("products")
        .select(`
          id, name, slug, brand, image_emoji, image_url, rating, review_count, volume, abv,
          category:categories(name, slug, emoji),
          sub_category:sub_categories(name, slug)
        `)
        .eq("brand_id", brand!.id)
        .eq("is_active", true)
        .order("is_trending", { ascending: false })
        .range(pageParam, pageParam + PRODUCT_PAGE_SIZE - 1);
      if (error) throw error;

      const pageProducts = (productsData ?? []) as Product[];
      const pricesMap = new Map<string, Array<{ price: number; volume_ml: number | null }>>();
      if (pageProducts.length > 0 && selectedCity?.id) {
        const { data: pricesData } = await apiClient
          .from("product_prices")
          .select("product_id, price, volume_ml")
          .eq("city_id", selectedCity.id)
          .eq("price_available", true)
          .neq("requires_review", true)
          .in("product_id", pageProducts.map((product) => product.id));
        (pricesData ?? []).forEach((price) => {
          const variants = pricesMap.get(price.product_id) ?? [];
          variants.push({ price: Number(price.price), volume_ml: price.volume_ml ?? null });
          pricesMap.set(price.product_id, variants);
        });
      }

      const products = pageProducts.map((product) => {
        const prices = (pricesMap.get(product.id) ?? []).sort((left, right) => {
          const leftPreferred = left.volume_ml === 750 ? 1 : 0;
          const rightPreferred = right.volume_ml === 750 ? 1 : 0;
          return rightPreferred - leftPreferred || (right.volume_ml ?? 0) - (left.volume_ml ?? 0);
        });
        return { ...product, price: prices[0]?.price ?? null };
      });
      return { products, nextOffset: products.length === PRODUCT_PAGE_SIZE ? pageParam + PRODUCT_PAGE_SIZE : undefined };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    enabled: Boolean(brand?.id && selectedCity?.id),
    staleTime: 5 * 60 * 1000,
  });
  const products = productPages.data?.pages.flatMap((page) => page.products) ?? [];
  const loading = brandLoading || (Boolean(brand) && productPages.isLoading);
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = productPages;
  const loadNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) void fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  const loadMoreRef = useInfiniteScroll(loadNextPage, Boolean(hasNextPage) && !isFetchingNextPage);

  // Parse tasting notes
  const parseTastingNotes = (): TastingNote[] => {
    if (!brand?.tasting_notes || !Array.isArray(brand.tasting_notes)) return [];
    return (brand.tasting_notes as unknown[]).map(item => {
      if (typeof item === 'string') return { description: item };
      if (typeof item === 'object' && item !== null) {
        const obj = item as Record<string, unknown>;
        return {
          title: typeof obj.title === 'string' ? obj.title : undefined,
          description: typeof obj.description === 'string' ? obj.description : undefined,
          note: typeof obj.note === 'string' ? obj.note : undefined,
          name: typeof obj.name === 'string' ? obj.name : undefined,
        };
      }
      return {};
    }).filter(n => n.title || n.description || n.note || n.name);
  };

  // Parse how to enjoy
  const parseHowToEnjoy = (): HowToEnjoy[] => {
    if (!brand?.how_to_enjoy || !Array.isArray(brand.how_to_enjoy)) return [];
    return (brand.how_to_enjoy as unknown[]).map(item => {
      if (typeof item === 'string') return { description: item };
      if (typeof item === 'object' && item !== null) {
        const obj = item as Record<string, unknown>;
        return {
          title: typeof obj.title === 'string' ? obj.title : typeof obj.subheading === 'string' ? obj.subheading : undefined,
          subheading: typeof obj.subheading === 'string' ? obj.subheading : undefined,
          description: typeof obj.description === 'string' ? obj.description : undefined,
        };
      }
      return {};
    }).filter(h => h.title || h.subheading || h.description);
  };

  // Parse pairing ideas
  const parsePairingIdeas = (): PairingIdea[] => {
    if (!brand?.pairing_ideas || !Array.isArray(brand.pairing_ideas)) return [];
    return (brand.pairing_ideas as unknown[]).map(item => {
      if (typeof item === 'string') return { description: item };
      if (typeof item === 'object' && item !== null) {
        const obj = item as Record<string, unknown>;
        // Handle items as either array or comma-separated string
        let parsedItems: string[] | undefined;
        if (Array.isArray(obj.items)) {
          parsedItems = obj.items.filter(i => typeof i === 'string' && i.trim());
        } else if (typeof obj.items === 'string' && obj.items.trim()) {
          // If it's a string, split by comma if it has commas, otherwise treat as single item
          parsedItems = obj.items.includes(',') 
            ? obj.items.split(',').map(s => s.trim()).filter(Boolean)
            : [obj.items.trim()];
        }
        return {
          title: typeof obj.title === 'string' ? obj.title : undefined,
          items: parsedItems,
          description: typeof obj.description === 'string' ? obj.description : undefined,
        };
      }
      return {};
    }).filter(p => p.title || p.items || p.description);
  };

  // Parse FAQs
  const parseFAQs = (): FAQ[] => {
    if (!brand?.faqs || !Array.isArray(brand.faqs)) return [];
    return (brand.faqs as unknown[]).map(item => {
      if (typeof item === 'string') return { question: item };
      if (typeof item === 'object' && item !== null) {
        const obj = item as Record<string, unknown>;
        return {
          question: typeof obj.question === 'string' ? obj.question : undefined,
          answer: typeof obj.answer === 'string' ? obj.answer : undefined,
        };
      }
      return {};
    }).filter(f => f.question || f.answer);
  };

  const tastingNotes = parseTastingNotes();
  const howToEnjoy = parseHowToEnjoy();
  const pairingIdeas = parsePairingIdeas();
  const faqs = parseFAQs();

  // Generate structured data for SEO
  const generateStructuredData = () => {
    if (!brand) return null;

    const canonicalUrl = `https://bevory.in/${canonicalCitySlug}/brand/${brand.slug || slug}`;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Brand",
          "@id": `${canonicalUrl}#brand`,
          "name": brand.brand_name,
          "description": brand.description || `Explore ${brand.brand_name} products and known bottle sizes.`,
          "url": canonicalUrl,
          ...(brand.image_url && { "image": brand.image_url }),
          ...(brand.logo_url && { "logo": brand.logo_url }),
          ...(brand.country && { "foundingLocation": { "@type": "Country", "name": brand.country } }),
        },
        {
          "@type": "CollectionPage",
          "@id": `${canonicalUrl}#page`,
          "url": canonicalUrl,
          "name": brand.meta_title || `${brand.brand_name} products and prices`,
          "description": brand.meta_description || brand.description,
          "about": { "@id": `${canonicalUrl}#brand` },
          ...(brand.updated_at && { "dateModified": brand.updated_at }),
        },
        ...(faqs.length > 0 ? [{
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          "mainEntity": faqs.filter((faq) => faq.question && faq.answer).map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
          })),
        }] : []),
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bevory.in/" },
            { "@type": "ListItem", "position": 2, "name": selectedCity?.name || "Gurgaon", "item": `https://bevory.in/${canonicalCitySlug}` },
            { "@type": "ListItem", "position": 3, "name": brand.brand_name, "item": canonicalUrl },
          ],
        },
      ],
    };
  };

  if (loading || !routeCityReady) {
    return (
      <MobileLayout showSearch={false} showCheersGuide={false}>
        <div className="p-4 space-y-4">
          <Skeleton className="w-full h-56 rounded-2xl" />
          <Skeleton className="w-48 h-8" />
          <Skeleton className="w-full h-24" />
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
          </div>
        </div>
      </MobileLayout>
    );
  }

  if (!brand) {
    return (
      <MobileLayout showSearch={false} showCheersGuide={false}>
        <div className="p-4 text-center py-12">
          <p className="text-5xl mb-4">🏷️</p>
          <h1 className="text-xl font-serif font-bold mb-2">Brand Not Found</h1>
          <p className="text-muted-foreground mb-6">The brand you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </MobileLayout>
    );
  }

  return (
    <>
      <SEOHead
        title={brand.meta_title || `${brand.brand_name} Prices in ${selectedCity?.name || "Gurgaon"} | BevOry`}
        description={brand.meta_description || brand.description || `Explore ${brand.brand_name} products and bottle sizes in ${selectedCity?.name || "Gurgaon"}, with local prices shown where verified.`}
        keywords={`${brand.brand_name}, ${brand.country || ''} spirits, whisky, premium beverages, tasting notes, food pairing`}
        canonical={`/${canonicalCitySlug}/brand/${brand.slug || slug}`}
        ogImage={brand.image_url || brand.logo_url || undefined}
        jsonLd={generateStructuredData() || undefined}
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      
      <MobileLayout showSearch={false} showCheersGuide={false}>
        <article className="pb-8" itemScope itemType="https://schema.org/Brand">
          {/* Sticky Header */}
          <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="flex items-center gap-3 p-4">
              <Link to="/" className="p-2 -ml-2 hover:bg-secondary rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="font-serif font-bold text-lg truncate" itemProp="name">{brand.brand_name}</h1>
            </div>
          </header>

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 pt-4"
          >
            <div className="relative rounded-xl overflow-hidden bg-secondary/60 border border-border">
              {brand.image_url && (
                <OptimizedImage
                  src={brand.image_url}
                  alt={`${brand.brand_name} brand image`}
                  width={800}
                  height={208}
                  className="w-full h-52"
                  objectFit="cover"
                  priority
                />
              )}
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-background shadow-lg flex items-center justify-center text-4xl flex-shrink-0 overflow-hidden border border-border">
                    {brand.logo_url ? (
                      <OptimizedImage
                        src={brand.logo_url}
                        alt={`${brand.brand_name} logo`}
                        width={80}
                        height={80}
                        className="w-full h-full"
                        objectFit="contain"
                      />
                    ) : (
                      <span>{brand.logo_emoji || "🏷️"}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-serif font-bold leading-tight">{brand.brand_name}</h2>
                    {brand.country && (
                      <p className="text-sm text-accent font-medium mt-1" itemProp="foundingLocation">{brand.country}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      {products.length} {products.length === 1 ? 'product' : 'products'} listed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Description */}
          {brand.description && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="px-4 mt-5"
            >
              <div className="p-5 rounded-2xl bg-secondary/50 border border-border/50">
                <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  About {brand.brand_name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" itemProp="description">
                  {brand.description}
                </p>
              </div>
            </motion.section>
          )}

          {/* Story */}
          {brand.story && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="px-4 mt-4"
            >
              <div className="p-5 rounded-xl bg-secondary/50 border border-border">
                <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  The {brand.brand_name} Range
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {brand.story}
                </p>
              </div>
            </motion.section>
          )}

          {/* Tasting Notes */}
          {tastingNotes.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="px-4 mt-5"
            >
              <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2 px-1">
                <Wine className="w-5 h-5 text-accent" />
                Tasting Notes
              </h3>
              <div className="grid gap-3">
                {tastingNotes.map((note, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.03 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary/70 transition-colors"
                  >
                    {(note.title || note.name || note.note) && (
                      <h4 className="font-medium text-sm mb-1.5 text-foreground">
                        {note.title || note.name || note.note}
                      </h4>
                    )}
                    {note.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {note.description}
                      </p>
                    )}
                    {!note.description && !note.title && (note.note || note.name) && (
                      <Badge variant="secondary" className="mt-1">{note.note || note.name}</Badge>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* How to Enjoy */}
          {howToEnjoy.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="px-4 mt-5"
            >
              <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2 px-1">
                <Sparkles className="w-5 h-5 text-accent" />
                How to Enjoy
              </h3>
              <div className="space-y-3">
                {howToEnjoy.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.17 + i * 0.03 }}
                    className="p-4 rounded-xl bg-secondary/60 border border-border/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-accent">{i + 1}</span>
                      </div>
                      <div className="flex-1">
                        {(item.title || item.subheading) && (
                          <h4 className="font-semibold text-sm mb-1.5">
                            {item.title || item.subheading}
                          </h4>
                        )}
                        {item.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Pairing Ideas */}
          {pairingIdeas.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 mt-5"
            >
              <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2 px-1">
                <Utensils className="w-5 h-5 text-accent" />
                Perfect Pairings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pairingIdeas.map((pairing, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.22 + i * 0.03 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/30 transition-all"
                  >
                    {pairing.title && (
                      <h4 className="font-semibold text-sm mb-2 text-foreground flex items-center gap-2">
                        <span className="text-base">🍽️</span>
                        {pairing.title}
                      </h4>
                    )}
                    {pairing.items && pairing.items.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {pairing.items.slice(0, 6).map((item, j) => (
                          <Badge 
                            key={j} 
                            variant="outline" 
                            className="text-xs font-normal bg-background/50"
                          >
                            {item}
                          </Badge>
                        ))}
                        {pairing.items.length > 6 && (
                          <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                            +{pairing.items.length - 6} more
                          </Badge>
                        )}
                      </div>
                    )}
                    {pairing.description && !pairing.items && (
                      <p className="text-sm text-muted-foreground">{pairing.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Why Choose */}
          {brand.why_choose && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="px-4 mt-5"
            >
              <div className="p-5 rounded-xl bg-secondary/60 border border-accent/25">
                <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Why Choose {brand.brand_name}?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {brand.why_choose}
                </p>
              </div>
            </motion.section>
          )}

          {/* FAQs */}
          {faqs.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="px-4 mt-5"
            >
              <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2 px-1">
                <HelpCircle className="w-5 h-5 text-accent" />
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-border/50 rounded-xl px-4 bg-secondary/30 data-[state=open]:bg-secondary/50"
                  >
                    <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.section>
          )}

          {/* Final Verdict */}
          {brand.final_verdict && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-4 mt-5"
            >
              <div className="p-5 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/5 border border-green-500/25">
                <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-500" />
                  Final Verdict
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {brand.final_verdict}
                </p>
              </div>
            </motion.section>
          )}

          {/* External Link */}
          {brand.link_url && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="px-4 mt-5"
            >
              <a
                href={brand.link_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors border border-border/50"
              >
                <span className="font-medium text-sm">Visit Official Website</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            </motion.section>
          )}

          {/* Products Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8"
          >
            <div className="px-4 mb-4">
              <h3 className="font-serif font-semibold text-lg flex items-center gap-2">
                {products[0]?.category && (
                  <CategoryBottleVisual
                    slug={products[0].category.slug}
                    categoryName={products[0].category.name}
                    className="h-8 w-8 shrink-0 rounded-lg bg-secondary"
                  />
                )}
                Products by {brand.brand_name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Explore our collection of {brand.brand_name} products
              </p>
            </div>

            {products.length > 0 ? (
              <div className="px-4 space-y-2">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    ref={index === products.length - 5 ? loadMoreRef : undefined}
                  >
                    <Link to={generateProductUrlStatic(product, selectedCity?.name)}>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 transition-all group">
                        <ProductImage
                          src={product.image_url}
                          alt={`${product.brand} ${product.name} bottle`}
                          fallbackEmoji={product.image_emoji}
                          priority={index < 3}
                          className="h-16 w-16 flex-shrink-0 rounded-lg border border-border/50"
                          width={128}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-1 group-hover:text-accent transition-colors">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            {product.category && (
                              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                                {product.category.name}
                              </Badge>
                            )}
                            {product.volume && (
                              <span className="text-xs text-muted-foreground">{product.volume}</span>
                            )}
                            {product.abv && (
                              <span className="text-xs text-muted-foreground">{product.abv}%</span>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              {product.rating && (
                                <>
                                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                  <span className="text-xs font-medium">{product.rating}</span>
                                  {product.review_count && (
                                    <span className="text-xs text-muted-foreground">({product.review_count})</span>
                                  )}
                                </>
                              )}
                            </div>
                            {product.price && (
                              <span className="text-sm font-bold text-accent">
                                ₹{product.price.toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:text-accent transition-colors" />
                      </div>
                    </Link>
                  </div>
                ))}
                {productPages.isFetchingNextPage && (
                  <div className="space-y-2" aria-label="Loading more products">
                    <div className="h-24 animate-pulse rounded-xl bg-muted" />
                    <div className="h-24 animate-pulse rounded-xl bg-muted" />
                  </div>
                )}
              </div>
            ) : (
              <div className="px-4 py-12 text-center">
                <p className="text-4xl mb-3">📦</p>
                <p className="text-muted-foreground text-sm">
                  No products found for this brand yet
                </p>
              </div>
            )}
          </motion.section>
        </article>
      </MobileLayout>
    </>
  );
};

export default BrandDetail;
