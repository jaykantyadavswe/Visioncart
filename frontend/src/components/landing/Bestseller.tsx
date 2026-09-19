import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Container from "../ui/Container";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { shopCatalog } from "@/app/lib/shopCatalog";

const products = [
  {
    id: 1,
    name: "Classic Hoodie",
    price: 59.99,
    description: "Premium quality hoodie perfect for everyday wear.",
    rating: 4.8,
    reviews: 120,
    badge: "Bestseller",
    image: "/HeroSecImage/Hero.png",
    bg: "bg-[#f1eee8]",
  },
  {
    id: 2,
    name: "Air Max 270",
    price: 129.99,
    description: "Iconic comfort meets modern style.",
    rating: 4.9,
    reviews: 98,
    badge: "Bestseller",
    image: "/HeroSecImage/imaged.png",
    bg: "bg-[#f5f5f5]",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 349.99,
    description: "Industry-leading noise cancellation.",
    rating: 4.9,
    reviews: 75,
    badge: "Bestseller",
    image: "/HeroSecImage/image.png",
    bg: "bg-[#f3f3f5]",
  },
];

export default function Bestseller() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Best Sellers
          </h2>

          <Link
            href="/shop/bestSellings"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:border-orange-500 hover:text-orange-600 hover:shadow-md"
          >
            View All Best Sellers
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className={`${product.bg} flex h-full min-h-[220px] items-stretch rounded-[26px] border border-slate-200 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(15,23,42,0.08)]`}
            >
              <div className="flex w-full items-stretch gap-4">
                <div className="relative w-[38%] min-w-[120px] overflow-hidden rounded-[18px] bg-white/40">
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm">
                    {product.badge}
                  </span>

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex w-[62%] flex-col justify-between">
                  <div>
                    <h3 className="text-[22px] font-semibold tracking-tight text-slate-900">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-slate-800">
                      <span className="text-[22px] font-bold">${product.price.toFixed(2)}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-1">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-[11px] font-medium text-slate-600">({product.reviews})</span>
                    </div>

                    <p className="mt-3 text-sm leading-5 text-slate-600">{product.description}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    {shopCatalog.find((item) => item.id === product.id) && <AddToCartButton product={shopCatalog.find((item) => item.id === product.id)!} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600" />}

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
