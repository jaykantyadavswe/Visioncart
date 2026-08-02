import { MoveRight } from "lucide-react";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const filters = [
  "All",
  "New Arrivals",
  "Best Sellers",
  "Featured",
  "Sale",
];

const products = [
  {
    id: 1,
    title: "Gaming Laptop",
    category: "Electronics",
    price: 79999,
    rating: 4.8,
    image: "/products/laptop.jpg",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "Audio",
    price: 4999,
    rating: 4.7,
    image: "/products/headphones.jpg",
  },
  {
    id: 3,
    title: "Smart Watch",
    category: "Wearables",
    price: 8999,
    rating: 4.6,
    image: "/products/watch.jpg",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    category: "Accessories",
    price: 3499,
    rating: 4.9,
    image: "/products/keyboard.jpg",
  },
  {
    id: 5,
    title: "Running Shoes",
    category: "Fashion",
    price: 6999,
    rating: 4.9,
    image: "/products/shoes.jpg",
  },
  {
    id: 6,
    title: "Leather Backpack",
    category: "Accessories",
    price: 3999,
    rating: 4.8,
    image: "/products/bag.jpg",
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    category: "Electronics",
    price: 2499,
    rating: 4.7,
    image: "/products/speaker.jpg",
  },
  {
    id: 8,
    title: "Luxury Perfume",
    category: "Beauty",
    price: 1999,
    rating: 4.8,
    image: "/products/perfume.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Featured Collection
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Trending This Week
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-500">
              Explore our most popular products selected for
              quality, design, and customer satisfaction.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold transition-all hover:border-orange-500 hover:text-orange-600 text-zinc-700">
            View All Products
            <MoveRight size={18} />
          </button>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                index === 0
                  ? "bg-orange-600 text-white"
                  : "border text-zinc-700 border-slate-300 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-3 font-semibold text-white transition-all hover:bg-orange-700 hover:shadow-lg">
            Load More Products
            <MoveRight size={18} />
          </button>
        </div>

      </Container>
    </section>
  );
}