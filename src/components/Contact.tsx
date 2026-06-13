"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, Check, ArrowUp, ExternalLink } from "lucide-react";
import Image from "next/image";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const contactInfo = [
  { icon: MapPin, label: "Head Office", value: "101, Sunrise Apartments, Opp. Kamla Nehru Park, Pune 411004" },
  { icon: MapPin, label: "Factory", value: "Gat No.32, Khed Shivapur, Haveli, Pune 412205" },
  { icon: Phone, label: "Phone", value: "(+91) 727 646 9160", href: "tel:+917276469160" },
  { icon: Mail, label: "Email", value: "info@aeronica.in", href: "mailto:info@aeronica.in" },
];

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/ImAeronica" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/aeronica_at" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://in.linkedin.com/company/aeronica-advance-technologies" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@aeronicaadvancedtechnologi5521" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
];

const productLinks = [
  { label: "Samrudhhi-10L", href: "#products" },
  { label: "Samrudhhi-10LH", href: "#products" },
  { label: "Flycra 2.0", href: "#products" },
  { label: "Nitya FC", href: "#products" },
  { label: "Drone-as-a-Service", href: "#solutions" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="relative bg-midnight overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,163,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,229,255,0.03),transparent_50%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

          {/* Hero-style CTA heading — full width, visually dominant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric/5 border border-electric/10 text-electric text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              Ready to elevate your operations?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] tracking-tight mb-5">
              Transform Your Field Operations
              <br />
              <span className="bg-gradient-to-r from-electric via-neon to-electric bg-clip-text text-transparent">
                With Intelligent Drones.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-silver/60 max-w-xl mx-auto leading-relaxed">
              Tell us about your mission requirements and our aerospace engineers
              will design a tailored drone integration roadmap — within 24 hours.
            </p>
          </motion.div>

          {/* Two-column: Contact info + Form */}
          <div className="grid lg:grid-cols-[1fr_1.618fr] gap-12 lg:gap-20 items-start">

            {/* Left Column: Contact channels */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="text-[10px] font-bold text-silver/40 uppercase tracking-[0.2em] mb-6">
                Direct Channels
              </h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map((item, idx) => {
                  const ContactIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 group">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/[0.06] text-electric group-hover:bg-electric/10 group-hover:border-electric/20 transition-all duration-300">
                        <ContactIcon size={14} />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-[9px] font-bold text-silver/40 uppercase tracking-widest mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-light text-sm font-medium hover:text-electric transition-colors duration-200">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-light/90 text-sm font-medium leading-snug">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-silver/40 text-xs border-t border-white/[0.04] pt-5">
                <Clock size={13} className="text-electric/70" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM IST</span>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative border-b border-white/10 focus-within:border-electric transition-colors duration-300 pb-3">
                    <label htmlFor="name" className="block text-[9px] font-bold text-silver/40 uppercase tracking-widest mb-2 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-none outline-none text-light text-sm placeholder:text-silver/25 p-0"
                    />
                  </div>

                  <div className="relative border-b border-white/10 focus-within:border-electric transition-colors duration-300 pb-3">
                    <label htmlFor="company" className="block text-[9px] font-bold text-silver/40 uppercase tracking-widest mb-2 font-mono">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Company name"
                      className="w-full bg-transparent border-none outline-none text-light text-sm placeholder:text-silver/25 p-0"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative border-b border-white/10 focus-within:border-electric transition-colors duration-300 pb-3">
                    <label htmlFor="email" className="block text-[9px] font-bold text-silver/40 uppercase tracking-widest mb-2 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-transparent border-none outline-none text-light text-sm placeholder:text-silver/25 p-0"
                    />
                  </div>

                  <div className="relative border-b border-white/10 focus-within:border-electric transition-colors duration-300 pb-3">
                    <label htmlFor="phone" className="block text-[9px] font-bold text-silver/40 uppercase tracking-widest mb-2 font-mono">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 00000 00000"
                      className="w-full bg-transparent border-none outline-none text-light text-sm placeholder:text-silver/25 p-0"
                    />
                  </div>
                </div>

                <div className="relative border-b border-white/10 focus-within:border-electric transition-colors duration-300 pb-3">
                  <label htmlFor="message" className="block text-[9px] font-bold text-silver/40 uppercase tracking-widest mb-2 font-mono">
                    Project Brief *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    placeholder="Describe your drone requirements, use case, and operational scale..."
                    className="w-full bg-transparent border-none outline-none text-light text-sm placeholder:text-silver/25 p-0 resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-silver/40">
                    <Clock size={12} className="text-electric/60" />
                    <span>Avg response time: 12 hours</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-electric text-midnight font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 hover:bg-neon hover:shadow-[0_0_30px_rgba(0,163,255,0.3)] active:scale-[0.97]"
                  >
                    {submitted ? (
                      <>
                        <Check size={14} />
                        Sent Successfully
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Transmit Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative bg-midnight-surface border-t border-white/[0.04] overflow-hidden" style={{ background: '#050e1c' }}>
        {/* Glowing accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10">
                  <Image src="/aeronica-logo.png" alt="Aeronica" fill className="object-contain" />
                </div>
                <span className="font-heading font-bold text-base text-light tracking-tight">Aeronica</span>
              </div>
              <p className="text-silver/40 text-xs leading-relaxed mb-5 max-w-xs">
                A technology startup specializing in expert UAV and automation solutions. 
                Established in 2020, we are a Hardware-Software-IoT-based aerial solutions provider.
              </p>
              <div className="flex items-center gap-2">
                {socials.map((s, i) => {
                  const SocialIcon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] text-silver/50 flex items-center justify-center hover:text-electric hover:border-electric/25 hover:bg-electric/5 transition-all duration-300"
                    >
                      <SocialIcon width={14} height={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-[10px] text-silver/50 uppercase tracking-[0.15em] mb-5">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-silver/40 text-xs hover:text-electric transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-silver/20 group-hover:bg-electric transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products & Services */}
            <div>
              <h4 className="font-heading font-bold text-[10px] text-silver/50 uppercase tracking-[0.15em] mb-5">
                Products & Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-silver/40 text-xs hover:text-electric transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-silver/20 group-hover:bg-electric transition-colors" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Summary */}
            <div>
              <h4 className="font-heading font-bold text-[10px] text-silver/50 uppercase tracking-[0.15em] mb-5">
                Get In Touch
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-electric mt-0.5 shrink-0" />
                  <span className="text-silver/40 text-xs leading-snug">Pune, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-electric shrink-0" />
                  <a href="mailto:info@aeronica.in" className="text-silver/40 text-xs hover:text-electric transition-colors">info@aeronica.in</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-electric shrink-0" />
                  <a href="tel:+917276469160" className="text-silver/40 text-xs hover:text-electric transition-colors">(+91) 727 646 9160</a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-electric shrink-0" />
                  <a href="https://aeronica.in" target="_blank" rel="noopener noreferrer" className="text-silver/40 text-xs hover:text-electric transition-colors">aeronica.in</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-silver/25 text-[10px] font-mono">
              &copy; {new Date().getFullYear()} Aeronica Advance Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-silver/25 text-[10px] hover:text-electric transition-colors">Privacy Policy</a>
              <span className="text-silver/10">|</span>
              <a href="#" className="text-silver/25 text-[10px] hover:text-electric transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <a
          href="#home"
          className="fixed bottom-6 right-6 z-50 w-9 h-9 rounded-lg bg-white/[0.05] backdrop-blur-sm border border-white/10 flex items-center justify-center text-silver/60 hover:bg-electric hover:text-midnight hover:border-electric transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={14} />
        </a>
      </footer>
    </>
  );
}
