/**
 * Image Processing Engine for Product Images
 * 
 * Migrated assets are resampled once on the server and served directly from
 * BevOry's CDN without browser-side re-encoding.
 */

import { apiClient } from "@/integrations/api/client";

const TARGET_SIZE = 3840;

/**
 * Process image URL to ensure optimal display
 * Images are pre-optimized during the S3 migration and served from BevOry's CDN.
 */
export function getOptimizedProductImageUrl(
  imageUrl: string | null,
  options: {
    width?: number;
    height?: number;
    fit?: "contain" | "cover" | "inside";
    background?: string;
  } = {}
): string | null {
  if (!imageUrl) return null;

  const { 
    width = TARGET_SIZE, 
    height = TARGET_SIZE, 
    fit = "contain",
    background = "ffffff" // White background by default
  } = options;

  void width;
  void height;
  void fit;
  void background;
  return imageUrl;
}

/**
 * Generate srcset for responsive images
 */
export function generateProductImageSrcset(imageUrl: string | null): string | null {
  if (!imageUrl) return null;

  // A single canonical asset is available today. Returning no srcset avoids
  // claiming an incorrect intrinsic width for portrait images.
  return null;
}

/**
 * Upload and process a product image
 */
export async function uploadProductImage(
  file: File,
  productId: string
): Promise<{ url: string | null; error: string | null }> {
  try {
    // Validate file
    if (!file.type.startsWith("image/")) {
      return { url: null, error: "File must be an image" };
    }

    if (file.size > 5 * 1024 * 1024) {
      return { url: null, error: "Image must be less than 5MB" };
    }

    // Create a unique filename
    const ext = file.name.split(".").pop() || "jpg";
    const filename = `products/${productId}/${Date.now()}.${ext}`;

    // Upload through the BevOry API
    const { data, error } = await apiClient.storage
      .from("images")
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      return { url: null, error: error.message };
    }

    // Get public URL
    const { data: { publicUrl } } = apiClient.storage
      .from("images")
      .getPublicUrl(data.path);

    return { url: publicUrl, error: null };
  } catch (err) {
    console.error("Error uploading image:", err);
    return { url: null, error: "Failed to upload image" };
  }
}

/**
 * Preserve the CDN asset without lossy browser-side re-encoding.
 */
export async function processImageForDisplay(
  imageUrl: string
): Promise<string> {
  return imageUrl;
}
