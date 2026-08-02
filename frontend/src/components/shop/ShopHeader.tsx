import Link from "next/link";
import Container from "../ui/Container";
import { ChevronRight } from "lucide-react";

export default function ShopHeader() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-orange-50 to-white">
      <Container>

        <div className="py-10">

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <Link
              href="/"
              className="transition hover:text-orange-600"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <span className="font-medium text-slate-900">
              Shop
            </span>

          </div>

          {/* Title */}

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Shop Collection
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Discover premium products across fashion,
                electronics, beauty, gaming, and more.
              </p>

            </div>

            <div className="rounded-2xl border border-orange-100 bg-white px-6 py-4 shadow-sm">

              <p className="text-sm text-slate-500">
                Total Products
              </p>

              <h2 className="mt-1 text-3xl font-bold text-orange-600">
                2,456+
              </h2>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}