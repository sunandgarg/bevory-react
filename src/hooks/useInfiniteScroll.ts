import { useCallback, useEffect, useRef } from "react";

export const useInfiniteScroll = (onLoadMore: () => void, enabled: boolean) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect();
    if (!node || !enabled) return;
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onLoadMore();
    }, { rootMargin: "600px 0px", threshold: 0.01 });
    observerRef.current.observe(node);
  }, [enabled, onLoadMore]);

  useEffect(() => () => observerRef.current?.disconnect(), []);
  return loadMoreRef;
};
