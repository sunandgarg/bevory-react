import { useState, useEffect } from "react";
import { Save, Loader2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useImageOptimization, ImageOptimizationSettings as Settings } from "@/hooks/useImageOptimization";

const ImageOptimizationSettings = () => {
  const { settings, loading, updateSettings, DEFAULT_SETTINGS } = useImageOptimization();
  const [formData, setFormData] = useState<Settings>(DEFAULT_SETTINGS);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!loading) {
      setFormData(settings);
    }
  }, [settings, loading]);

  const handleSave = async () => {
    setSaving(true);
    const success = await updateSettings(formData);
    setSaving(false);

    if (success) {
      toast({
        title: "Settings Saved",
        description: "Image optimization settings have been updated. Changes will apply to new page loads.",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to save settings.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-32">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent" />
          Bevory Image Delivery
        </CardTitle>
        <CardDescription>
          Serve Bevory-controlled, non-generatively upscaled image masters through the private S3 media CDN.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Enable/Disable Switch */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
          <div>
            <Label className="text-base font-medium">Enable Image Optimization</Label>
            <p className="text-sm text-muted-foreground">
              Use private S3 assets with immutable CDN caching
            </p>
          </div>
          <Switch
            checked={formData.enabled}
            onCheckedChange={(checked) => setFormData({ ...formData, enabled: checked })}
          />
        </div>

        {formData.enabled && (
          <>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border p-3">
                <p className="text-xs text-muted-foreground">Master resolution</p>
                <p className="font-semibold">3,840px long edge</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-xs text-muted-foreground">Output</p>
                <p className="font-semibold">Lossless PNG / JPEG 95</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-xs text-muted-foreground">Resampling</p>
                <p className="font-semibold">Lanczos3, non-AI</p>
              </div>
            </div>

            {/* Performance Info */}
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Performance Benefits
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Private S3 removes runtime dependencies on third-party image hosts</li>
                <li>• Lazy loading defers off-screen images</li>
                <li>• Immutable CDN caching accelerates repeat visits</li>
                <li>• PNG preserves transparency; progressive JPEG preserves photographic quality</li>
              </ul>
            </div>
          </>
        )}

        {/* Save Button */}
        <div className="flex gap-3 pt-2">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Settings
              </>
            )}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setFormData(DEFAULT_SETTINGS)}
          >
            Reset to Default
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageOptimizationSettings;
