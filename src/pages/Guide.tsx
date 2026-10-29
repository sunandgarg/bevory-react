import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArrowUpRight, BookOpen, CalendarDays, Clock3, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { apiClient } from "@/integrations/api/client";
import { DEMAND_GUIDES } from "@/lib/demandGuides";
import { guideImage } from "@/lib/guideImages";
import GuideAd from "@/components/GuideAd";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  author: string | null;
  category: string | null;
  tags: string[] | null;
  published_at: string | null;
  is_featured: boolean | null;
}

const categories = ["All", "Whiskey", "Rum", "Vodka", "Gin", "Wine", "Beer", "Cocktails", "Guides", "News"];
const readTime = (content: string | null) => Math.max(1, Math.ceil((content || "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).length / 200));
const postDate = (post: BlogPost) => post.published_at ? format(new Date(post.published_at), "d MMM yyyy") : null;

const Guide = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: databasePosts = [], isLoading } = useQuery({
    queryKey: ["guide-posts"],
    queryFn: async () => {
      const { data, error } = await apiClient.from("blog_posts").select("*").eq("is_published", true).order("published_at", { ascending: false });
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  const posts = useMemo(() => {
    const databaseSlugs = new Set(databasePosts.map((post) => post.slug));
    return [...databasePosts, ...DEMAND_GUIDES.filter((guide) => !databaseSlugs.has(guide.slug))]
      .sort((a, b) => (b.published_at || "").localeCompare(a.published_at || "")) as BlogPost[];
  }, [databasePosts]);

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.trim().toLowerCase();
    return (selectedCategory === "All" || post.category === selectedCategory)
      && (!query || [post.title, post.excerpt, ...(post.tags || [])].some((value) => value?.toLowerCase().includes(query)));
  });
  const lead = filteredPosts.find((post) => post.is_featured) || filteredPosts[0];
  const latestPosts = filteredPosts.filter((post) => post.slug !== lead?.slug);

  return (
    <>
      <SEOHead title="BevOry Guide | Drink News, Prices & Buying Advice" description="Read BevOry guides on city prices, MRP checks, whisky, beer, gin and beverage news across India." canonical="/guide" />
      <MobileLayout showSearch={false} showCheersGuide={false}>
        <div className="bg-background text-foreground">
          <header className="border-b border-border px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-5xl">
              <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">BevOry Guide</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">Drinks news, city prices and practical bottle advice for India.</p>
              <div className="relative mt-5 max-w-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input aria-label="Search BevOry guides" placeholder="Search guides and news" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="h-11 rounded-md border-border bg-card pl-10 pr-10 text-sm" />
                {searchQuery && (
                  <button type="button" onClick={() => setSearchQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md hover:bg-secondary">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </header>

          <nav className="border-b border-border px-4 sm:px-6" aria-label="Guide categories">
            <div className="mx-auto flex max-w-5xl gap-5 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button key={category} type="button" onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category}
                  className={`h-11 shrink-0 border-b-2 text-sm font-medium transition-colors ${selectedCategory === category ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {category === "All" ? "All" : category}
                </button>
              ))}
            </div>
          </nav>

          <main className="mx-auto max-w-5xl px-4 pb-12 pt-6 sm:px-6 sm:pt-8">
            {isLoading ? (
              <div className="space-y-6"><div className="h-48 animate-pulse rounded-md bg-secondary" /><div className="h-28 animate-pulse rounded-md bg-secondary" /></div>
            ) : lead ? (
              <>
                <section className="border-b border-border pb-7" aria-labelledby="featured-guide-heading">
                  <h2 id="featured-guide-heading" className="mb-4 text-xs font-semibold uppercase text-muted-foreground">Featured</h2>
                  <Link to={`/guide/${lead.slug}`} className="group grid gap-5 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)] sm:items-center md:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
                    <div className="aspect-[16/9] overflow-hidden rounded-md bg-secondary sm:aspect-[4/3]">
                      <img src={guideImage(lead.cover_image_url, lead.category)} alt={lead.cover_image_url ? lead.title : `${lead.category || "Drinks"} guide illustration`} width="600" height="450"
                        className={`h-full w-full ${lead.cover_image_url ? "object-cover" : "object-contain p-3"}`} fetchPriority="high" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground"><span className="text-accent">{lead.category || "Guide"}</span>{postDate(lead) && <><span aria-hidden="true">/</span><span>{postDate(lead)}</span></>}</div>
                      <h3 className="mt-2 font-serif text-2xl font-bold leading-tight group-hover:text-accent sm:text-3xl">{lead.title}</h3>
                      {lead.excerpt && <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{lead.excerpt}</p>}
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Read guide <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
                    </div>
                  </Link>
                </section>
                {latestPosts.length >= 5 && <GuideAd placement="middle" />}
                <section className="pt-7" aria-labelledby="latest-guides-heading">
                  <h2 id="latest-guides-heading" className="text-xl font-semibold">Latest articles</h2>
                  <div className="mt-3 divide-y divide-border">
                    {latestPosts.map((post) => (
                      <article key={post.id}>
                        <Link to={`/guide/${post.slug}`} className="group grid grid-cols-[minmax(0,1fr)_96px] items-center gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_152px] sm:gap-6">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground"><span className="font-semibold text-accent">{post.category || "Guide"}</span>{postDate(post) && <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />{postDate(post)}</span>}</div>
                            <h3 className="mt-1.5 text-base font-semibold leading-snug group-hover:text-accent sm:text-lg">{post.title}</h3>
                            {post.excerpt && <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">{post.excerpt}</p>}
                            <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{readTime(post.content)} min read</span>
                          </div>
                          <div className="aspect-[4/3] overflow-hidden rounded-md bg-secondary">
                            <img src={guideImage(post.cover_image_url, post.category)} alt={post.cover_image_url ? post.title : `${post.category || "Drinks"} guide illustration`} width="304" height="228" loading="lazy" className={`h-full w-full ${post.cover_image_url ? "object-cover" : "object-contain p-2"}`} />
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <div className="py-20 text-center"><BookOpen className="mx-auto h-9 w-9 text-muted-foreground" aria-hidden="true" /><h2 className="mt-3 text-lg font-semibold">No articles found</h2><p className="mt-1 text-sm text-muted-foreground">Try another search or category.</p></div>
            )}
          </main>
        </div>
      </MobileLayout>
    </>
  );
};

export default Guide;
