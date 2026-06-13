"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-midnight">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-[#0D2440] to-midnight" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMEEzRkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="section-container relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/20 bg-electric/5 text-electric text-xs sm:text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              DGCA Type Certified &bull; Made in India &bull; AI-Powered
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6 text-balance">
              Drones, Built With{" "}
              <span className="gradient-text">Purpose.</span>
            </h1>

            <p className="text-lg sm:text-xl text-silver mb-4 max-w-xl font-body">
              Simple. Sophisticated. Elegant. Sustainable.
            </p>

            <p className="text-sm sm:text-base text-silver/70 mb-8 max-w-lg">
              Aeronica delivers integrated drone solutions&mdash;robust hardware,
              smart software, and reliable services&mdash;tailored to your needs.
              From precision agriculture to enterprise surveillance, we help
              organizations confidently start and scale drone programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-white font-semibold text-sm transition-all hover:bg-[#0089D9] card-shadow"
              >
                Explore Products
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-electric/40 text-electric font-semibold text-sm transition-all hover:bg-electric/10"
              >
                Get in Touch
                <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric/10 to-neon/10 border border-electric/20" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-electric/5 to-neon/5 border border-electric/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-electric to-neon flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-white font-heading font-bold text-xl mb-2">
                    Samrudhhi-10L
                  </h3>
                  <p className="text-silver/60 text-sm">
                    DGCA Type Certified &bull; Agriculture Spraying Drone
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="text-white font-heading font-bold text-lg">16 min</div>
                      <div className="text-silver/50 text-xs">Flight Time</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <div className="text-white font-heading font-bold text-lg">500 m</div>
                      <div className="text-silver/50 text-xs">Range</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <div className="text-white font-heading font-bold text-lg">24.9 kg</div>
                      <div className="text-silver/50 text-xs">Take-off Weight</div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                    <span className="text-neon text-xs font-medium">System Online</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full border border-electric/20 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full border border-neon/20 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
