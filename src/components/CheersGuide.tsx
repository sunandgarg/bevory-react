import { useState, useCallback, memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "@/integrations/api/client";
import { Skeleton } from "@/components/ui/skeleton";
import { X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { isValidExternalUrl, openExternalUrl } from "@/lib/urlValidation";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface StoryMedia {
  type: "image" | "video";
  url: string;
  duration?: number;
}

interface CheersGuideItem {
  id: string;
  title: string;
  subtitle: string | null;
  image_url: string | null;
  emoji: string | null;
  link_url: string | null;
  link_type: string | null;
  order_index: number;
  is_active: boolean;
  stories: StoryMedia[] | null;
}

interface CheersGuideProps {
  className?: string;
}

const DEFAULT_GUIDES: CheersGuideItem[] = [
  ["goa-after-dark", "Goa After Dark", "Beach shacks, bass and a safe ride home", "/guides/goa-after-dark.jpg"],
  ["tropical-splash", "Tropical Splash", "Poolside energy, water breaks included", "/guides/tropical-pool-party.jpg"],
  ["rooftop-after-hours", "Rooftop After Hours", "City lights and a sharp house-party plan", "/guides/rooftop-after-hours.jpg"],
  ["dancefloor-survival", "Dancefloor Survival", "Pace the night without losing the mood", "/guides/dancefloor-survival.jpg"],
  ["sunrise-reset", "Sunrise Reset", "Food, hydration and the morning after", "/guides/sunrise-reset.jpg"],
].map(([id, title, subtitle, image_url], index) => ({
  id,
  title,
  subtitle,
  image_url,
  emoji: null,
  link_url: "/guide",
  link_type: "internal",
  order_index: (index + 1) * 10,
  is_active: true,
  stories: [{ type: "image", url: image_url, duration: 6 }],
}));

const COCKTAIL_SHORTS: CheersGuideItem[] = [
  ["jack-cocktail-one", "Jack Daniel’s", "A bold whiskey cocktail", "/stories/jack-cocktail-amber.svg", "https://www.youtube.com/shorts/r5C8UIkmlRk"],
  ["jim-beam-cocktail", "Jim Beam", "A bright bourbon serve", "/stories/jim-beam-cocktail.svg", "https://www.youtube.com/shorts/r0qQBJ7YtT4"],
  ["jamun-shot", "Jamun Shot", "A desi fruit-forward shot", "/stories/jamun-shot.svg", "https://www.youtube.com/shorts/OVOWDZJXGfA"],
  ["jagermeister-cocktail", "Jagermeister", "Herbal cocktail inspiration", "/stories/jagermeister-cocktail.svg", "https://www.youtube.com/shorts/wZ6QYERR6KU"],
  ["white-rum-cocktail", "White Rum", "A crisp tropical mix", "/stories/white-rum.svg", "https://www.youtube.com/shorts/SmDeTwflcwQ"],
  ["rainbow-cocktail", "Rainbow", "A colourful layered cocktail", "/stories/rainbow-cocktail.svg", "https://www.youtube.com/shorts/jn_nbJyxMq0"],
  ["tequila-sunrise", "Tequila Sunrise", "Citrus and sunrise colours", "/stories/tequila-sunrise.svg", "https://www.youtube.com/shorts/L-LOoAuJcwA"],
  ["vodka-cranberry", "Vodka Cranberry", "A tart ruby highball", "/stories/vodka-cranberry.svg", "https://www.youtube.com/shorts/E32B8omMvXI"],
  ["jack-cocktail-two", "Jack Daniel’s II", "A second whiskey serve", "/stories/jack-cocktail-night.svg", "https://www.youtube.com/shorts/59Ve64hy4y8"],
].map(([id, title, subtitle, image_url, video_url], index) => ({
  id,
  title,
  subtitle,
  image_url,
  emoji: null,
  link_url: null,
  link_type: "youtube-short",
  order_index: index + 1,
  is_active: true,
  stories: [{ type: "video", url: video_url, duration: 0 }],
}));
const COCKTAIL_SHORT_IDS = new Set(COCKTAIL_SHORTS.map((guide) => guide.id));

const fetchGuides = async (): Promise<CheersGuideItem[]> => {
  const { data, error } = await apiClient
    .from("cheers_guides")
    .select("*")
    .eq("is_active", true)
    .order("order_index");
  if (error) throw error;
  return (data || []).map((g) => ({
    ...g,
    stories: Array.isArray(g.stories) ? (g.stories as unknown as StoryMedia[]) : null,
  }));
};

const CheersGuide = memo(({ className = "" }: CheersGuideProps) => {
  const [selectedGuideIndex, setSelectedGuideIndex] = useState<number | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: remoteGuides = [], isLoading } = useQuery({
    queryKey: ["cheers-guides"],
    queryFn: fetchGuides,
    staleTime: 10 * 60 * 1000,
  });
  const guides = useMemo(() => {
    const supplementalGuides = (remoteGuides.length > 0 ? remoteGuides : DEFAULT_GUIDES)
      .filter((guide) => !COCKTAIL_SHORT_IDS.has(guide.id));
    return [...COCKTAIL_SHORTS, ...supplementalGuides];
  }, [remoteGuides]);

  const selectedGuide = selectedGuideIndex !== null ? guides[selectedGuideIndex] : null;
  const stories = selectedGuide?.stories || [];
  const currentStory = stories[currentStoryIndex];
  const storyDuration = (currentStory?.duration || 5) * 1000;

  // Progress timer
  useEffect(() => {
    if (selectedGuideIndex === null || stories.length === 0 || isPaused || currentStory?.type === "video") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex((i) => i + 1);
            return 0;
          } else if (selectedGuideIndex < guides.length - 1) {
            setSelectedGuideIndex((i) => (i !== null ? i + 1 : null));
            setCurrentStoryIndex(0);
            return 0;
          } else {
            setSelectedGuideIndex(null);
            setCurrentStoryIndex(0);
            return 0;
          }
        }
        return prev + 100 / (storyDuration / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [selectedGuideIndex, currentStoryIndex, stories.length, storyDuration, isPaused, guides.length, currentStory?.type]);

  const handleClick = useCallback((index: number) => {
    const guide = guides[index];
    
    if (guide.stories && guide.stories.length > 0) {
      setSelectedGuideIndex(index);
      setCurrentStoryIndex(0);
      setProgress(0);
      setIsPaused(false);
      return;
    }

    if (guide.link_url) {
      if (guide.link_type === "external") {
        if (!isValidExternalUrl(guide.link_url)) {
          toast({
            title: "Invalid Link",
            description: "This external link is not from a trusted source",
            variant: "destructive",
          });
          return;
        }
        openExternalUrl(guide.link_url);
      } else if (guide.link_type === "section") {
        const element = document.getElementById(guide.link_url.replace("#", ""));
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(guide.link_url);
      }
    }
  }, [guides, navigate, toast]);

  const closeStoryViewer = useCallback(() => {
    setSelectedGuideIndex(null);
    setCurrentStoryIndex(0);
    setProgress(0);
  }, []);

  const goToPrevStory = useCallback(() => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((i) => i - 1);
      setProgress(0);
    } else if (selectedGuideIndex !== null && selectedGuideIndex > 0) {
      setSelectedGuideIndex((i) => (i !== null ? i - 1 : null));
      const prevGuide = guides[selectedGuideIndex - 1];
      setCurrentStoryIndex((prevGuide.stories?.length || 1) - 1);
      setProgress(0);
    }
  }, [currentStoryIndex, selectedGuideIndex, guides]);

  const goToNextStory = useCallback(() => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((i) => i + 1);
      setProgress(0);
    } else if (selectedGuideIndex !== null && selectedGuideIndex < guides.length - 1) {
      setSelectedGuideIndex((i) => (i !== null ? i + 1 : null));
      setCurrentStoryIndex(0);
      setProgress(0);
    } else {
      closeStoryViewer();
    }
  }, [currentStoryIndex, stories.length, selectedGuideIndex, guides.length, closeStoryViewer]);

  useEffect(() => {
    if (selectedGuideIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeStoryViewer();
      if (event.key === "ArrowLeft") goToPrevStory();
      if (event.key === "ArrowRight") goToNextStory();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedGuideIndex, closeStoryViewer, goToNextStory, goToPrevStory]);

  if (isLoading) {
    return (
      <div className={className}>
        <div className="flex gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col items-center flex-shrink-0">
              <Skeleton className="w-16 h-16 rounded-full" />
              <Skeleton className="w-12 h-3 mt-2 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={className}>
        <div className="flex gap-3.5 overflow-x-auto px-4 pb-1 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {guides.map((guide, index) => (
            <button
              key={guide.id}
              onClick={() => handleClick(index)}
              type="button"
              className="group flex w-[74px] flex-shrink-0 snap-start flex-col items-center"
              aria-label={`Watch ${guide.title} short`}
            >
              <div className="relative rounded-full bg-gradient-to-tr from-amber-300 via-orange-500 to-fuchsia-600 p-[3px] shadow-[0_6px_20px_rgba(249,115,22,0.22)] transition-transform duration-200 group-hover:-translate-y-0.5">
                <div className="h-[68px] w-[68px] rounded-full bg-background p-[2px]">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-secondary transition-transform duration-200 group-hover:scale-[1.03]">
                      {guide.image_url ? (
                        <img
                          src={guide.image_url}
                          alt={guide.title}
                          width={128}
                          height={128}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="text-xl">{guide.emoji || "🥂"}</span>
                      )}
                  </div>
                </div>
                {guide.stories?.[0]?.type === "video" && (
                  <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-foreground text-[8px] font-bold text-background" aria-hidden="true">▶</span>
                )}
                {guide.stories && guide.stories.length > 1 && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                    {guide.stories.length}
                  </div>
                )}
              </div>
              <p className="mt-1.5 w-[74px] truncate text-center text-[10px] font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                {guide.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Story Viewer Modal */}
      {selectedGuideIndex !== null && selectedGuide && stories.length > 0 && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md animate-fade-in" onClick={(event) => event.target === event.currentTarget && closeStoryViewer()} role="dialog" aria-modal="true" aria-label={`${selectedGuide.title} story`}>
            <div className="relative aspect-[9/16] h-[min(86vh,760px)] max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
            {/* Progress bars */}
            {stories.length > 1 && <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
              {stories.map((_, idx) => (
                <div key={idx} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-100"
                    style={{
                      width:
                        idx < currentStoryIndex
                          ? "100%"
                          : idx === currentStoryIndex
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>}

            {/* Header */}
            <div className="absolute left-4 right-4 top-5 z-20 flex items-center justify-between rounded-2xl bg-black/35 px-3 py-2 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden">
                  {selectedGuide.image_url ? (
                    <img src={selectedGuide.image_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm flex items-center justify-center h-full">{selectedGuide.emoji}</span>
                  )}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{selectedGuide.title}</p>
                  {selectedGuide.subtitle && (
                    <p className="text-white/60 text-xs">{selectedGuide.subtitle}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {currentStory?.type !== "video" && (
                  <button
                    type="button"
                    aria-label={isPaused ? "Resume story" : "Pause story"}
                    onClick={(e) => { e.stopPropagation(); setIsPaused(!isPaused); }}
                    className="p-2 text-white/80 hover:text-white"
                  >
                    {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                  </button>
                )}
                <button
                  type="button"
                  aria-label="Close story"
                  onClick={(e) => { e.stopPropagation(); closeStoryViewer(); }}
                  className="p-2 text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Story Content */}
            <div className="flex h-full w-full items-center justify-center">
              {currentStory?.type === "video" ? (
                (() => {
                  const url = currentStory.url;
                  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&\n?#]+)/);
                  if (ytMatch) {
                    const videoId = ytMatch[1];
                    return (
                      <iframe
                        key={currentStory.url}
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&loop=1&playlist=${videoId}&playsinline=1`}
                        title={`${selectedGuide.title} YouTube Short`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  }
                  return (
                    <video
                      key={currentStory.url}
                      src={url}
                      autoPlay
                      muted
                      playsInline
                      className="max-w-full max-h-full object-contain"
                      onEnded={goToNextStory}
                    />
                  );
                })()
              ) : (
                <img
                  key={currentStory?.url}
                  src={currentStory?.url}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevStory(); }}
              aria-label="Previous story"
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white/70 backdrop-blur-sm hover:text-white"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNextStory(); }}
              aria-label="Next story"
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white/70 backdrop-blur-sm hover:text-white"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Link button */}
            {selectedGuide.link_url && selectedGuide.link_type !== "youtube-short" && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (selectedGuide.link_type === "external") {
                    if (!isValidExternalUrl(selectedGuide.link_url!)) {
                      toast({ title: "Invalid Link", description: "This external link is not from a trusted source", variant: "destructive" });
                      return;
                    }
                    openExternalUrl(selectedGuide.link_url!);
                  } else {
                    closeStoryViewer();
                    navigate(selectedGuide.link_url!);
                  }
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-colors"
              >
                View More
              </button>
            )}
            </div>
          </div>
      )}
    </>
  );
});

CheersGuide.displayName = "CheersGuide";
export default CheersGuide;
