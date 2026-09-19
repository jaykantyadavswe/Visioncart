import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Container from "../ui/Container";
import WishlistButton from "@/components/wishlist/WishlistButton";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { shopCatalog, formatPrice } from "@/app/lib/shopCatalog";

const products = [
  {
    id: 1,
    name: "Essential Hoodie",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.8,
    reviews: 120,
    badge: "New",
    image: "/HeroSecImage/Hero.png",
  },
  {
    id: 2,
    name: "Air Max 270",
    price: 129.99,
    oldPrice: 169.99,
    rating: 4.9,
    reviews: 98,
    badge: "-20%",
    image: "/HeroSecImage/imaged.png",
  },
  {
    id: 3,
    name: "Wireless Headphone",
    price: 39.99,
    oldPrice: 59.99,
    rating: 4.8,
    reviews: 156,
    badge: "New",
    image: "/HeroSecImage/image.png",
  },
  {
    id: 4,
    name: "Smart Watch Series 9",
    price: 199.99,
    oldPrice: 229.99,
    rating: 4.9,
    reviews: 87,
    badge: "-10%",
    image: "/HeroSecImage/imagb.png",
  },
  {
    id: 5,
    name: "Stainless Steel Bottle",
    price: 24.99,
    oldPrice: 32.99,
    rating: 4.7,
    reviews: 76,
    badge: "-25%",
    image: "/HeroSecImage/imagea.png",
  },
];

export default function Trending() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Trending Products
          </h2>

          <Link
            href="/shop/trending"
            className="inline-flex  items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:border-orange-500 hover:text-orange-600 hover:shadow-md"
          >
            View All Trending
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-[22px] border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="relative overflow-hidden rounded-[18px] bg-slate-100">
                <span
                  className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide shadow-sm ${
                    product.badge.includes("%")
                      ? "bg-red-500 text-white"
                      : "bg-white text-slate-700"
                  }`}
                >
                  {product.badge}
                </span>

                <WishlistButton productId={product.id} title={product.name} className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition hover:scale-105" />

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1280px) 100vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-medium text-slate-800 font-semibold">{product.name}</h3>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-900">{formatPrice(shopCatalog.find((item) => item.id === product.id)?.price ?? Math.round(product.price * 85))}</span>
                  <span className="text-sm text-slate-400 line-through">{formatPrice(shopCatalog.find((item) => item.id === product.id)?.originalPrice ?? Math.round(product.oldPrice * 85))}</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-slate-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {shopCatalog.find((item) => item.id === product.id) && <AddToCartButton product={shopCatalog.find((item) => item.id === product.id)!} iconOnly className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-orange-600 hover:text-white" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
