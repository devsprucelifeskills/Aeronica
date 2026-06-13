"use client";

import { motion } from "framer-motion";
import {
  Drone,
  Helicopter,
  Cpu,
  ArrowRight,
  Gauge,
  Ruler,
  Weight,
} from "lucide-react";

const products = [
  {
    icon: Drone,
    title: "Samrudhhi-10L",
    subtitle: "DGCA Type Certified",
    description:
      "Small category, DGCA Type Certified quadcopter specifically crafted for agriculture spraying. Saves up to 95% water with ULV formulations. Indigenous design with carbon fibre body.",
    specs: [
      { icon: Gauge, label: "16 min Flight Time" },
      { icon: Ruler, label: "500 m Range" },
      { icon: Weight, label: "24.9 kg Take-off Weight" },
    ],
    features: [
      "Indigenously designed",
      "Compact & foldable",
      "Carbon fibre body",
      "Water & dust resistant",
    ],
  },
  {
    icon: Drone,
    title: "Samrudhhi-10LH",
    subtitle: "Heavy Lift Variant",
    description:
      "Heavy lift variant of the Samrudhhi series, engineered for larger payload capacity and extended mission profiles across agriculture and industrial applications.",
    specs: [
      { icon: Gauge, label: "Extended Flight Time" },
      { icon: Ruler, label: "Enhanced Range" },
      { icon: Weight, label: "Higher Payload Capacity" },
    ],
    features: [
      "Heavy lift capability",
      "Industrial grade",
      "Robust construction",
      "Versatile applications",
    ],
  },
  {
    icon: Helicopter,
    title: "Flycra 2.0",
    subtitle: "Advanced UAV Platform",
    description:
      "Next-generation UAV platform designed for versatility across survey, inspection, and monitoring missions with improved aerodynamics and flight characteristics.",
    specs: [
      { icon: Gauge, label: "Optimized Aerodynamics" },
      { icon: Ruler, label: "Extended Operational Range" },
      { icon: Weight, label: "Optimized Payload" },
    ],
    features: [
      "Advanced aerodynamics",
      "Multi-mission capable",
      "High precision",
      "Reliable performance",
    ],
  },
  {
    icon: Cpu,
    title: "Nitya FC",
    subtitle: "Flight Controller",
    description:
      "Indigenous flight controller engineered for precision, stability, and reliability. Powers Aeronica's drone ecosystem with advanced autopilot capabilities.",
    specs: [
      { icon: Gauge, label: "High Precision Control" },
      { icon: Ruler, label: "Advanced Autopilot" },
      { icon: Weight, label: "Compact Design" },
    ],
    features: [
      "Indigenous technology",
      "Precision engineering",
      "Stable flight",
      "Tamper-proof firmware",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-alt-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Drones, built with purpose. Flying with precision. Each product
            engineered for reliability, compliance, and Indian manufacturing excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 card-shadow card-hover border border-light/50"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0 group-hover:bg-electric/20 transition-colors">
                  <product.icon className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-electric uppercase tracking-wider">
                    {product.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-midnight mt-0.5">
                    {product.title}
                  </h3>
                </div>
              </div>

              <p className="text-steel text-sm leading-relaxed mb-5">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {product.specs.map((spec) => (
                  <span
                    key={spec.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-electric/5 text-electric text-xs font-medium"
                  >
                    <spec.icon size={12} />
                    {spec.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-steel text-xs flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-electric" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-light">
                <span className="inline-flex items-center gap-1.5 text-electric text-sm font-medium group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
