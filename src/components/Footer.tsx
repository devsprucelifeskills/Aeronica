import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { label: "Samrudhhi-10L", href: "#products" },
  { label: "Samrudhhi-10LH", href: "#products" },
  { label: "Flycra 2.0", href: "#products" },
  { label: "Nitya FC", href: "#products" },
  { label: "GIS Services", href: "#solutions" },
  { label: "Drone-as-a-Service", href: "#solutions" },
];

const socialLinks = [
  { icon: ExternalLink, href: "https://www.facebook.com/ImAeronica", label: "Facebook" },
  { icon: ExternalLink, href: "https://www.instagram.com/aeronica_at", label: "Instagram" },
  { icon: ExternalLink, href: "https://x.com/aeronicat", label: "X (Twitter)" },
  { icon: ExternalLink, href: "https://www.youtube.com/@aeronicaadvancedtechnologi5521", label: "YouTube" },
  { icon: ExternalLink, href: "https://in.linkedin.com/company/aeronica-advance-technologies", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="section-container py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/aeronica-logo.png"
                alt="Aeronica Advance Technologies"
                width={200}
                height={60}
                className="h-10 sm:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-silver/60 text-sm leading-relaxed mb-6 max-w-xs">
              Aeronica Advance Technologies Pvt. Ltd. is a technology startup
              specializing in expert UAV and automation solutions. Established in
              2020, we are a Hardware-Software-IoT-based aerial solutions provider.
            </p>
            <div className="flex items-center gap-2.5 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-electric/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-silver hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-silver/60 text-sm hover:text-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">
              Products &amp; Services
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-silver/60 text-sm hover:text-electric transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric mt-0.5 shrink-0" />
                <span className="text-silver/60 text-sm">
                  101, Sunrise Apartments, Opp. Kamla Nehru Park, Pune 411004
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric shrink-0" />
                <a
                  href="mailto:info@aeronica.in"
                  className="text-silver/60 text-sm hover:text-electric transition-colors"
                >
                  info@aeronica.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric shrink-0" />
                <a
                  href="tel:+917276469160"
                  className="text-silver/60 text-sm hover:text-electric transition-colors"
                >
                  (+91) 727 646 9160
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver/40 text-xs">
            &copy; {new Date().getFullYear()} Aeronica Advance Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-silver/40 text-xs hover:text-electric transition-colors">
              Privacy Policy
            </a>
            <span className="text-silver/20">|</span>
            <a href="#" className="text-silver/40 text-xs hover:text-electric transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
