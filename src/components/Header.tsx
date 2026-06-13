"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home", num: "01" },
  { label: "About", href: "#about", num: "02" },
  { label: "Solutions", href: "#solutions", num: "03" },
  { label: "Products", href: "#products", num: "04" },
  { label: "Why us", href: "#why", num: "05" },
  { label: "Process", href: "#process", num: "06" },
  { label: "Contact", href: "#contact", num: "07" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY + 150) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1030] transition-all duration-300 ${
          scrolled
            ? "bg-midnight/70 backdrop-blur-md border-b border-white/[0.04] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aeronica-logo.png"
                alt="Aeronica Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-bold text-base tracking-tight text-light">
              Aeronica
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-md transition-all duration-200 group ${
                  activeSection === link.href
                    ? "text-electric bg-electric/5"
                    : "text-silver hover:text-light hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] font-bold text-steel mr-1">
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 btn-primary"
            >
              Consult Now
              <ChevronRight size={13} />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            className="lg:hidden w-8 h-8 rounded-md flex items-center justify-center text-light hover:bg-white/[0.04] transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[1020] lg:hidden"
          >
            <div className="absolute inset-0 bg-midnight/95 backdrop-blur-xl" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-8 h-full flex flex-col">
              <nav className="flex flex-col gap-1.5 flex-1 justify-center">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="group flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-white/[0.03] transition-all"
                  >
                    <span className="text-[10px] font-bold text-steel w-5">{link.num}</span>
                    <span className="font-heading font-bold text-lg text-light group-hover:text-electric transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight size={14} className="ml-auto text-steel/40 group-hover:text-electric transition-colors" />
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full btn-primary py-3 flex items-center justify-center gap-1.5 text-sm"
              >
                Consult Now
                <ChevronRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
