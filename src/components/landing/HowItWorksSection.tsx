import { motion } from "framer-motion";
import { Database, Brain, Gauge, Play, GraduationCap, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Observed",
    description: "Continuous ingestion of sales, inventory, market, and competitor data in real-time.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI Models Evaluate",
    description: "Multiple ML models analyze patterns, predict outcomes, and generate recommendations.",
    color: "accent",
  },
  {
    icon: Gauge,
    title: "Confidence Calculated",
    description: "Each decision includes a confidence score and risk assessment before execution.",
    color: "warning",
  },
  {
    icon: Play,
    title: "Action Executed",
    description: "Approved decisions are automatically executed across your systems.",
    color: "success",
  },
  {
    icon: GraduationCap,
    title: "Outcome Learned",
    description: "Results feed back into models, continuously improving accuracy over time.",
    color: "primary",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">How AI </span>
            <span className="gradient-text">Makes Decisions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent, explainable AI decision pipeline you can trust and audit.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="flex items-start gap-6 mb-8">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-${step.color}/10 border border-${step.color}/30`}>
                    <step.icon className={`h-6 w-6 text-${step.color}`} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-xs font-bold flex items-center justify-center border border-border">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-border to-transparent my-2 relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.15 }}
                        style={{ transformOrigin: "top" }}
                      />
                      <ArrowDown className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-4 w-4 text-muted-foreground/50" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-5 mt-1">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 glass-card p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-center mb-6">Real-Time Decision Flow</h3>
          
          <div className="flex items-center justify-between overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 rounded-full bg-${step.color}/20 border border-${step.color}/40 flex items-center justify-center`}
                  animate={{
                    scale: [1, 1.1, 1],
                    borderColor: [`hsl(var(--${step.color}) / 0.4)`, `hsl(var(--${step.color}) / 0.8)`, `hsl(var(--${step.color}) / 0.4)`],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  <step.icon className={`h-5 w-5 text-${step.color}`} />
                </motion.div>
                
                {index < steps.length - 1 && (
                  <div className="w-12 md:w-20 h-px bg-border relative mx-2">
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            Data flows through each stage in milliseconds, with full traceability
          </p>
        </motion.div>
      </div>
    </section>
  );
}