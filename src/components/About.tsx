"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Eye, Cpu, ShieldCheck, Lightbulb } from "lucide-react";

const aboutTabs = [
  {
    id: "mission",
    icon: Crosshair,
    title: "Our Mission",
    subtitle: "Empowering Operations",
    description: "To create advanced, industry-ready drone technologies that empower organizations with smarter operations, improved efficiency, and safe, scalable UAV ecosystems.",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Our Vision",
    subtitle: "Leading Global UAVs",
    description: "To be a globally recognized leader in UAV and automation solutions, driving innovation across agriculture, infrastructure, energy, and enterprise security.",
  },
  {
    id: "what-we-do",
    icon: Cpu,
    title: "What We Do",
    subtitle: "End-to-End Solutions",
    description: "End-to-end drone hardware, software, and services with in-house engineering, customization, assured performance, training, and continuous technical support.",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Quality & Compliance",
    subtitle: "Indigenous & Certified",
    description: "DGCA Type Certified drones built with indigenous engineering. Every product meets rigorous quality standards and regulatory compliance for safe, reliable operations.",
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation First",
    subtitle: "In-house R&D Engineering",
    description: "In-house R&D enables rapid prototyping, custom solutions, and strict quality control. Our team ensures tailored UAVs with smooth deployment and long-term trust.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(aboutTabs[0]);

  return (
    <section id="about" className="viewport-section bg-midnight relative overflow-hidden">
      {/* Visual Tech Lines */}
      <div className="absolute top-[30%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute bottom-[30%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute left-[38.2%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.618fr] gap-8 lg:gap-16 items-center h-full">
          
          {/* Left Column (38.2%): Static copy and brand status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-3">
              About Aeronica
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-light leading-[1.15] tracking-tight mb-4 text-balance">
              Engineering the <br />
              <span className="accent-text">Future of UAV</span> <br />
              Technology.
            </h2>
            <p className="text-xs sm:text-sm text-silver/70 leading-relaxed mb-6">
              Aeronica Advance Technologies is an indigenous Hardware-Software-IoT-based 
              aerial solutions provider. Founded in 2020 in Pune, India, we design and manufacture 
              high-performance drone systems that bridge the gap between complex engineering and field-level practicality.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/5 text-silver text-[10px] font-medium w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              Founded 2020 &bull; Pune, India
            </div>
          </motion.div>

          {/* Right Column (61.8%): Cardless Tab System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="grid md:grid-cols-[180px_1fr] gap-6 lg:gap-8 min-h-[280px]">
              
              {/* Tab Navigation Buttons (Cardless Vertical List) */}
              <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 gap-1 border-b md:border-b-0 md:border-r border-white/[0.04]">
                {aboutTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab.id === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-md text-left text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "text-electric bg-electric/5 border-l-2 border-electric"
                          : "text-silver hover:text-light hover:bg-white/[0.02] border-l-2 border-transparent"
                      }`}
                    >
                      <Icon size={14} className={isActive ? "text-electric" : "text-silver/60"} />
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Panel Content */}
              <div className="flex flex-col justify-center py-2 px-1 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-silver/40 uppercase tracking-widest block mb-1">
                        {activeTab.subtitle}
                      </span>
                      <h3 className="font-heading font-extrabold text-lg text-light">
                        {activeTab.title}
                      </h3>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-silver/80 leading-relaxed max-w-lg">
                      {activeTab.description}
                    </p>

                    {/* Subtle micro-elements detailing drone components */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.04] max-w-sm">
                      <div>
                        <div className="text-[10px] font-bold text-light uppercase tracking-wider">Indigenous Design</div>
                        <div className="text-[9px] text-silver/50">100% designed & made in India</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-light uppercase tracking-wider">Certified Safety</div>
                        <div className="text-[9px] text-silver/50">DGCA certified compliance</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
