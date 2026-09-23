import { useEffect } from "react";
import { Outlet, NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import {
  Package, MapPin, Tag, PartyPopper, Users, LayoutDashboard,
  ArrowLeft, Sparkles, Wine, BookOpen, CircleDot, Megaphone,
  HelpCircle, Palette, Star, Flag, FileText, Settings, PlayCircle, Layers, DollarSign, Upload,
  Database, Brain, Activity
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
  SidebarHeader, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";

const navGroups = [
  {
    label: "Workspace",
    items: [{ icon: LayoutDashboard, label: "Dashboard", path: "/admin" }],
  },
  {
    label: "Catalog",
    items: [
      { icon: Package, label: "Products", path: "/admin/products" },
      { icon: DollarSign, label: "Prices", path: "/admin/prices" },
      { icon: Tag, label: "Categories", path: "/admin/categories" },
      { icon: Layers, label: "Sub-Categories", path: "/admin/sub-categories" },
      { icon: Sparkles, label: "Brands", path: "/admin/brands" },
      { icon: Upload, label: "Bulk Upload", path: "/admin/bulk-upload" },
    ],
  },
  {
    label: "Content",
    items: [
      { icon: Wine, label: "Cocktails", path: "/admin/cocktails" },
      { icon: BookOpen, label: "Guide", path: "/admin/blog" },
      { icon: CircleDot, label: "Cheers Guide", path: "/admin/cheers-guide" },
      { icon: Star, label: "Reviews", path: "/admin/reviews" },
      { icon: PlayCircle, label: "Videos", path: "/admin/video-reviews" },
      { icon: Users, label: "Creators", path: "/admin/video-creators" },
    ],
  },
  {
    label: "Operations",
    items: [
      { icon: PartyPopper, label: "Party", path: "/admin/party" },
      { icon: MapPin, label: "Locations", path: "/admin/locations" },
      { icon: Megaphone, label: "Announce", path: "/admin/announcements" },
      { icon: Flag, label: "Reports", path: "/admin/reports" },
      { icon: Users, label: "Users", path: "/admin/users" },
      { icon: HelpCircle, label: "Help", path: "/admin/help-support" },
    ],
  },
  {
    label: "Settings",
    items: [
      { icon: Palette, label: "Branding", path: "/admin/branding" },
      { icon: Settings, label: "Site Settings", path: "/admin/settings" },
      { icon: FileText, label: "SEO & Sitemap", path: "/admin/sitemap" },
      { icon: Database, label: "Database", path: "/admin/database" },
      { icon: Brain, label: "AI", path: "/admin/ai-settings" },
      { icon: Activity, label: "Performance", path: "/admin/performance-report" },
    ],
  },
];

const AdminSidebar = ({ email }: { email?: string }) => {
  const { pathname } = useLocation();
  const { state, isMobile, setOpenMobile } = useSidebar();
  const collapsed = state === "collapsed";

  const initials = email ? email.slice(0, 2).toUpperCase() : "AD";

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-background">
      <SidebarHeader className="border-b border-border/60 px-3 py-3">
        <Link to="/admin" className="flex items-center gap-2.5 group">
          <span
            aria-hidden="true"
            className="h-8 w-8 shrink-0 bg-foreground"
            style={{ WebkitMask: "url('/favicon.png?v=5') center / contain no-repeat", mask: "url('/favicon.png?v=5') center / contain no-repeat" }}
          />
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-tight text-foreground">BevOry Admin</span>
              <span className="text-[10px] text-muted-foreground">Content workspace</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {navGroups.map((group) => (
          <SidebarGroup key={group.label} className="py-1.5">
            {!collapsed && (
              <SidebarGroupLabel className="px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.path}
                      tooltip={item.label}
                      className="h-9 rounded-lg data-[active=true]:bg-accent/10 data-[active=true]:font-semibold data-[active=true]:text-accent"
                    >
                      <NavLink
                        to={item.path}
                        end={item.path === "/admin"}
                        onClick={() => isMobile && setOpenMobile(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="text-sm">{item.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="border-t border-border p-3">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-9 h-9 rounded-full bg-secondary text-foreground/70 flex items-center justify-center text-xs font-bold shrink-0">
              {initials}
            </div>
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="text-xs font-semibold truncate">Admin User</span>
              <span className="text-[10px] text-muted-foreground truncate">{email}</span>
            </div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
};

const AdminLayout = () => {
  const { isAdmin, loading, user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPage = navGroups.flatMap((group) => group.items).find((item) => item.path === pathname)?.label || "Admin";

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) navigate("/auth");
  }, [isAdmin, loading, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }
  if (!isAdmin) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/20">
        <AdminSidebar email={user?.email} />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-40 h-14 border-b border-border/70 bg-background/95 backdrop-blur-md">
            <div className="flex h-full items-center justify-between px-4 lg:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <SidebarTrigger className="rounded-lg hover:bg-secondary" />
                <h1 className="truncate text-sm font-semibold tracking-tight sm:text-base">{currentPage}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  title="Back to site"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">View site</span>
                </Link>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-foreground/70">
                  {user?.email?.slice(0, 2).toUpperCase() ?? "AD"}
                </div>
              </div>
            </div>
          </header>
          <main className="w-full flex-1">
            <div className="mx-auto w-full max-w-[1440px] p-4 sm:p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
