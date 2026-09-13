import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";
import ProductCard from "../shop/ProductCard";

const relatedProducts = [
  {
    id: 1,
    title: "Apple Watch Series 9",
    category: "Wearables",
    brand: "Apple",
    image: "/products/watch.jpg",
    price: 38999,
    originalPrice: 42999,
    rating: 4.9,
    reviews: 284,
    badge: "Popular",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    category: "Audio",
    brand: "Sony",
    image: "/products/headphones.jpg",
    price: 24999,
    originalPrice: 27999,
    rating: 4.8,
    reviews: 176,
    badge: "-10%",
  },
  {
    id: 3,
    title: "MacBook Air M3",
    category: "Laptop",
    brand: "Apple",
    image: "/products/laptop.jpg",
    price: 114999,
    originalPrice: 124999,
    rating: 4.9,
    reviews: 321,
    badge: "New",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    category: "Accessories",
    brand: "Logitech",
    image: "/products/keyboard.jpg",
    price: 5499,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 93,
    badge: "-20%",
  },
];

export default function RelatedProducts() {
  return (
    <section className="py-20">
      <Container>

        <div className="mb-10 flex items-end justify-between">

          <div>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              You May Also Like
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Related Products
            </h2>

            <p className="mt-3 text-slate-500">
              Similar products selected just for you.
            </p>

          </div>

          <Link
            href="/shop"
            className="hidden items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:border-orange-500 hover:text-orange-600 md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}