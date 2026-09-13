import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";
import { ArrowRight } from "lucide-react";

const sideProducts = [
  {
    id: 1,
    title: "Apple Watch Ultra",
    image: "/products/watch.jpg",
    price: "₹79,999",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    image: "/products/headphones.jpg",
    price: "₹24,999",
  },
  {
    id: 3,
    title: "Nike Air Max",
    image: "/products/shoes.jpg",
    price: "₹8,999",
  },
];

export default function PremiumPicks() {
  return (
    <section className="py-20">
      <Container>

        <SectionHeader
          badge="💎 Premium"
          title="Premium Picks"
          description="Hand-selected premium products for the best shopping experience."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Featured Product */}

          <Link
            href="/product/1"
            className="group relative overflow-hidden rounded-3xl lg:col-span-2"
          >

            <div className="relative h-[600px]">

              <Image
                src="/products/laptop.jpg"
                alt="MacBook"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10">

                <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                  Editor's Choice
                </span>

                <h2 className="mt-6 text-5xl font-bold text-white">
                  MacBook Air M3
                </h2>

                <p className="mt-4 max-w-lg text-lg text-white/80">
                  Lightweight. Powerful. Built for creators,
                  developers and professionals.
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <span className="text-4xl font-bold text-white">
                    ₹114,999
                  </span>

                  <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-orange-500 hover:text-white">
                    Shop Now
                  </button>

                </div>

              </div>

            </div>

          </Link>

          {/* Side Cards */}

          <div className="space-y-6">

            {sideProducts.map((item) => (

              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="group flex items-center gap-5 rounded-3xl border bg-white p-5 transition hover:shadow-xl"
              >

                <div className="relative h-28 w-28 overflow-hidden rounded-2xl">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition group-hover:scale-110"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-orange-600 font-semibold">
                    {item.price}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-orange-600">

                    View Product

                    <ArrowRight size={16} />

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}