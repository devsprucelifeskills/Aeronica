"use client";

import { motion } from "framer-motion";
import { Target, Eye, Cpu, Crosshair, ShieldCheck, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Crosshair,
    title: "Our Mission",
    description:
      "To create advanced, industry-ready drone technologies that empower organizations with smarter operations, improved efficiency, and safe, scalable UAV ecosystems.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a globally recognized leader in UAV and automation solutions, driving innovation across agriculture, infrastructure, energy, and enterprise security.",
  },
  {
    icon: Cpu,
    title: "What We Do",
    description:
      "End-to-end drone hardware, software, and services with in-house engineering, customization, assured performance, training, and continuous technical support for every mission need.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    description:
      "DGCA Type Certified drones built with indigenous engineering. Every product meets rigorous quality standards and regulatory compliance for safe, reliable operations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "In-house R&D enables rapid prototyping, custom solutions, and strict quality control. Our team ensures tailored UAVs with smooth deployment and long-term trust.",
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

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-alt-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/5 border border-electric/10 text-electric text-xs font-medium mb-4">
            Founded 2020 &bull; Pune, India
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            Engineering the Future of{" "}
            <span className="gradient-text">UAV Technology</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Aeronica Advance Technologies is a technology startup specializing in
            expert UAV and automation solutions. As a Hardware-Software-IoT-based
            aerial solutions provider, we have rapidly grown across multiple
            business verticals since our founding.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 card-shadow card-hover border border-light/50"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors">
                <card.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="font-heading font-bold text-xl text-midnight mb-3">
                {card.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
