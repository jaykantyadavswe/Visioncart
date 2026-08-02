import Link from "next/link";
import { ChevronRight, Store } from "lucide-react";
import Container from "../ui/Container";

export default function ShopHero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-orange-50 via-white to-white py-14">
      <Container>

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">

          <Link
            href="/"
            className="transition hover:text-orange-600"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="font-medium text-slate-700">
            Shop
          </span>

        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          <Store size={16} />
          Shop
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Discover Amazing Products
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Browse thousands of carefully selected products across
          multiple categories. Find everything you need with
          powerful search, filters, and seamless shopping.
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-8">

          <div>
            <h3 className="text-3xl font-bold text-orange-600">
              15K+
            </h3>

            <p className="text-slate-500">
              Products
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-600">
              500+
            </h3>

            <p className="text-slate-500">
              Brands
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-600">
              4.9★
            </h3>

            <p className="text-slate-500">
              Customer Rating
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}