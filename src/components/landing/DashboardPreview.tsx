import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  AlertTriangle,
  Brain,
  ArrowRight,
  Info
} from "lucide-react";

const metrics = [
  {
    label: "Revenue Today",
    value: "$124,892",
    change: "+12.3%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "AI Decisions",
    value: "2,847",
    change: "+156",
    trend: "up",
    icon: Brain,
  },
  {
    label: "Stock Health",
    value: "94%",
    change: "-2%",
    trend: "down",
    icon: Package,
  },
  {
    label: "Risk Score",
    value: "Low",
    change: "Stable",
    trend: "neutral",
    icon: AlertTriangle,
  },
];

const aiDecisions = [
  {
    time: "2 min ago",
    action: "Price increased by 8%",
    product: "SKU-7829",
    reason: "Competitor out of stock, demand surge detected",
    confidence: 94,
  },
  {
    time: "5 min ago",
    action: "Restock order placed",
    product: "SKU-1234",
    reason: "Predicted stockout in 3 days based on current velocity",
    confidence: 91,
  },
  {
    time: "12 min ago",
    action: "Fraud alert triggered",
    product: "Order #98234",
    reason: "Unusual pattern: Multiple high-value orders from new account",
    confidence: 87,
  },
];

export function DashboardPreview() {
  return (
    <section id="dashboard-preview" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 ai-mesh-bg opacity-50" />
      
      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Live </span>
            <span className="gradient-text">AI Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See your AI commerce engine in action. Every metric, every decision, fully explainable.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card p-1 rounded-2xl border border-border/50 shadow-2xl">
            <div className="bg-card rounded-xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-warning/80" />
                    <div className="w-3 h-3 rounded-full bg-success/80" />
                  </div>
                  <span className="text-sm text-muted-foreground">AI Commerce Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                  </span>
                  <span className="text-xs text-success">Live</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="metric-card group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <metric.icon className="h-4 w-4 text-muted-foreground" />
                        <div className={`flex items-center gap-1 text-xs ${
                          metric.trend === 'up' ? 'text-success' : 
                          metric.trend === 'down' ? 'text-destructive' : 
                          'text-muted-foreground'
                        }`}>
                          {metric.trend === 'up' && <TrendingUp className="h-3 w-3" />}
                          {metric.trend === 'down' && <TrendingDown className="h-3 w-3" />}
                          <span>{metric.change}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* AI Decision Timeline */}
                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Brain className="h-4 w-4 text-primary" />
                      Recent AI Decisions
                    </h3>
                    <span className="text-xs text-muted-foreground">Last 15 minutes</span>
                  </div>
                  
                  <div className="space-y-3">
                    {aiDecisions.map((decision, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-medium text-sm truncate">{decision.action}</span>
                            <span className="text-xs text-muted-foreground flex-shrink-0">{decision.time}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{decision.product}</p>
                          <div className="flex items-center gap-2">
                            <Info className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                              {decision.reason}
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            decision.confidence >= 90 ? 'bg-success/20 text-success' :
                            decision.confidence >= 80 ? 'bg-warning/20 text-warning' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {decision.confidence}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link to="/dashboard" className="btn-primary inline-flex items-center gap-2">
              <span>Explore Full Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}