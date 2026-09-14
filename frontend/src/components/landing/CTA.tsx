import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#f97316] px-8 py-12 text-white shadow-[0_30px_70px_rgba(249,115,22,0.22)] md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.28),transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),transparent_30%)]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-100 backdrop-blur-sm">
                <Sparkles size={14} className="text-orange-300" />
                Limited Offer
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Ready to upgrade your everyday? 
              </h2>

              <p className="mt-4 max-w-xl text-base text-slate-200 md:text-lg">
                Discover premium products, exclusive deals, and fast delivery—all in one place.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/discover/shop"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-50"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/discover/shop"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Browse Collection
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                  <Truck size={20} />
                </div>
                <h3 className="text-lg font-semibold">Free Shipping</h3>
                <p className="mt-2 text-sm text-slate-300">On orders above $75</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-semibold">Secure Pay</h3>
                <p className="mt-2 text-sm text-slate-300">Protected checkout</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}