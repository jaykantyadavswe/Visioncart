import { Compass, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";

export default function DiscoverHero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            <Compass size={16} />
            Discover Collections
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-6xl">
            Find Products You'll
            <span className="text-orange-600"> Love</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Explore trending products, curated collections,
            personalized recommendations, and the latest arrivals
            all in one place.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-4 font-semibold text-white transition hover:bg-orange-700"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
            >
              Browse Categories
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}