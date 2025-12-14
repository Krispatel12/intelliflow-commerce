import { motion } from "framer-motion";
import { Brain, Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Decision {
  id: string;
  time: string;
  action: string;
  target: string;
  reason: string;
  confidence: number;
  status: "executed" | "pending" | "rejected";
}

const decisions: Decision[] = [
  {
    id: "1",
    time: "2 min ago",
    action: "Price increased by 8%",
    target: "SKU-7829 (Wireless Headphones)",
    reason: "Competitor stock depleted, demand surge detected from search trends",
    confidence: 94,
    status: "executed",
  },
  {
    id: "2",
    time: "5 min ago",
    action: "Restock order placed",
    target: "SKU-1234 (USB-C Cables)",
    reason: "Velocity indicates stockout in 72 hours, supplier lead time is 48 hours",
    confidence: 91,
    status: "executed",
  },
  {
    id: "3",
    time: "8 min ago",
    action: "Fraud alert triggered",
    target: "Order #98234",
    reason: "New account, 3 high-value orders in 10 minutes, mismatched billing/shipping",
    confidence: 87,
    status: "pending",
  },
  {
    id: "4",
    time: "15 min ago",
    action: "Price decreased by 5%",
    target: "SKU-5678 (Phone Cases)",
    reason: "Inventory aging >30 days, competitor pricing dropped, margin still positive",
    confidence: 89,
    status: "executed",
  },
  {
    id: "5",
    time: "23 min ago",
    action: "Supplier switch recommended",
    target: "Category: Electronics",
    reason: "Current supplier delay rate 23%, alternative offers 12% with same pricing",
    confidence: 76,
    status: "rejected",
  },
];

export function AIDecisionTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Decision Timeline
        </h3>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-xs text-muted-foreground">Live updates</span>
        </div>
      </div>

      <div className="space-y-4">
        {decisions.map((decision, index) => (
          <motion.div
            key={decision.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300">
              {/* Status Icon */}
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                  decision.status === "executed" && "bg-success/10",
                  decision.status === "pending" && "bg-warning/10",
                  decision.status === "rejected" && "bg-destructive/10"
                )}
              >
                {decision.status === "executed" && (
                  <CheckCircle className="h-5 w-5 text-success" />
                )}
                {decision.status === "pending" && (
                  <AlertTriangle className="h-5 w-5 text-warning" />
                )}
                {decision.status === "rejected" && (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-medium text-sm">{decision.action}</span>
                  <span className="text-xs text-muted-foreground flex-shrink-0">
                    {decision.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{decision.target}</p>

                {/* Expandable Reason */}
                <div className="flex items-start gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  <Info className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{decision.reason}</p>
                </div>
              </div>

              {/* Confidence Badge */}
              <div
                className={cn(
                  "flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold",
                  decision.confidence >= 90 && "bg-success/20 text-success",
                  decision.confidence >= 80 &&
                    decision.confidence < 90 &&
                    "bg-warning/20 text-warning",
                  decision.confidence < 80 && "bg-muted text-muted-foreground"
                )}
              >
                {decision.confidence}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <button className="w-full mt-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        View all decisions →
      </button>
    </motion.div>
  );
}