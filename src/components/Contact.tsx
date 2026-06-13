"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "101, Sunrise Apartments, Opp. Kamla Nehru Park, Pune, IN 411004",
  },
  {
    icon: MapPin,
    label: "Factory",
    value: "Gat No.32, Khed Shivapur, Haveli, Pune, IN 412205",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+91) 727 646 9160",
    href: "tel:+917276469160",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@aeronica.in",
    href: "mailto:info@aeronica.in",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-alt-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-6 text-balance">
            Let&apos;s Build the{" "}
            <span className="gradient-text">Future Together</span>
          </h2>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Ready to transform your operations with drone technology? Reach out
            and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="font-heading font-bold text-xl text-midnight mb-6">
              Contact Information
            </h3>

            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-steel uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-midnight text-sm font-medium hover:text-electric transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-midnight text-sm font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <div className="flex items-center gap-2 text-steel text-sm">
                <Clock size={14} />
                <span>Mon &ndash; Fri: 9:00 AM &ndash; 6:00 PM</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form className="bg-white rounded-2xl p-8 sm:p-10 card-shadow border border-light/50">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-graphite mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-silver/30 bg-white text-midnight text-sm placeholder:text-steel/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-graphite mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl border border-silver/30 bg-white text-midnight text-sm placeholder:text-steel/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/20 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-graphite mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-silver/30 bg-white text-midnight text-sm placeholder:text-steel/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-graphite mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-silver/30 bg-white text-midnight text-sm placeholder:text-steel/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/20 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-graphite mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-silver/30 bg-white text-midnight text-sm placeholder:text-steel/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-white font-semibold text-sm transition-all hover:bg-[#0089D9] card-shadow"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
