"use client";

import { motion } from "framer-motion";

const clients = [
  "IOCL", "BASF", "JSW", "Asian Paints",
  "LTIMindtree", "Bharat Petroleum", "Central Railway", "Saguna Bagh",
  "SRV Media", "Infostorm", "Padeco", "Amazing Aerial",
];

const doubleClients = [...clients, ...clients];

export default function Clients() {
  return (
    <div className="py-8 bg-midnight border-y border-white/[0.03] overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 justify-between">
        
        {/* Ticker Title */}
        <div className="shrink-0 text-center md:text-left">
          <span className="text-[9px] font-bold text-silver/40 uppercase tracking-[0.2em] block">Trusted By</span>
          <span className="text-xs font-heading font-extrabold text-light">Industry Leaders</span>
        </div>

        {/* Ticker Marquee */}
        <div className="flex-1 w-full overflow-hidden relative mask-gradient">
          <div className="flex gap-4 w-full">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 shrink-0"
            >
              {doubleClients.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="h-10 px-5 rounded border border-white/5 bg-white/[0.01] flex items-center justify-center shrink-0 hover:border-electric/25 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <span className="font-heading font-bold text-xs text-silver/80 whitespace-nowrap">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
      `}</style>
    </div>
  );
}
