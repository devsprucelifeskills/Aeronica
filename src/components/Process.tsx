"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Route, Rocket, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  { icon: MessageSquareText, step: "01", title: "Consultation", description: "Understanding your mission parameters, challenges, and enterprise requirements." },
  { icon: Route, step: "02", title: "Strategy & Plan", description: "Our aerospace engineers design a custom hardware & sensor integration blueprint." },
  { icon: Rocket, step: "03", title: "Deployment", description: "Onsite implementation, pilot training, and regulatory compliance clearance." },
  { icon: BarChart3, step: "04", title: "Analysis & Data", description: "UAV sensor data collection, GIS cloud processing, and AI engine inference." },
  { icon: RefreshCw, step: "05", title: "Continuous Loop", description: "System calibration and ongoing firmware upgrades based on field metrics." },
];

export default function Process() {
  return (
    <section id="process" className="viewport-section bg-midnight relative overflow-hidden">
      {/* Background visual indicators */}
      <div className="absolute top-[20%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-2 block">
            Methodology
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-light mb-2">
            The Drone Integration <span className="text-electric">Lifecycle</span>.
          </h2>
          <p className="text-xs text-silver/60 leading-relaxed max-w-md">
            Our systematic process ensures safe, certified, and operationally viable UAV 
            deployments across railways, smart cities, and agricultural fields.
          </p>
        </motion.div>

        {/* Timeline Flow (Horizontal steps) */}
        <div className="relative">
          {/* Horizontal connecting wire line (visible on desktop) */}
          <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {steps.map((s, idx) => {
              const StepIcon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center md:items-start group"
                >
                  {/* Icon Node */}
                  <div className="relative mb-5 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center z-10 text-silver group-hover:text-electric group-hover:border-electric/30 transition-all duration-300">
                      <StepIcon size={16} />
                    </div>
                    {/* Pulsing indicator node */}
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-midnight border border-white/10 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-electric/60" />
                    </div>
                  </div>

                  {/* Step Info */}
                  <div className="text-center md:text-left border-t border-white/[0.04] pt-3 w-full group-hover:border-t-electric/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono text-silver/40">STEP {s.step}</span>
                      <span className="text-[8px] font-mono text-electric opacity-0 group-hover:opacity-100 transition-opacity">ACTIVE</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xs text-light mb-1.5 uppercase tracking-wider">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-silver/60 leading-relaxed max-w-[180px] mx-auto md:mx-0">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
