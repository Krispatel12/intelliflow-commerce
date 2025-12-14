import { motion } from "framer-motion";

const logos = [
  "TechCorp",
  "GlobalRetail",
  "FastShip",
  "DataDrive",
  "CloudScale",
  "MegaMart",
];

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            Trusted by industry leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <div className="h-8 w-8 rounded-lg bg-muted/50 flex items-center justify-center">
                <span className="text-xs font-bold">{logo.charAt(0)}</span>
              </div>
              <span className="text-lg font-semibold">{logo}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}