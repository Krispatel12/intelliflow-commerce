import { Bell, Search, User } from "lucide-react";
import { motion } from "framer-motion";

interface ActionItem {
  label: string;
  icon: React.ComponentType<any>;
  onClick: () => void;
}

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ActionItem[];
}

export function DashboardHeader({ title, subtitle, actions = [] }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {actions.length > 0 && (
          <div className="flex items-center gap-2">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.onClick}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-border hover:bg-accent/50 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>
        )}
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none w-40 placeholder:text-muted-foreground"
          />
          <kbd className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-secondary/50 transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-secondary/50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
        </button>
      </div>
    </header>
  );
}