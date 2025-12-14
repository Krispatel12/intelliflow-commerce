import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 ai-mesh-bg" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>
      
      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Border Card */}
          <div className="animated-border rounded-3xl p-px">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Ready to Build with </span>
                <span className="gradient-text">Autonomous AI?</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Join the next generation of commerce. Let AI handle the complexity 
                while you focus on growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/dashboard" className="btn-primary group flex items-center gap-2 text-lg px-8 py-4">
                  <span>Launch AI Dashboard</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
                  <Calendar className="h-5 w-5" />
                  <span>Request Demo</span>
                </button>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                No credit card required • Free tier available • Setup in minutes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}