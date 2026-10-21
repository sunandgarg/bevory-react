import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { BookOpen, CalendarDays, Clock3, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { apiClient } from "@/integrations/api/client";
import { DEMAND_GUIDES } from "@/lib/demandGuides";
import { guideImage } from "@/lib/guideImages";

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
      <SEOHead title="BevOry Guide | Drink News, Prices & Buying Advice" description="Read BevOry guides on bottle prices, whisky, wine, beer, dry days and beverage news across India." canonical="/guide" />
      <MobileLayout showSearch={false} showCheersGuide={false}>
        <div className="bg-background text-foreground">
          <header className="border-b border-border px-4 pb-7 pt-9 sm:px-6 md:pt-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase text-accent">The BevOry Journal</p>
              <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl">BevOry Guide</h1>
              <p className="mt-3 text-base leading-7 text-muted-foreground">Drinks news, city price guides and useful answers for choosing a bottle in India.</p>
            </div>
            <div className="relative mx-auto mt-7 max-w-2xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input aria-label="Search BevOry guides" placeholder="Search guides, prices and news" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="h-12 rounded-lg border-border bg-card pl-11 pr-11 text-base" />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md hover:bg-secondary">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </header>

          <nav className="border-b border-border px-4 sm:px-6" aria-label="Guide categories">
            <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto py-3 scrollbar-hide">
              {categories.map((category) => (
                <button key={category} type="button" onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category}
                  className={`h-10 shrink-0 rounded-lg border px-4 text-sm font-medium transition-colors ${selectedCategory === category ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card hover:border-accent/50 hover:bg-secondary"}`}>
                  {category === "All" ? "All Articles" : category}
                </button>
              ))}
            </div>
          </nav>

          <main className="mx-auto max-w-6xl px-4 pb-12 pt-7 sm:px-6">
            {isLoading ? (
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_250px]"><div className="h-72 animate-pulse rounded-lg bg-secondary" /><div className="h-72 animate-pulse rounded-lg bg-secondary" /></div>
            ) : lead ? (
              <>
                <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_250px]">
                  <section aria-labelledby="featured-guide-heading">
                    <h2 id="featured-guide-heading" className="mb-4 text-xl font-bold">Featured Story</h2>
                    <Link to={`/guide/${lead.slug}`} className="group block overflow-hidden rounded-lg border border-border bg-secondary">
                      <div className="flex min-h-72 items-center justify-center sm:min-h-96">
                        <img src={guideImage(lead.cover_image_url, lead.category)} alt={lead.cover_image_url ? lead.title : `${lead.category || "Drinks"} guide illustration`} width="800" height="450"
                          className={`h-72 w-full sm:h-96 ${lead.cover_image_url ? "object-cover" : "object-contain p-12"}`} fetchPriority="high" />
                      </div>
                      <div className="border-t border-border bg-card p-5 sm:p-6">
                        <div className="mb-2 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground"><span className="text-accent">{lead.category || "Guide"}</span>{postDate(lead) && <span>{postDate(lead)}</span>}</div>
                        <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-accent sm:text-3xl">{lead.title}</h3>
                        {lead.excerpt && <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{lead.excerpt}</p>}
                      </div>
                    </Link>
                  </section>
                  <aside className="hidden lg:block" aria-label="Recent guides">
                    <h2 className="mb-4 text-xl font-bold">Recent Guides</h2>
                    <div className="divide-y divide-border rounded-lg border border-border bg-card px-4">
                      {latestPosts.slice(0, 5).map((post) => (
                        <Link key={post.id} to={`/guide/${post.slug}`} className="block py-4 hover:text-accent">
                          <span className="text-xs font-medium text-accent">{post.category || "Guide"}</span><span className="mt-1 block text-sm font-semibold leading-5">{post.title}</span>
                          {postDate(post) && <span className="mt-1 block text-xs text-muted-foreground">{postDate(post)}</span>}
                        </Link>
                      ))}
                    </div>
                  </aside>
                </div>
                <section className="mt-9" aria-labelledby="latest-guides-heading">
                  <h2 id="latest-guides-heading" className="mb-4 border-b border-border pb-3 text-xl font-bold">Latest Articles</h2>
                  <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_250px]">
                    <div className="space-y-3">
                      {latestPosts.map((post) => (
                        <article key={post.id} className="overflow-hidden rounded-lg border border-border bg-card">
                          <Link to={`/guide/${post.slug}`} className="group flex min-h-32 items-center gap-4 p-3 sm:gap-5 sm:p-4">
                            <div className="flex h-24 w-28 shrink-0 items-center justify-center overflow-hidden rounded-md bg-secondary sm:h-28 sm:w-40">
                              <img src={guideImage(post.cover_image_url, post.category)} alt={post.cover_image_url ? post.title : `${post.category || "Drinks"} guide illustration`} width="320" height="224" loading="lazy" className={`h-full w-full ${post.cover_image_url ? "object-cover" : "object-contain p-3"}`} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground"><span className="font-semibold text-accent">{post.category || "Guide"}</span>{postDate(post) && <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{postDate(post)}</span>}</div>
                              <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-6 group-hover:text-accent sm:text-lg">{post.title}</h3>
                              {post.excerpt && <p className="mt-1 hidden line-clamp-2 text-sm leading-5 text-muted-foreground sm:block">{post.excerpt}</p>}
                              <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock3 className="h-3.5 w-3.5" />{readTime(post.content)} min read</span>
                            </div>
                          </Link>
                        </article>
                      ))}
                    </div>
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
