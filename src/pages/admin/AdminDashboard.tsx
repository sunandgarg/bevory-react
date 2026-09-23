import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Boxes,
  FileText,
  MapPin,
  Package,
  Settings,
  Sparkles,
  Tag,
  Users,
  Wine,
} from "lucide-react";
import { Link } from "react-router-dom";
import { apiClient } from "@/integrations/api/client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Summary = Record<
  "products" | "categories" | "cities" | "profiles" | "product_reviews" | "blog_posts" | "brand_spotlights" | "cocktails",
  number
>;

const statCards = [
  { key: "products", label: "Products", icon: Package, to: "/admin/products" },
  { key: "brand_spotlights", label: "Brands", icon: Sparkles, to: "/admin/brands" },
  { key: "categories", label: "Categories", icon: Tag, to: "/admin/categories" },
  { key: "cities", label: "Cities", icon: MapPin, to: "/admin/locations" },
  { key: "profiles", label: "Users", icon: Users, to: "/admin/users" },
  { key: "product_reviews", label: "Reviews", icon: FileText, to: "/admin/reviews" },
] as const;

const quickActions = [
  { label: "Manage products", detail: "Edit products, images and details", icon: Package, to: "/admin/products" },
  { label: "Update prices", detail: "Review city and bottle prices", icon: Boxes, to: "/admin/prices" },
  { label: "Edit brands", detail: "Logos, spotlight and brand pages", icon: Sparkles, to: "/admin/brands" },
  { label: "Publish a guide", detail: "Create or update editorial content", icon: BookOpen, to: "/admin/blog" },
  { label: "Manage cocktails", detail: "Recipes, measurements and images", icon: Wine, to: "/admin/cocktails" },
  { label: "Site settings", detail: "Search, integrations and configuration", icon: Settings, to: "/admin/settings" },
] as const;

const AdminDashboard = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["admin-summary"],
    queryFn: async () => {
      const result = await apiClient.admin.getSummary();
      if (result.error) throw new Error(result.error.message);
      return result.data as Summary;
    },
    staleTime: 5 * 60 * 1000,
  });

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-accent">Overview</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">Welcome back</h2>
        <p className="mt-1 text-sm text-muted-foreground">Choose a task below. Counts refresh automatically every five minutes.</p>
      </div>

      {isError ? (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-5">
          <p className="text-sm font-medium text-destructive">Dashboard summary could not be loaded.</p>
          <button type="button" onClick={() => void refetch()} className="text-sm font-semibold text-foreground underline underline-offset-4">
            Try again
          </button>
        </div>
      ) : (
        <section aria-label="Platform totals" className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {statCards.map((stat) => (
            <Link key={stat.key} to={stat.to} className="group">
              <Card className="h-full border-border/70 shadow-none transition-colors group-hover:border-accent/50">
                <CardContent className="p-4">
                  <stat.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  {isLoading ? (
                    <Skeleton className="mt-4 h-7 w-16" />
                  ) : (
                    <p className="mt-4 text-2xl font-bold tabular-nums">{(data?.[stat.key] ?? 0).toLocaleString("en-IN")}</p>
                  )}
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      )}

      <section aria-labelledby="quick-actions-heading">
        <div className="mb-3 flex items-center gap-2">
          <Bot className="h-4 w-4 text-accent" aria-hidden="true" />
          <h3 id="quick-actions-heading" className="text-sm font-semibold">Quick actions</h3>
        </div>
        <div className="overflow-hidden rounded-xl border border-border/70 bg-card">
          {quickActions.map((action, index) => (
            <Link
              key={action.to}
              to={action.to}
              className={`group flex min-h-16 items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary/60 ${index ? "border-t border-border/60" : ""}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                <action.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{action.label}</span>
                <span className="block truncate text-xs text-muted-foreground">{action.detail}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
