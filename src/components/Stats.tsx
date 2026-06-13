"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 10000, suffix: "+", label: "Area Scanned (Acres)" },
  { value: 5000, suffix: "+", label: "Area Sprayed (Acres)" },
  { value: 6, suffix: "+", label: "Cumulative Experience (Years)" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 4, suffix: "", label: "DGCA Certified Products" },
];

export default function Stats() {
  return (
    <section className="py-20 sm:py-28 bg-midnight relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Driving Impact Through{" "}
            <span className="gradient-text">Innovation</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-silver text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
