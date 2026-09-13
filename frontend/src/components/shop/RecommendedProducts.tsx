import { MoveRight } from "lucide-react";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const recommendedProducts = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Footwear",
    brand: "Nike",
    image: "/products/shoes.jpg",
    price: 6999,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 214,
    badge: "-22%",
  },
  {
    id: 2,
    title: "Apple Watch Series 9",
    category: "Wearables",
    brand: "Apple",
    image: "/products/watch.jpg",
    price: 38999,
    originalPrice: 42999,
    rating: 4.9,
    reviews: 512,
    badge: "Popular",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    category: "Audio",
    brand: "Sony",
    image: "/products/headphones.jpg",
    price: 24999,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 430,
    badge: "-16%",
  },
];

export default function RecommendedProducts() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between">

          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Recommended
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Recommended For You
            </h2>

            <p className="mt-3 text-slate-500">
              Products you may like based on your shopping preferences.
            </p>
          </div>

          <button className="hidden items-center gap-2 rounded-xl border px-5 py-3 font-medium transition hover:border-orange-500 hover:text-orange-600 md:flex">
            View All
            <MoveRight size={18} />
          </button>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}