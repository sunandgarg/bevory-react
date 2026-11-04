import { useEffect, useState } from "react";
import { BarChart3, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { apiClient } from "@/integrations/api/client";
import { GA4_MEASUREMENT_ID, GA4_PROPERTY_ID } from "@/lib/googleAnalyticsConfig";

const GoogleAnalyticsSettings = () => {
  const [reportingConfigured, setReportingConfigured] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    void apiClient.functions.invoke("google-analytics", { body: { action: "status" } })
      .then(({ data, error }) => {
        if (mounted) setReportingConfigured(error ? false : data?.configured === true);
      })
      .catch(() => {
        if (mounted) setReportingConfigured(false);
      });
    return () => { mounted = false; };
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-blue-500" />
            <div>
              <CardTitle>Google Analytics 4</CardTitle>
              <CardDescription>Tracking IDs are fixed in the website code.</CardDescription>
            </div>
          </div>
          <Badge variant="outline">Code managed</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          <div><p className="text-muted-foreground">Measurement ID</p><p className="font-mono">{GA4_MEASUREMENT_ID}</p></div>
          <div><p className="text-muted-foreground">Property ID</p><p className="font-mono">{GA4_PROPERTY_ID}</p></div>
        </div>
        <p className="text-muted-foreground">
          Reporting API: {reportingConfigured === null ? "Checking..." : reportingConfigured ? "Service account configured" : "Service account unavailable or status could not be checked"}.
          The reporting credential remains in the backend environment, never in public settings.
        </p>
        <a className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline" href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener noreferrer">
          Open Google Analytics <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </CardContent>
    </Card>
  );
};

export default GoogleAnalyticsSettings;
