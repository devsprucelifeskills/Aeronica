"use client";

import { motion } from "framer-motion";

const clients = [
  "IOCL",
  "BASF",
  "JSW",
  "Asian Paints",
  "LTIMindtree",
  "Bharat Petroleum",
  "Central Railway",
  "Saguna Bagh",
  "SRV Media",
  "Infostorm",
  "Padeco",
  "Amazing Aerial",
];

export default function Clients() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            Trusted By Industry{" "}
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Partnering with Indias foremost organizations to deliver transformative
            drone and geospatial solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {clients.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="h-20 rounded-2xl bg-alt-section border border-light/50 card-shadow flex items-center justify-center px-4 group hover:border-electric/20 hover:bg-electric/[0.02] transition-all"
            >
              <span className="font-heading font-bold text-sm text-steel group-hover:text-electric transition-colors text-center leading-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
