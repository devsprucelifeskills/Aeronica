"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Activity, Cpu, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="viewport-section bg-midnight relative overflow-hidden pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Background Gradients and Subtle High-Tech Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,163,255,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,229,255,0.04),transparent_50%)]" />
      
      {/* Horizontal & Vertical Tech Grid Lines (Golden Ratio Spacing) */}
      <div className="absolute top-[38.2%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute top-[61.8%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute left-[38.2%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />
      <div className="absolute left-[61.8%] top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.618fr_1fr] gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Column (61.8% Width): Text Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-silver text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 w-fit hover:border-electric/20 transition-colors duration-300">
              <span className="relative flex w-1.5 h-1.5">
                <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-electric opacity-75" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-electric" />
              </span>
              DGCA Certified &bull; Made in India &bull; AI-Powered
            </div>

            {/* Typography Heading: Clean and moderate sizing, no wrap issues */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-light tracking-tight mb-4 text-balance">
              Drones. <span className="text-electric">Built With Purpose</span>.
            </h1>
            
            <p className="text-sm sm:text-base text-silver/80 max-w-lg mb-2 font-medium leading-relaxed">
              Simple. Sophisticated. Elegant. Sustainable.
            </p>
            
            <p className="text-xs sm:text-sm text-silver/60 max-w-md mb-8 leading-relaxed">
              Aeronica delivers integrated enterprise drone solutions &mdash; robust hardware, 
              intelligent software, and reliable GIS & inspection services tailored to your mission requirements.
            </p>

            {/* Buttons: Small UI elements, no text wrapping */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#products" className="btn-primary">
                Explore Products
                <ArrowRight size={13} />
              </a>
              <a href="#solutions" className="btn-secondary">
                View Solutions
                <ChevronRight size={13} />
              </a>
            </div>

            {/* Small Credentials Strip */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.04] max-w-md">
              <div className="flex gap-2">
                <Activity size={14} className="text-electric animate-pulse" />
                <Cpu size={14} className="text-neon" />
                <ShieldCheck size={14} className="text-emerald-400" />
              </div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-silver/40">
                Trusted by <span className="text-light">50+</span> Enterprise Clients Across India
              </p>
            </div>
          </motion.div>

          {/* Right Column (38.2% Width): High-Tech Interactive Visual (Telemetry Outline) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center h-full relative"
          >
            <div className="w-full max-w-sm aspect-[1/1] relative flex flex-col justify-between p-4 border border-white/[0.04] rounded-xl bg-white/[0.01]">
              
              {/* Corner tech indicators */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />

              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-silver/40 border-b border-white/[0.04] pb-2 font-mono">
                <span>SYSTEM_STATUS: OK</span>
                <span className="text-electric">SAMRUDHHI-10L</span>
              </div>

              {/* Drone Animated SVG Outline */}
              <div className="flex-1 flex items-center justify-center py-3 relative">
                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/[0.04] to-transparent animate-[pulse_4s_infinite]" />
                
                <svg
                  viewBox="0 0 200 200"
                  className="w-40 h-40 text-electric/70 drop-shadow-[0_0_15px_rgba(0,163,255,0.15)]"
                >
                  {/* Central Body Ring */}
                  <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="animate-[spin_20s_linear_infinite]" />
                  <circle cx="100" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="2" fill="currentColor" />

                  {/* Arms */}
                  <line x1="100" y1="100" x2="55" y2="55" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="145" y2="55" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="55" y2="145" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="145" y2="145" stroke="currentColor" strokeWidth="1.5" />

                  {/* Motor Mounts */}
                  <circle cx="55" cy="55" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="145" cy="55" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="55" cy="145" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="145" cy="145" r="6" fill="none" stroke="currentColor" strokeWidth="1" />

                  {/* Propellers (Rotating via Framer Motion / CSS) */}
                  <g className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "55px 55px" }}>
                    <line x1="35" y1="55" x2="75" y2="55" stroke="currentColor" strokeWidth="0.75" />
                  </g>
                  <g className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "145px 55px" }}>
                    <line x1="125" y1="55" x2="165" y2="55" stroke="currentColor" strokeWidth="0.75" />
                  </g>
                  <g className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "55px 145px" }}>
                    <line x1="35" y1="145" x2="75" y2="145" stroke="currentColor" strokeWidth="0.75" />
                  </g>
                  <g className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "145px 145px" }}>
                    <line x1="125" y1="145" x2="165" y2="145" stroke="currentColor" strokeWidth="0.75" />
                  </g>

                  {/* Telemetry Scope Lines */}
                  <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
                </svg>
              </div>

              {/* Bottom Telemetry Spec list */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.04] text-center font-mono">
                <div>
                  <div className="text-light text-xs font-bold">16 MIN</div>
                  <div className="text-[7px] text-silver/40 uppercase tracking-wider">Flight Time</div>
                </div>
                <div className="border-x border-white/5">
                  <div className="text-light text-xs font-bold">500 M</div>
                  <div className="text-[7px] text-silver/40 uppercase tracking-wider">Range</div>
                </div>
                <div>
                  <div className="text-light text-xs font-bold">24.9 KG</div>
                  <div className="text-[7px] text-silver/40 uppercase tracking-wider">Takeoff Weight</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
