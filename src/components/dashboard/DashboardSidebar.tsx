import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  DollarSign,
  Package,
  AlertTriangle,
  Settings,
  HelpCircle,
  Bot,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: DollarSign, label: "Pricing AI", path: "/dashboard/pricing" },
  { icon: Package, label: "Inventory", path: "/dashboard/inventory" },
  { icon: TrendingUp, label: "Forecasting", path: "/dashboard/forecasting" },
  { icon: AlertTriangle, label: "Risk Center", path: "/dashboard/risk" },
  { icon: Users, label: "Suppliers", path: "/dashboard/suppliers" },
];

const bottomItems = [
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  { icon: HelpCircle, label: "Help", path: "/dashboard/help" },
];

export function DashboardSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 240 }}
      className="fixed left-0 top-0 bottom-0 z-40 flex flex-col border-r border-border/50 bg-sidebar"
    >
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-border/50">
        <Link to="/" className="flex items-center gap-2 overflow-hidden">
          <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-semibold whitespace-nowrap"
            >
              <span className="text-foreground">Nexus</span>
              <span className="gradient-text">AI</span>
            </motion.span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-primary")} />
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
              {isActive && !collapsed && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="p-3 border-t border-border/50 space-y-1">
        {bottomItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            )}
          </Link>
        ))}
      </div>

      {/* AI Status */}
      {!collapsed && (
        <div className="p-3 border-t border-border/50">
          <div className="glass-card p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-xs font-medium text-success">AI Active</span>
            </div>
            <p className="text-xs text-muted-foreground">
              2,847 decisions today
            </p>
          </div>
        </div>
      )}
    </motion.aside>
  );
}