"use client";

import { motion } from "framer-motion";
import {
  Train,
  Building2,
  TreePine,
  Mountain,
  Zap,
  Droplets,
  Landmark,
  Factory,
} from "lucide-react";

const industries = [
  { icon: Train, label: "Railways & Roadways" },
  { icon: Building2, label: "Construction" },
  { icon: TreePine, label: "Forest & Environment" },
  { icon: Mountain, label: "Mining & Quarrying" },
  { icon: Zap, label: "Power & Energy" },
  { icon: Droplets, label: "Water Resources" },
  { icon: Landmark, label: "Smart Cities" },
  { icon: Factory, label: "Oil & Gas" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            Industries We{" "}
            <span className="gradient-text">Empower</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Our GIS, drone, and AI solutions are deployed across critical sectors,
            driving efficiency, safety, and intelligence where it matters most.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.label}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-6 sm:p-8 card-shadow card-hover border border-light/50 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/5 flex items-center justify-center mb-4 group-hover:bg-electric/15 transition-colors">
                <industry.icon className="w-6 h-6 text-electric" />
              </div>
              <span className="font-heading font-semibold text-sm sm:text-base text-midnight">
                {industry.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
