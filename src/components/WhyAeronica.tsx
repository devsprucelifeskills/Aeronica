"use client";

import { motion } from "framer-motion";
import { Wrench, Crosshair, ShieldCheck, Leaf, TrendingUp, Lightbulb } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 10000, suffix: "+", label: "Area Scanned (Acres)" },
  { value: 5000, suffix: "+", label: "Area Sprayed (Acres)" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 4, suffix: "", label: "DGCA Certified Products" },
  { value: 6, suffix: "+", label: "Years Experience" },
];

const advantages = [
  {
    icon: Wrench,
    title: "In-House R&D",
    description: "Rapid prototyping, custom payloads, and strict quality control through indigenous design and manufacturing.",
  },
  {
    icon: Crosshair,
    title: "Sub-Centimeter Precision",
    description: "RTK/PPK-enabled UAV systems delivering highly accurate spatial mapping data for engineering models.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description: "DGCA Type Certified drones meeting rigorous safety codes for legal, risk-free industrial operations.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tech",
    description: "Eco-conscious spray systems reducing water wastage by up to 95% using intelligent droplets control.",
  },
  {
    icon: TrendingUp,
    title: "Dedicated Mission Support",
    description: "Comprehensive lifecycle support including technical consulting, pilot training, and onsite UAV maintenance.",
  },
  {
    icon: Lightbulb,
    title: "Indigenous Manufacturing",
    description: "Proudly designed and assembled in India, supporting Atmanirbhar Bharat aerospace goals.",
  },
];

export default function WhyAeronica() {
  return (
    <section id="why" className="viewport-section bg-midnight relative overflow-hidden">
      {/* Visual Tech Lines */}
      <div className="absolute top-[40%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute bottom-[40%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute left-[38.2%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.618fr] gap-8 lg:gap-14 items-center h-full">
          
          {/* Left Column (38.2% Width): Impact Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center h-full border-r border-white/[0.04] pr-4 lg:pr-8"
          >
            <span className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-2">
              Performance Impact
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-light mb-8">
              Proven In <span className="text-electric">Action</span>.
            </h2>
            
            {/* Minimal cardless stats list */}
            <div className="space-y-5">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center border-t border-white/[0.04] pt-4.5">
                  <span className="text-[11px] font-semibold text-silver/60 uppercase tracking-wider">{stat.label}</span>
                  <span className="font-heading font-extrabold text-lg text-light font-mono">
                    <AnimatedCounter end={stat.value} />
                    {stat.suffix}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (61.8% Width): Differentiators Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col justify-center h-full"
          >
            <span className="text-[10px] font-bold text-silver/40 uppercase tracking-[0.2em] mb-2 block">
              Competitive Advantage
            </span>
            <h3 className="font-heading text-xl font-bold text-light mb-8">
              Why Leaders Select Aeronica.
            </h3>

            {/* 3x2 Cardless Grid of Advantages */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div key={idx} className="border-t border-white/[0.04] pt-4 flex gap-3 group hover:border-t-electric/40 transition-colors duration-300">
                    <div className="w-6 h-6 rounded bg-white/[0.02] flex items-center justify-center shrink-0 border border-white/5 text-electric/70 group-hover:text-electric transition-colors">
                      <Icon size={12} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs text-light mb-1.5 group-hover:text-electric transition-colors">
                        {adv.title}
                      </h4>
                      <p className="text-[11px] text-silver/60 leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
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
