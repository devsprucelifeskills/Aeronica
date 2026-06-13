"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="section-container flex items-center justify-between h-16 sm:h-20">
        <a href="#home" className="flex items-center">
          <Image
            src="/aeronica-logo.png"
            alt="Aeronica Advance Technologies"
            width={200}
            height={60}
            className="h-10 sm:h-14 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite hover:text-electric transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-electric text-white text-sm font-semibold transition-all hover:bg-[#0089D9] card-shadow"
          >
            Get in Touch
          </a>
        </nav>

        <button
          className="lg:hidden p-2 rounded-lg text-midnight hover:bg-light transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-light overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-graphite text-sm font-medium py-2 hover:text-electric transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-electric text-white text-sm font-semibold transition-all hover:bg-[#0089D9] mt-2"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
