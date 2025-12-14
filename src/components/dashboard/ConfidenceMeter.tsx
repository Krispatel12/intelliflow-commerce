import { motion } from "framer-motion";
import { Brain, Gauge, AlertCircle } from "lucide-react";

interface AIMetric {
  label: string;
  value: number;
  status: "high" | "medium" | "low";
}

const metrics: AIMetric[] = [
  { label: "Pricing Decisions", value: 94, status: "high" },
  { label: "Demand Forecasting", value: 91, status: "high" },
  { label: "Inventory Planning", value: 87, status: "medium" },
  { label: "Fraud Detection", value: 96, status: "high" },
  { label: "Supplier Scoring", value: 78, status: "medium" },
];

export function ConfidenceMeter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold flex items-center gap-2">
          <Gauge className="h-5 w-5 text-primary" />
          AI Confidence Scores
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <AlertCircle className="h-3 w-3" />
          <span>Updated live</span>
        </div>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={metric.label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{metric.label}</span>
              <span
                className={`text-sm font-semibold ${
                  metric.status === "high"
                    ? "text-success"
                    : metric.status === "medium"
                    ? "text-warning"
                    : "text-destructive"
                }`}
              >
                {metric.value}%
              </span>
            </div>
            <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${
                  metric.status === "high"
                    ? "bg-success"
                    : metric.status === "medium"
                    ? "bg-warning"
                    : "bg-destructive"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Overall Score */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-medium">Overall AI Health</span>
          </div>
          <div className="text-2xl font-bold text-primary">89%</div>
        </div>
      </div>
    </motion.div>
  );
}