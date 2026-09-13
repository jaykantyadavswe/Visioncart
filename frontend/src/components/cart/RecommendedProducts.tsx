import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../shop/ProductCard";

const recommendedProducts = [
  {
    id: 1,
    title: "Apple Watch Ultra 2",
    category: "Smart Watch",
    image: "/products/watch.jpg",
    price: 79999,
    originalPrice: 84999,
    rating: 4.9,
    reviews: 215,
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    category: "Headphones",
    image: "/products/headphones.jpg",
    price: 24999,
    originalPrice: 28999,
    rating: 4.8,
    reviews: 189,
    badge: "Trending",
  },
  {
    id: 3,
    title: "Nike Air Max 270",
    category: "Footwear",
    image: "/products/shoes.jpg",
    price: 8999,
    originalPrice: 10999,
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
  },
  {
    id: 4,
    title: "MacBook Air M3",
    category: "Laptop",
    image: "/products/laptop.jpg",
    price: 114999,
    originalPrice: 124999,
    rating: 5,
    reviews: 98,
    badge: "Premium",
  },
];

export default function RecommendedProducts() {
  return (
    <section className="mt-20">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Continue Shopping
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            You May Also Like
          </h2>

          <p className="mt-2 text-slate-500">
            Products selected based on your shopping interests.
          </p>
        </div>

        <Link
          href="/shop"
          className="hidden items-center gap-2 font-medium text-orange-600 hover:text-orange-700 md:flex"
        >
          View All
          <ArrowRight size={18} />
        </Link>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {recommendedProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}

      </div>

    </section>
  );
}