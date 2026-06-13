"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Crosshair,
  ShieldCheck,
  Leaf,
  TrendingUp,
  Wrench,
} from "lucide-react";

const values = [
  {
    icon: Wrench,
    title: "In-House Engineering",
    description: "Rapid prototyping, custom solutions, and strict quality control through indigenous design and manufacturing.",
  },
  {
    icon: Crosshair,
    title: "Precision & Accuracy",
    description: "RTK/PPK-enabled UAVs delivering sub-centimeter positional precision for mission-critical data.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    description: "DGCA Type Certified drones meeting rigorous safety and regulatory standards for reliable operations.",
  },
  {
    icon: Leaf,
    title: "Sustainable Innovation",
    description: "Eco-conscious solutions including 95% water-saving ULV spraying technology for sustainable agriculture.",
  },
  {
    icon: TrendingUp,
    title: "End-to-End Support",
    description: "From consultation to deployment, training, and maintenance — comprehensive support for every mission.",
  },
  {
    icon: Lightbulb,
    title: "Made in India",
    description: "Proudly indigenously designed and manufactured, supporting Atmanirbhar Bharat with world-class quality.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function WhyAeronica() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-alt-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            Why Choose{" "}
            <span className="gradient-text">Aeronica</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Reliable, innovative, and fully compliant drone solutions backed by
            in-house engineering, quality manufacturing, and dedicated customer support.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 card-shadow card-hover border border-light/50"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors">
                <value.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="font-heading font-bold text-lg text-midnight mb-3">
                {value.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
