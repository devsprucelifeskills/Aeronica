"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  Route,
  Rocket,
  BarChart3,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    step: "01",
    title: "Consultation",
    description: "We begin by understanding your objectives, challenges and operational requirements.",
  },
  {
    icon: Route,
    step: "02",
    title: "Strategy",
    description: "Our team designs a tailored solution roadmap aligned with your goals.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deployment",
    description: "We deploy the solution with minimal disruption and maximum efficiency.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Analysis",
    description: "Continuous monitoring and data analysis ensure optimal performance.",
  },
  {
    icon: RefreshCw,
    step: "05",
    title: "Optimization",
    description: "Iterative improvements driven by real-world data and feedback.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            How <span className="gradient-text">We Work</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            A proven methodology that delivers results from concept to continuous optimization.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-neon to-electric/20 hidden md:block" />

          <div className="flex flex-col gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                <div className="hidden md:flex absolute left-4 top-0 w-8 h-8 rounded-full bg-white border-2 border-electric items-center justify-center -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-electric" />
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 card-shadow border border-light/50 card-hover">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-electric uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-midnight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-steel text-sm leading-relaxed ml-14">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
