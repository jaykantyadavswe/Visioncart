import { MoveRight, History } from "lucide-react";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const recentProducts = [
  {
    id: 1,
    title: "Air Jordan Sneakers",
    category: "Footwear",
    brand: "Nike",
    image: "/products/shoes.jpg",
    price: 7999,
    originalPrice: 9999,
    rating: 4.8,
    reviews: 156,
    badge: "-20%",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "Audio",
    brand: "Sony",
    image: "/products/headphones.jpg",
    price: 4999,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 98,
    badge: "Hot",
  },
  {
    id: 3,
    title: "Smart Watch",
    category: "Wearables",
    brand: "Apple",
    image: "/products/watch.jpg",
    price: 21999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 312,
    badge: "New",
  },
];

export default function RecentlyViewed() {
  return (
    <section className="py-20">
      <Container>

        <div className="mb-10 flex items-end justify-between">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              <History size={16} />
              Recently Viewed
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Continue Shopping
            </h2>

            <p className="mt-3 text-slate-500">
              Pick up where you left off.
            </p>

          </div>

          <button className="hidden items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 transition hover:border-orange-500 hover:text-orange-600 md:flex">
            View History
            <MoveRight size={18} />
          </button>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </Container>
    </section>
  );
}