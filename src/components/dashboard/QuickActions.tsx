import { motion } from "framer-motion";
import {
  Play,
  Pause,
  RefreshCcw,
  Download,
  Settings,
  AlertTriangle,
} from "lucide-react";

const actions = [
  {
    icon: Play,
    label: "Resume AI",
    description: "All systems active",
    status: "active" as const,
  },
  {
    icon: RefreshCcw,
    label: "Sync Data",
    description: "Last sync: 2m ago",
    status: "idle" as const,
  },
  {
    icon: Download,
    label: "Export Report",
    description: "Daily summary",
    status: "idle" as const,
  },
  {
    icon: AlertTriangle,
    label: "View Alerts",
    description: "3 pending",
    status: "warning" as const,
  },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card p-6"
    >
      <h3 className="font-semibold mb-4">Quick Actions</h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.6 + index * 0.1 }}
            className={`p-4 rounded-xl border transition-all duration-200 text-left group ${
              action.status === "active"
                ? "bg-success/10 border-success/30 hover:border-success/50"
                : action.status === "warning"
                ? "bg-warning/10 border-warning/30 hover:border-warning/50"
                : "bg-secondary/30 border-border/50 hover:border-primary/30 hover:bg-secondary/50"
            }`}
          >
            <action.icon
              className={`h-5 w-5 mb-2 ${
                action.status === "active"
                  ? "text-success"
                  : action.status === "warning"
                  ? "text-warning"
                  : "text-muted-foreground group-hover:text-primary"
              } transition-colors`}
            />
            <div className="text-sm font-medium">{action.label}</div>
            <div className="text-xs text-muted-foreground">{action.description}</div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}