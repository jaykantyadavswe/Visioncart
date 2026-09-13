import Link from "next/link";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";
import Container from "../ui/Container";

const features = [
  {
    icon: <Truck size={22} />,
    title: "Free Shipping",
    subtitle: "On orders over ₹999",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Secure Payment",
    subtitle: "100% Protected Checkout",
  },
  {
    icon: <RotateCcw size={22} />,
    title: "Easy Returns",
    subtitle: "30-Day Return Policy",
  },
  {
    icon: <Headphones size={22} />,
    title: "24/7 Support",
    subtitle: "We're always here to help",
  },
];

export default function FinalCTA() {
  return (
    <section className="py-20">
      <Container>

        <div className="rounded-[32px] bg-slate-900 px-8 py-16 text-white">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-400">
              Why Choose VisionCart
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              Shop with Confidence
            </h2>

            <p className="mt-4 text-slate-300">
              Premium products, trusted brands, secure payments,
              and fast delivery—all in one place.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/5 p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {feature.subtitle}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-3.5 font-semibold transition hover:bg-orange-700"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white/10"
            >
              Browse Categories
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}