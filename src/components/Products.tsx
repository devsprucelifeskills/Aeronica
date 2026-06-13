"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Drone, Helicopter, Cpu, ArrowRight, Gauge, Ruler, Weight, Compass, Eye, ShieldAlert } from "lucide-react";

const productsList = [
  {
    id: "samrudhhi-10l",
    icon: Drone,
    title: "Samrudhhi-10L",
    tag: "DGCA Type Certified",
    description: "Small category, DGCA Type Certified quadcopter for precision agriculture spraying. Engineered to deliver uniform canopy penetration while saving up to 95% water via Ultra Low Volume (ULV) nozzle systems.",
    highlight: "Saves 95% Water",
    specs: [
      { icon: Gauge, label: "Flight Time", value: "16 min" },
      { icon: Ruler, label: "Control Range", value: "500 m" },
      { icon: Weight, label: "Take-off Mass", value: "24.9 kg" },
    ],
    technicalMetrics: [
      { name: "Spraying Capacity", score: 90 },
      { name: "Wind Resistance", score: 75 },
      { name: "Safety Redundancy", score: 95 }
    ]
  },
  {
    id: "samrudhhi-10lh",
    icon: Drone,
    title: "Samrudhhi-10LH",
    tag: "Heavy Lift Category",
    description: "Heavy lift variant engineered for larger payload capabilities and extended mission profiles. Ideal for industrial spraying, seed bombing, and heavier payload carrying missions.",
    highlight: "Double Payload Capacity",
    specs: [
      { icon: Gauge, label: "Flight Time", value: "24 min" },
      { icon: Ruler, label: "Control Range", value: "1000 m" },
      { icon: Weight, label: "Max Payload", value: "16 kg" },
    ],
    technicalMetrics: [
      { name: "Payload Efficiency", score: 95 },
      { name: "Structural Durability", score: 90 },
      { name: "Hover Stability", score: 85 }
    ]
  },
  {
    id: "flycra-2.0",
    icon: Helicopter,
    title: "Flycra 2.0",
    tag: "Advanced Mapping UAV",
    description: "Next-gen multi-rotor UAV designed specifically for high-accuracy surveying, corridor mapping, and inspections. Optimized aerodynamics offer maximum range with customizable payloads.",
    highlight: "Sub-Centimeter PPK",
    specs: [
      { icon: Gauge, label: "Survey Speed", value: "12 m/s" },
      { icon: Ruler, label: "Coverage / Flight", value: "2.5 sq km" },
      { icon: Weight, label: "Payload Flexibility", value: "2.5 kg" },
    ],
    technicalMetrics: [
      { name: "Mapping Precision", score: 98 },
      { name: "Flight Range", score: 92 },
      { name: "Data Accuracy", score: 96 }
    ]
  },
  {
    id: "nitya-fc",
    icon: Cpu,
    title: "Nitya FC",
    tag: "Autopilot Flight Controller",
    description: "Aeronica's proprietary, indigenously developed flight controller. Engineered for extreme flight stability, multi-sensor redundancy, and fail-safe automation across critical sectors.",
    highlight: "100% Indigenous IP",
    specs: [
      { icon: Gauge, label: "Processor", value: "32-Bit Dual Core" },
      { icon: Ruler, label: "IMU Sensors", value: "Triple Redundant" },
      { icon: Weight, label: "Weight", value: "65 grams" },
    ],
    technicalMetrics: [
      { name: "Automation Precision", score: 99 },
      { name: "Fault Tolerance", score: 98 },
      { name: "Update Frequency", score: 95 }
    ]
  },
];

export default function Products() {
  const [activeProd, setActiveProd] = useState(productsList[0]);

  return (
    <section id="products" className="viewport-section bg-midnight relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute top-[20%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute right-[38.2%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.618fr_1fr] gap-8 lg:gap-14 items-center h-full">
          
          {/* Left Column (61.8% Width): Interactive Telemetry Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center h-full border-r border-white/[0.04] pr-4 lg:pr-10"
          >
            <div className="mb-4">
              <span className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-1 block">
                Telemetry Dashboard
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-electric/5 border border-electric/15 text-[10px] font-semibold text-electric uppercase tracking-wider">
                <Compass size={11} className="animate-spin" style={{ animationDuration: '8s' }} />
                {activeProd.tag}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProd.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-light tracking-tight mb-2">
                    {activeProd.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-silver/70 leading-relaxed max-w-lg">
                    {activeProd.description}
                  </p>
                </div>

                {/* Specs Block (Telemetry stats) */}
                <div className="grid grid-cols-3 gap-4 border-y border-white/[0.04] py-4">
                  {activeProd.specs.map((spec, i) => {
                    const SpecIcon = spec.icon;
                    return (
                      <div key={i} className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-silver/40 text-[9px] uppercase tracking-wider font-mono">
                          <SpecIcon size={12} className="text-electric" />
                          <span>{spec.label}</span>
                        </div>
                        <div className="text-light font-heading font-bold text-sm sm:text-base">
                          {spec.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Performance Metrics Bars */}
                <div className="space-y-3">
                  <span className="text-[9px] font-bold text-silver/40 uppercase tracking-widest block font-mono">
                    System Metrics Status:
                  </span>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {activeProd.technicalMetrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-mono text-silver/70">
                          <span>{metric.name}</span>
                          <span className="text-electric font-semibold">{metric.score}%</span>
                        </div>
                        <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.score}%` }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="h-full bg-gradient-to-r from-electric to-neon rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-silver/40 font-mono">
                  <span className="flex items-center gap-1.5"><Eye size={12} className="text-neon" /> Optical Telemetry Ready</span>
                  <span className="flex items-center gap-1.5"><ShieldAlert size={12} className="text-emerald-400" /> Fail-Safe Active</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column (38.2% Width): Product Switcher list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="space-y-2 max-w-sm">
              <span className="text-[10px] font-bold text-silver/40 uppercase tracking-[0.2em] mb-4 block">
                Select Model
              </span>
              
              {productsList.map((p) => {
                const ItemIcon = p.icon;
                const isSelected = activeProd.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveProd(p)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-300 border-l-2 ${
                      isSelected
                        ? "bg-white/[0.02] border-electric text-light"
                        : "bg-transparent border-transparent text-silver hover:bg-white/[0.01] hover:text-light"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded bg-white/[0.02] flex items-center justify-center border ${
                        isSelected ? "border-electric/30" : "border-white/5"
                      }`}>
                        <ItemIcon size={14} className={isSelected ? "text-electric" : "text-silver"} />
                      </div>
                      <div>
                        <div className="font-heading font-extrabold text-xs uppercase tracking-wider">{p.title}</div>
                        <div className="text-[9px] text-silver/40">{p.highlight}</div>
                      </div>
                    </div>
                    
                    <ArrowRight size={13} className={`transition-transform duration-300 ${
                      isSelected ? "translate-x-1 text-electric" : "opacity-0"
                    }`} />
                  </button>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
