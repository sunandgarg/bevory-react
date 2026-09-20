import { useState, useRef, useCallback } from "react";
import { Upload, Link as LinkIcon, X, Loader2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiClient } from "@/integrations/api/client";
import { useToast } from "@/hooks/use-toast";

interface ImageUploadProps {
  value: string | null;
  onChange: (url: string | null) => void;
  folder?: string;
  aspectHint?: string;
  /** Recommended dimensions, e.g. "800 × 800 px" */
  recommendedSize?: string;
  /** Aspect ratio label, e.g. "1:1 square" */
  aspectRatio?: string;
  className?: string;
}

type ProcessedImage = {
  blob: Blob;
  contentType: "image/jpeg" | "image/png";
  extension: "jpg" | "png";
};

// Create a non-generative 4K-class PNG/JPEG before upload.
const processImage = async (
  file: File,
  maxWidth: number = 3840,
  maxHeight: number = 3840,
  quality: number = 0.95
): Promise<ProcessedImage> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let { width, height } = img;

      // Preserve aspect ratio and set the longest edge to the configured 4K target.
      const targetLongEdge = Math.min(maxWidth, maxHeight);
      const ratio = targetLongEdge / Math.max(width, height);
      width = Math.max(1, Math.round(width * ratio));
      height = Math.max(1, Math.round(height * ratio));

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Failed to get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      const isJpeg = file.type === "image/jpeg" || file.type === "image/jpg";
      const contentType = isJpeg ? "image/jpeg" : "image/png";
      const extension = isJpeg ? "jpg" : "png";

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(objectUrl);
          if (blob) {
            resolve({ blob, contentType, extension });
          } else {
            reject(new Error("Failed to process image"));
          }
        },
        contentType,
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Failed to load image"));
    };
    img.src = objectUrl;
  });
};

const ImageUpload = ({
  value,
  onChange,
  folder = "uploads",
  aspectHint,
  recommendedSize = "800 × 800 px",
  aspectRatio = "1:1 square",
  className = "",
}: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [urlInput, setUrlInput] = useState(value || "");
  const [activeTab, setActiveTab] = useState<string>(value ? "url" : "upload");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file",
        description: "Please select an image file",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB max before compression)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image under 10MB",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      const processed = await processImage(file);
      if (processed.blob.size > 5 * 1024 * 1024) {
        throw new Error("The 4K output exceeds the 5MB upload limit; use a JPEG source for photographic images");
      }

      // Generate unique filename
      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(2, 8);
      const filename = `${folder}/${timestamp}-${randomStr}.${processed.extension}`;

      // Upload through the Bevory API
      const { data, error } = await apiClient.storage
        .from("images")
        .upload(filename, processed.blob, {
          contentType: processed.contentType,
          cacheControl: "31536000",
        });

      if (error) throw error;

      // Get public URL
      const { data: urlData } = apiClient.storage
        .from("images")
        .getPublicUrl(data.path);

      onChange(urlData.publicUrl);
      setUrlInput(urlData.publicUrl);
      
      const originalSize = (file.size / 1024).toFixed(1);
      const processedSize = (processed.blob.size / 1024).toFixed(1);
      
      toast({
        title: "Image uploaded",
        description: `Prepared a 4K ${processed.extension.toUpperCase()} (${originalSize}KB → ${processedSize}KB)`,
      });
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [folder, onChange, toast]);

  const handleUrlSubmit = useCallback(() => {
    if (urlInput.trim()) {
      onChange(urlInput.trim());
      toast({ title: "URL set" });
    }
  }, [urlInput, onChange, toast]);

  const handleClear = useCallback(() => {
    onChange(null);
    setUrlInput("");
  }, [onChange]);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Recommended size badge — always visible */}
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2">
        <ImageIcon className="w-3.5 h-3.5 text-accent shrink-0" />
        <span className="text-xs font-medium text-foreground">Recommended:</span>
        <span className="text-xs font-semibold text-accent">{recommendedSize}</span>
        <span className="text-xs text-muted-foreground">• {aspectRatio}</span>
        <span className="text-xs text-muted-foreground ml-auto">4K PNG/JPEG • source &lt; 10 MB</span>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload" className="gap-2">
            <Upload className="w-3.5 h-3.5" /> Upload
          </TabsTrigger>
          <TabsTrigger value="url" className="gap-2">
            <LinkIcon className="w-3.5 h-3.5" /> URL
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-3">
          <div
            onClick={() => !uploading && fileInputRef.current?.click()}
            className={`
              border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
              transition-colors hover:border-accent hover:bg-accent/5
              ${uploading ? "opacity-50 cursor-wait" : ""}
            `}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={uploading}
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
                <p className="text-sm text-muted-foreground">Preparing 4K image & uploading...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <p className="text-sm font-medium">Click to upload</p>
                <p className="text-xs text-muted-foreground">
                  Non-generative 4K PNG/JPEG • Max source 10MB
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="url" className="mt-3">
          <div className="flex gap-2">
            <Input
              placeholder="https://example.com/image.jpg"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onPaste={(e) => {
                e.stopPropagation();
                const text = e.clipboardData.getData("text");
                setUrlInput(text);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleUrlSubmit();
                }
              }}
            />
            <Button type="button" onClick={handleUrlSubmit} variant="secondary">
              Set
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Preview */}
      {value && (
        <div className="relative rounded-xl overflow-hidden bg-secondary border border-border">
          <img
            src={value}
            alt="Preview"
            className="w-full h-32 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "";
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <Button
            type="button"
            size="icon"
            variant="destructive"
            className="absolute top-2 right-2 w-7 h-7"
            onClick={handleClear}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {aspectHint && (
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <ImageIcon className="w-3 h-3" /> {aspectHint}
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
