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
    <footer className="bg-slate-950 text-slate-300">
      <Container>

        {/* Top */}
        <div className="grid gap-12 border-b border-slate-800 py-16 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-5 leading-7 text-slate-400">
              Discover premium products across fashion, electronics,
              beauty, lifestyle, and more. Designed for a seamless
              shopping experience.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="rounded-full border border-slate-700 p-2 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Shop
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <p className="text-slate-400">
                  123 Business Street,
                  <br />
                  New Delhi, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-orange-500"
                />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-orange-500"
                />
                <p>support@visioncart.com</p>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center justify-between gap-6 py-10 lg:flex-row">

          <div>
            <h3 className="text-xl font-semibold text-white">
              Subscribe to our Newsletter
            </h3>

            <p className="mt-2 text-slate-400">
              Get the latest products, offers, and exclusive deals.
            </p>
          </div>

          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-500"
            />

            <button className="rounded-r-xl bg-orange-600 px-6 font-medium text-white transition hover:bg-orange-700">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 text-sm md:flex-row">

          <p className="text-slate-500">
            © {new Date().getFullYear()} VisionCart. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-orange-500"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-orange-500"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-orange-500"
            >
              Cookies
            </Link>
          </div>

        </div>

      </Container>
    </footer>
  );
}