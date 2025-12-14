import { motion } from "framer-motion";
import { 
  Bot, 
  Package, 
  TrendingUp, 
  Handshake, 
  Shield, 
  Zap,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Bot,
    title: "Autonomous Pricing AI",
    description: "Real-time price optimization using market signals, competitor data, and demand forecasting.",
    color: "primary",
    stats: "+18% margin improvement",
    details: "Our AI analyzes over 50 market signals per second to optimize your pricing strategy automatically.",
  },
  {
    icon: Package,
    title: "Self-Healing Inventory",
    description: "Predictive restocking and automatic supplier coordination to prevent stockouts.",
    color: "success",
    stats: "99.2% availability",
    details: "Machine learning models predict demand spikes and automatically trigger restock orders.",
  },
  {
    icon: TrendingUp,
    title: "Demand Forecast Engine",
    description: "AI-powered demand prediction with 94% accuracy using historical and external data.",
    color: "accent",
    stats: "94% forecast accuracy",
    details: "Combines internal sales data with external signals like weather, events, and trends.",
  },
  {
    icon: Handshake,
    title: "AI Supplier Negotiation",
    description: "Automated vendor negotiations and contract optimization for better terms.",
    color: "warning",
    stats: "-12% procurement costs",
    details: "AI negotiates optimal terms based on market conditions and supplier performance history.",
  },
  {
    icon: Shield,
    title: "Fraud & Risk Detection",
    description: "Real-time anomaly detection and automatic risk mitigation protocols.",
    color: "destructive",
    stats: "99.9% threat detection",
    details: "Advanced pattern recognition identifies suspicious activity before it impacts your business.",
  },
  {
    icon: Zap,
    title: "Instant Decisions",
    description: "Sub-second decision making with full explainability and audit trails.",
    color: "primary",
    stats: "<100ms response time",
    details: "Every decision is logged with reasoning, allowing full transparency and compliance.",
  },
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 relative">
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
            <span className="text-foreground">AI That </span>
            <span className="gradient-text">Takes Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six autonomous systems working together to optimize every aspect of your commerce operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className="glass-card-hover p-6 cursor-pointer group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-${feature.color}/10 border border-${feature.color}/20 group-hover:border-${feature.color}/40 transition-colors`}>
                <feature.icon className={`h-6 w-6 text-${feature.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {feature.description}
              </p>

              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium text-${feature.color}`}>
                  {feature.stats}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              {/* Expanded Details on Hover */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeFeature === index ? "auto" : 0,
                  opacity: activeFeature === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    {feature.details}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}