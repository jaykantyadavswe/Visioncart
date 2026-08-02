import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-12 text-center text-white shadow-xl">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Start Shopping?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-orange-100">
            Discover premium products, exclusive deals, and fast delivery—all in one place.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/collections"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Browse Collection
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}