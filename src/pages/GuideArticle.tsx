import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, ChevronRight, Clock, Share2, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import MobileLayout from "@/components/layout/MobileLayout";
import { apiClient } from "@/integrations/api/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import SEOHead from "@/components/SEOHead";
import { demandGuideBySlug } from "@/lib/demandGuides";
import { cityRecordIdFromSlug } from "@/lib/locations";
import { generateProductUrl } from "@/lib/productSlug";
import { PRODUCT_BATCH_SIZE } from "@/lib/catalogPagination";
import { guideImage } from "@/lib/guideImages";
import GuideAd from "@/components/GuideAd";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  cover_emoji: string | null;
  author: string | null;
  category: string | null;
  tags: string[] | null;
  published_at: string | null;
  updated_at?: string | null;
  is_featured: boolean | null;
  meta_title: string | null;
  meta_description: string | null;
  citySlug?: string;
  categorySlug?: string;
}

interface ArticleSection {
  id: string;
  title: string;
}

const decodeEntities = (value: string) =>
  value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"');

const stripHtml = (value: string) =>
  decodeEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

const headingId = (title: string, index: number) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug ? `${slug}-${index + 1}` : `section-${index + 1}`;
};

const extractSections = (content: string | null): ArticleSection[] => {
  if (!content) return [];
  return Array.from(content.matchAll(/<h([12])(?:\s[^>]*)?>([\s\S]*?)<\/h\1>/gi))
    .map((match, index) => {
      const title = stripHtml(match[2]);
      return title ? { id: headingId(title, index), title } : null;
    })
    .filter(Boolean) as ArticleSection[];
};

const buildArticleHtml = (content: string | null) => {
  if (!content) return "";
  let headingIndex = 0;
  const htmlWithAnchors = content.replace(/<\/?h1\b/gi, (tag) => tag.replace(/h1/i, "h2")).replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, inner) => {
    const title = stripHtml(inner);
    if (!title) return match;
    const id = headingId(title, headingIndex);
    headingIndex += 1;
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });

  return DOMPurify.sanitize(htmlWithAnchors, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "a",
      "ul",
      "ol",
      "li",
      "strong",
      "em",
      "b",
      "i",
      "u",
      "blockquote",
      "img",
      "code",
      "pre",
      "br",
      "hr",
      "div",
      "span",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "target", "rel", "style", "loading", "id"],
  });
};

const GuideArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const demandGuide = demandGuideBySlug(slug);

  const { data: databasePost, isLoading } = useQuery({
    queryKey: ["guide-article", slug],
    queryFn: async () => {
      const { data, error } = await apiClient
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });

  const post = databasePost || demandGuide || null;

  const { data: guideProducts = [] } = useQuery({
    queryKey: ["demand-guide-products", demandGuide?.citySlug, demandGuide?.categorySlug],
    queryFn: async () => {
      const { data, error } = await apiClient.catalog.getCity(
        cityRecordIdFromSlug(demandGuide!.citySlug!),
        "category",
        demandGuide!.categorySlug!,
        { offset: 0, limit: PRODUCT_BATCH_SIZE },
      );
      if (error) throw error;
      return ((data?.products ?? []) as Array<Record<string, any>>)
        .sort((left, right) => Number(left.price || Number.MAX_SAFE_INTEGER) - Number(right.price || Number.MAX_SAFE_INTEGER))
        .slice(0, PRODUCT_BATCH_SIZE);
    },
    enabled: Boolean(demandGuide?.citySlug && demandGuide?.categorySlug),
    staleTime: 5 * 60 * 1000,
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ["related-posts", slug],
    queryFn: async () => {
      const { data, error } = await apiClient
        .from("blog_posts")
        .select("id, title, slug, cover_image_url, cover_emoji, category, excerpt, published_at")
        .eq("is_published", true)
        .neq("id", post?.id || "")
        .order("published_at", { ascending: false })
        .limit(5);

      if (error) throw error;
      return data as Array<Pick<BlogPost, "id" | "title" | "slug" | "cover_image_url" | "cover_emoji" | "category" | "excerpt" | "published_at">>;
    },
    enabled: Boolean(post),
  });

  const readTime = post?.content
    ? Math.max(1, Math.ceil(stripHtml(post.content).split(/\s+/).length / 200))
    : 3;

  const articleSections = useMemo(() => extractSections(post?.content ?? null), [post?.content]);
  const articleHtml = useMemo(() => buildArticleHtml(post?.content ?? null), [post?.content]);

  const handleShare = async () => {
    if (!post) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || "",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
      return;
    }
    await navigator.clipboard?.writeText(window.location.href);
  };

  if (isLoading) {
    return (
      <MobileLayout showSearch={false} showCheersGuide={false} showBottomNav={false}>
        <div className="mx-auto max-w-3xl px-4 py-8 space-y-5">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </MobileLayout>
    );
  }

  if (!post) {
    return (
      <MobileLayout showSearch={false} showCheersGuide={false} showBottomNav={false}>
        <div className="mx-auto max-w-md px-4 py-16 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-xl font-semibold mb-2">Article not found</h1>
          <p className="text-muted-foreground mb-5">The article you are looking for does not exist.</p>
          <Link to="/guide">
            <Button>Back to Guide</Button>
          </Link>
        </div>
      </MobileLayout>
    );
  }

  const isValidImageUrl = post.cover_image_url && (
    post.cover_image_url.startsWith("http://") ||
    post.cover_image_url.startsWith("https://") ||
    post.cover_image_url.startsWith("/")
  );

  const coverImage = guideImage(isValidImageUrl ? post.cover_image_url : null, post.category);
  const articleImage = coverImage.startsWith("/") ? `https://bevory.in${coverImage}` : coverImage;

  const displayDate = post.published_at ? format(new Date(post.published_at), "MMMM d, yyyy") : null;
  const heroLabel = post.category || "Guide";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.meta_description || `Read ${post.title} on BevOry Guide.`,
    "image": [articleImage],
    "author": {
      "@type": "Organization",
      "name": post.author || "BevOry Editorial",
      "url": "https://bevory.in/guide",
    },
    "publisher": {
      "@type": "Organization",
      "name": "BevOry",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bevory.in/favicon.png",
      },
    },
    ...(post.published_at ? { "datePublished": post.published_at } : {}),
    ...(post.updated_at || post.published_at ? { "dateModified": post.updated_at || post.published_at } : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bevory.in/guide/${post.slug}`,
    },
    "articleSection": post.category || "Guide",
    "keywords": post.tags?.join(", ") || post.category || "bevory, guide, drinks",
  };

  return (
    <>
      <SEOHead
        title={post.meta_title || `${post.title} | BevOry Guide`}
        description={post.meta_description || post.excerpt || ""}
        keywords={post.tags?.join(", ") || post.category || ""}
        ogImage={articleImage}
        ogType="article"
        author={post.author || "BevOry Editorial"}
        publishedTime={post.published_at || undefined}
        modifiedTime={post.updated_at || post.published_at || undefined}
        section={post.category || undefined}
        tags={post.tags || undefined}
        jsonLd={structuredData}
        canonical={`/guide/${post.slug}`}
      />

      <MobileLayout showSearch={false} showCheersGuide={false} showBottomNav={false}>
        <article className="bg-background pb-10">
          <header className="border-b border-border/70 bg-background">
            <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-9">
              <nav className="mb-5 flex items-center gap-2 overflow-hidden text-xs font-medium text-muted-foreground" aria-label="Breadcrumb">
                <Link to="/guide" className="inline-flex items-center gap-1 hover:text-foreground">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Guide
                </Link>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate text-foreground">{post.title}</span>
              </nav>

              <div className="max-w-[800px]">
                <Badge className="mb-4 rounded-md bg-accent/10 text-accent hover:bg-accent/10">{heroLabel}</Badge>
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-border pb-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium text-foreground">{post.author || "BevOry Editorial"}</span>
                    </span>
                    {displayDate && (
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {displayDate}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {readTime} min read
                    </span>
                </div>
                <h1 className="text-[2rem] font-extrabold leading-[1.16] text-foreground md:text-[2.375rem]">{post.title}</h1>
                {post.excerpt && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{post.excerpt}</p>}
              </div>
            </div>
          </header>

          <main className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:px-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <figure className="mb-8 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg bg-secondary">
                <img src={coverImage} alt={post.cover_image_url ? post.title : `${heroLabel} guide illustration`} width="960" height="540"
                  className={`h-full w-full ${post.cover_image_url ? "object-cover" : "object-contain p-3"}`} fetchPriority="high" />
              </figure>
              <div
                className="prose max-w-[800px] text-foreground
                  prose-headings:font-sans prose-headings:tracking-normal prose-headings:text-foreground prose-headings:scroll-mt-36
                  prose-h2:mt-10 prose-h2:border-l-4 prose-h2:border-accent prose-h2:pl-4 prose-h2:text-2xl prose-h2:font-extrabold prose-h2:leading-tight md:prose-h2:text-[1.75rem]
                  prose-h3:mt-7 prose-h3:text-xl prose-h3:font-bold
                  prose-p:my-5 prose-p:text-base prose-p:leading-[1.75] prose-p:text-foreground/85 md:prose-p:text-[17px]
                  prose-a:font-medium prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-strong:font-semibold prose-strong:text-foreground
                  prose-ul:my-5 prose-ul:pl-5 prose-ol:my-5 prose-ol:pl-5
                  prose-li:my-2 prose-li:pl-1 prose-li:text-base prose-li:leading-[1.75] prose-li:text-foreground/85 prose-li:marker:text-accent
                  prose-blockquote:my-7 prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-secondary/35 prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:not-italic prose-blockquote:text-foreground
                  prose-hr:my-8 prose-hr:border-border
                  prose-img:my-7 prose-img:rounded-lg prose-img:border prose-img:border-border
                  prose-code:rounded prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
                  prose-table:my-7 prose-table:text-sm prose-th:border prose-th:border-border prose-th:bg-secondary prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2"
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              />

              {!demandGuide && <GuideAd />}

              {guideProducts.length > 0 && demandGuide?.citySlug && (
                <section className="mt-10 border-t border-border pt-7" aria-labelledby="live-price-list">
                  <h2 id="live-price-list" className="text-2xl font-extrabold leading-tight">
                    Current Listed Products
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Prices are indicative. Open a product to compare locally listed bottle sizes.
                  </p>
                  <div className="mt-5 divide-y divide-border rounded-lg border border-border bg-card">
                    {guideProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={generateProductUrl({ citySlug: demandGuide.citySlug, productSlug: product.slug || product.id })}
                        className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors"
                      >
                        <span className="min-w-0">
                          <span className="block text-xs text-muted-foreground truncate">{product.brand}</span>
                          <span className="block text-sm font-medium truncate">{product.name}</span>
                        </span>
                        <span className="text-sm font-semibold text-accent whitespace-nowrap">
                          {product.price ? `₹${Number(product.price).toLocaleString("en-IN")}` : "Price unavailable"}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-36 space-y-5">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm font-semibold">Share this article</p>
                  <Button variant="outline" size="sm" onClick={handleShare} className="mt-3 w-full gap-2 rounded-lg">
                    <Share2 className="h-4 w-4" /> Share link
                  </Button>
                </div>
                {relatedPosts.length > 0 && (
                  <nav className="rounded-lg border border-border bg-card p-4" aria-label="Latest articles">
                    <p className="text-sm font-semibold">Latest Articles</p>
                    <div className="mt-3 divide-y divide-border">
                      {relatedPosts.map((related) => (
                        <Link key={related.id} to={`/guide/${related.slug}`} className="block py-3 text-sm font-medium leading-5 hover:text-accent">
                          {related.title}
                          <span className="mt-1 block text-xs font-normal text-muted-foreground">{related.category || "Guide"}{related.published_at ? ` · ${format(new Date(related.published_at), "d MMM")}` : ""}</span>
                        </Link>
                      ))}
                    </div>
                  </nav>
                )}
                {articleSections.length > 0 && (
                  <nav className="rounded-lg border border-border bg-card p-4" aria-label="Article sections">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">In This Article</p>
                    <div className="mt-3 space-y-2">
                      {articleSections.slice(0, 9).map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="block rounded-md px-2 py-1.5 text-sm leading-5 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {section.title}
                        </a>
                      ))}
                    </div>
                  </nav>
                )}

                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Explore</p>
                  <h2 className="mt-2 text-base font-semibold">More beverage guides</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Search city prices, dry days, shop timing guides and bottle explainers on BevOry.
                  </p>
                  <Link to="/guide">
                    <Button variant="outline" size="sm" className="mt-4 w-full rounded-lg">
                      Browse Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </main>

          {relatedPosts.length > 0 && (
            <section className="mx-auto max-w-5xl border-t border-border px-4 py-8 md:px-8" aria-labelledby="related-guides">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Next Reads</p>
                  <h2 id="related-guides" className="mt-1 font-serif text-2xl font-bold">Related Guides</h2>
                </div>
                <Link to="/guide" className="hidden text-sm font-medium text-accent hover:underline sm:inline">
                  View all
                </Link>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/guide/${related.slug}`}
                    className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <Badge variant="outline" className="rounded-full">{related.category || "Guide"}</Badge>
                      {related.published_at && (
                        <span className="text-xs text-muted-foreground">{format(new Date(related.published_at), "d MMM")}</span>
                      )}
                    </div>
                    <h3 className="line-clamp-3 text-sm font-semibold leading-6 group-hover:text-accent">{related.title}</h3>
                    {related.excerpt && (
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">{related.excerpt}</p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <footer className="mx-auto max-w-5xl px-4 pb-8 md:px-8">
            <div className="rounded-lg border border-border bg-secondary/35 p-5 md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">BevOry</p>
                <h2 className="mt-1 text-lg font-semibold">Discover better bottle choices</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Compare city-level prices, product details, dry-day guides and practical alcohol information across India.
                </p>
              </div>
              <Link to="/guide" className="mt-4 inline-flex md:mt-0">
                <Button className="rounded-lg">Discover More Guides</Button>
              </Link>
            </div>
          </footer>
        </article>
      </MobileLayout>
    </>
  );
};

export default GuideArticle;
