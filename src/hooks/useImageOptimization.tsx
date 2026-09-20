import { useState, useEffect, useCallback } from "react";
import { apiClient } from "@/integrations/api/client";
import type { Json } from "@/types/json";

export interface ImageOptimizationSettings {
  enabled: boolean;
  quality: number; // 1-100
  maxWidth: number;
  maxHeight: number;
  format: string; // Legacy UI preference; canonical CDN assets are served unchanged.
}

const DEFAULT_SETTINGS: ImageOptimizationSettings = {
  enabled: true,
  quality: 95,
  maxWidth: 3840,
  maxHeight: 3840,
  format: 'auto'
};

// Images are preprocessed into PNG or JPEG and served from Bevory's own CDN.
const getOptimizedImageUrl = (
  src: string, 
  settings: ImageOptimizationSettings,
  width?: number,
  height?: number
): string => {
  if (!settings.enabled || !src) return src;
  
  // Skip if already a data URL or blob
  if (src.startsWith('data:') || src.startsWith('blob:')) return src;
  
  // Skip if already optimized (has query params for optimization)
  if (src.includes('?format=') || src.includes('&format=')) return src;
  
  // Skip emoji or non-URL sources
  if (!src.startsWith('http')) return src;

  void width;
  void height;
  return src;
};

// Generate srcset for responsive images
const generateSrcSet = (
  src: string,
  settings: ImageOptimizationSettings,
  sizes: number[] = [320, 640, 768, 1024, 1280, 1920]
): string => {
  if (!settings.enabled || !src || !src.startsWith('http')) return '';
  
  void sizes;
  // The migration currently creates one canonical 4K-class asset, not multiple
  // width variants. Omitting srcset avoids assigning a false width descriptor
  // to portrait images whose intrinsic width is below 3,840 pixels.
  return '';
};

export const useImageOptimization = () => {
  const [settings, setSettings] = useState<ImageOptimizationSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  const fetchSettings = useCallback(async () => {
    try {
      const { data, error } = await apiClient
        .from("app_settings")
        .select("*")
        .eq("key", "image_optimization")
        .maybeSingle();

      if (!error && data?.value) {
        const value = data.value as unknown as ImageOptimizationSettings;
        setSettings({ ...DEFAULT_SETTINGS, ...value });
      }
    } catch (error) {
      console.error("Error fetching image optimization settings:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const updateSettings = async (newSettings: ImageOptimizationSettings) => {
    try {
      const jsonValue = JSON.parse(JSON.stringify(newSettings)) as Json;
      
      const { data: existing } = await apiClient
        .from("app_settings")
        .select("id")
        .eq("key", "image_optimization")
        .maybeSingle();

      if (existing) {
        const { error } = await apiClient
          .from("app_settings")
          .update({ value: jsonValue })
          .eq("key", "image_optimization");
        if (error) throw error;
      } else {
        const { error } = await apiClient
          .from("app_settings")
          .insert([{ 
            key: "image_optimization", 
            value: jsonValue, 
            description: "Image optimization and CDN delivery settings"
          }]);
        if (error) throw error;
      }

      setSettings(newSettings);
      return true;
    } catch (error) {
      console.error("Error updating image optimization settings:", error);
      return false;
    }
  };

  const optimizeUrl = useCallback((src: string, width?: number, height?: number) => {
    return getOptimizedImageUrl(src, settings, width, height);
  }, [settings]);

  const getSrcSet = useCallback((src: string, sizes?: number[]) => {
    return generateSrcSet(src, settings, sizes);
  }, [settings]);

  return { 
    settings, 
    loading, 
    updateSettings, 
    optimizeUrl, 
    getSrcSet,
    DEFAULT_SETTINGS 
  };
};
