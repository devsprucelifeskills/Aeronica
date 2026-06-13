"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  Map,
  Drone,
  Monitor,
  Radio,
} from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Unified Surveillance System",
    subtitle: "USS",
    description:
      "Next-gen UAV security surveillance SaaS platform for oil & gas pipelines, industrial estates, and smart cities. Integrated with AI/ML cloud-based autonomous systems and precision detection.",
    href: "#",
  },
  {
    icon: Brain,
    title: "Aeroni.AI",
    subtitle: "Enterprise AI Platform",
    description:
      "Secure, unified enterprise-grade AI platform with deep learning and Intelligent Video Analytics (IVA). Real-time detection, anomaly classification, and actionable intelligence for drones.",
    href: "#",
  },
  {
    icon: Map,
    title: "GIS Services",
    subtitle: "Geospatial Intelligence",
    description:
      "Comprehensive GIS solutions powered by drone technology and AI analytics. High-resolution spatial data for infrastructure, land use planning, forestry, mining, and resource management.",
    href: "#",
  },
  {
    icon: Drone,
    title: "Drone-as-a-Service",
    subtitle: "DaaS",
    description:
      "End-to-end drone service model covering survey, inspection, mapping, and surveillance. Flexible deployment with trained operators and comprehensive data processing.",
    href: "#",
  },
  {
    icon: Monitor,
    title: "Aeroni.Cloud",
    subtitle: "Cloud Intelligence",
    description:
      "Deep analytics, training pipelines, historical comparison and unified dashboards for enterprise reporting. Video cloud storage with smart management tools.",
    href: "#",
  },
  {
    icon: Radio,
    title: "Onboard AI Engine",
    subtitle: "Edge Intelligence",
    description:
      "Optimized, power-efficient inference modules running IVA and detection models directly on UAVs for immediate situational awareness and real-time decision making.",
    href: "#",
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

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            Enterprise{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            From AI-powered surveillance to precision GIS mapping, Aeronica delivers
            end-to-end solutions that transform how industries operate.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 card-shadow card-hover border border-light/50"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors">
                <solution.icon className="w-6 h-6 text-electric" />
              </div>
              <span className="text-xs font-semibold text-electric uppercase tracking-wider">
                {solution.subtitle}
              </span>
              <h3 className="font-heading font-bold text-lg text-midnight mt-1 mb-3">
                {solution.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
