import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin  } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";
import Logo from "../ui/Logo";

const shopLinks = [
  { label: "All Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "New Arrivals", href: "/products/new" },
  { label: "Best Sellers", href: "/products/best-sellers" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Returns & Refunds", href: "/returns" },
];

const socialLinks = [
  { icon: <FaFacebook size={18} />, href: "#" },
  { icon: <FaInstagram size={18} />, href: "#" },
  { icon: <FaTwitter size={18} />, href: "#" },
  { icon: <FaLinkedin size={18} />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <Container>
        <div className="border-b border-white/10 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr]">
            <div>
              <Logo />

              <p className="mt-5 max-w-xs leading-7 text-slate-400">
                Discover premium products across fashion, electronics, beauty, lifestyle, and more.
              </p>

              <div className="mt-6 flex gap-3">
                {socialLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Shop
              </h3>

              <ul className="space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 transition hover:text-orange-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Company
              </h3>

              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 transition hover:text-orange-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Contact
              </h3>

              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-orange-400" />
                  <p className="text-slate-400">
                    123 Business Street,
                    <br />
                    New Delhi, India
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-400" />
                  <p className="text-slate-300">+91 98765 43210</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-400" />
                  <p className="text-slate-300">support@visioncart.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 py-10 lg:flex-row">
          <div>
            <h3 className="text-xl font-semibold text-white">Subscribe to our Newsletter</h3>
            <p className="mt-2 text-slate-400">Get the latest products, offers, and exclusive deals.</p>
          </div>

          <div className="flex w-full max-w-lg overflow-hidden rounded-full border border-slate-700 bg-slate-900">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-5 py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
            />

            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 text-sm font-medium text-white transition hover:brightness-110">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm md:flex-row">
          <p className="text-slate-500">© {new Date().getFullYear()} VisionCart. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-400 transition hover:text-orange-400">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-400 transition hover:text-orange-400">
              Terms
            </Link>
            <Link href="/cookies" className="text-slate-400 transition hover:text-orange-400">
              Cookies
            </Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}