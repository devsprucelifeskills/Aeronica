"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Map, Drone, Monitor, Radio, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Unified Surveillance System",
    tag: "USS",
    description: "Next-gen UAV security surveillance for oil & gas pipelines, industrial estates, and smart cities with automated AI/ML detection.",
  },
  {
    icon: Brain,
    title: "Aeroni.AI",
    tag: "Enterprise AI",
    description: "Secure, unified enterprise-grade AI platform with deep learning and Intelligent Video Analytics (IVA) for real-time aerial intelligence.",
  },
  {
    icon: Map,
    title: "GIS Services",
    tag: "Geospatial",
    description: "Comprehensive GIS mapping powered by drone technology and AI analytics for forestry, mining, and resource management.",
  },
  {
    icon: Drone,
    title: "Drone-as-a-Service",
    tag: "DaaS",
    description: "End-to-end flight services covering survey, inspection, mapping, and surveillance with certified operators and data processing.",
  },
  {
    icon: Monitor,
    title: "Aeroni.Cloud",
    tag: "Cloud Platform",
    description: "Deep analytics, automated training pipelines, historical comparison, and unified dashboards for smart enterprise reporting.",
  },
  {
    icon: Radio,
    title: "Onboard AI Engine",
    tag: "Edge Intelligence",
    description: "Optimized, power-efficient hardware inference modules running detection models directly on the UAV for instant actions.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="viewport-section bg-midnight relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,163,255,0.03),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center h-full">
          
          {/* Left Column: Branding text & prompt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center pr-4 border-r border-white/[0.04] h-full"
          >
            <span className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-3">
              Solutions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-light leading-[1.15] tracking-tight mb-4">
              Enterprise <br />
              <span className="accent-text">Intelligence</span> <br />
              Verticals.
            </h2>
            <p className="text-xs sm:text-sm text-silver/60 leading-relaxed mb-6">
              From automated security surveillance to precision GIS mapping, 
              we deliver end-to-end hardware-software integrations that transform 
              field operations into actionable intelligence.
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-silver/40 font-semibold mt-auto pb-4">
              <span>Scroll horizontally</span>
              <ArrowRight size={12} className="animate-bounce-horizontal" style={{ animation: 'bounce-h 1.5s infinite' }} />
            </div>

            <style jsx global>{`
              @keyframes bounce-h {
                0%, 100% { transform: translateX(0); }
                50% { transform: translateX(4px); }
              }
            `}</style>
          </motion.div>

          {/* Right Column: Horizontal scroll container of cardless solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex items-center w-full h-full overflow-hidden"
          >
            <div className="flex gap-0 overflow-x-auto scrollbar-hide w-full py-4 snap-x snap-mandatory">
              {solutions.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="min-w-[280px] sm:min-w-[320px] max-w-[320px] px-8 flex flex-col justify-center snap-start border-r border-white/[0.04] group hover:bg-white/[0.01] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-electric/5 flex items-center justify-center mb-5 border border-electric/10 group-hover:bg-electric/10 group-hover:border-electric/25 transition-all duration-300">
                      <Icon className="w-4 h-4 text-electric" />
                    </div>
                    
                    <span className="text-[9px] font-bold text-silver/40 uppercase tracking-widest block mb-1">
                      {s.tag}
                    </span>
                    
                    <h3 className="font-heading font-extrabold text-base text-light mb-3 group-hover:text-electric transition-colors duration-300">
                      {s.title}
                    </h3>
                    
                    <p className="text-xs text-silver/70 leading-relaxed">
                      {s.description}
                    </p>
                    
                    {/* Visual spacer to align height nicely */}
                    <div className="h-6" />

                    <div className="text-[10px] font-mono text-silver/30 border-t border-white/[0.04] pt-3 flex items-center justify-between">
                      <span>MODULE_{idx + 1}</span>
                      <span className="group-hover:text-electric transition-colors">&bull; ONLINE</span>
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
