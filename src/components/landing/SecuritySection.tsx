import { motion } from "framer-motion";
import { Shield, Lock, FileText, Users, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Zero-Trust Architecture",
    description: "Every request is verified, every action is authenticated. No implicit trust.",
  },
  {
    icon: FileText,
    title: "AI Decision Audit Logs",
    description: "Complete traceability of every AI decision with timestamps and reasoning.",
  },
  {
    icon: Users,
    title: "Human Override System",
    description: "Full control to pause, override, or rollback any AI decision instantly.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "SOC 2 Type II, GDPR, and CCPA compliant with continuous monitoring.",
  },
];

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "CCPA",
  "HIPAA Ready",
];

export function SecuritySection() {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
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
            <span className="text-foreground">Enterprise-Grade </span>
            <span className="gradient-text">Security</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for the most demanding security and compliance requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-center mb-6">Certifications & Compliance</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
              >
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}