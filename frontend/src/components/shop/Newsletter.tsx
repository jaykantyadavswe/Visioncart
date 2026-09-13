import { Mail, ArrowRight } from "lucide-react";
import Container from "../ui/Container";

export default function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-14 text-white shadow-xl md:px-16">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left */}
            <div className="max-w-xl">

              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                <Mail size={16} />
                Join Our Newsletter
              </span>

              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Get Exclusive Deals & Offers
              </h2>

              <p className="mt-4 text-orange-100">
                Subscribe to receive the latest products, exclusive discounts,
                and special offers directly in your inbox.
              </p>

            </div>

            {/* Right */}
            <form className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl px-5 py-4 text-slate-900 outline-none"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold transition hover:bg-black"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>
      </Container>
    </section>
  );
}