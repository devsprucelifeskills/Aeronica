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

export default function Industries() {
  return (
    <section id="industries" className="viewport-section bg-midnight relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute top-[35%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute bottom-[35%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute left-[38.2%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.618fr] gap-8 lg:gap-14 items-center h-full">
          
          {/* Left Column: Descriptive Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center h-full border-r border-white/[0.04] pr-4 lg:pr-8"
          >
            <span className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-3">
              Market Verticals
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-light mb-4">
              Sectors We <span className="text-electric">Empower</span>.
            </h2>
            <p className="text-xs text-silver/60 leading-relaxed max-w-sm">
              Our GIS mapping, autonomous inspection, and AI analytics modules are 
              actively deployed across critical sectors, driving cost reduction and safety compliance.
            </p>
          </motion.div>

          {/* Right Column: 4x2 Cardless Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="border-t border-white/[0.04] pt-4 flex flex-col items-start group hover:border-t-electric/40 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded bg-white/[0.02] flex items-center justify-center mb-3 border border-white/5 text-electric/70 group-hover:text-electric transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-xs text-light/90 group-hover:text-electric transition-colors duration-300">
                      {ind.label}
                    </span>
                    <span className="text-[8px] font-mono text-silver/30 mt-1 uppercase tracking-wider">Active</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
