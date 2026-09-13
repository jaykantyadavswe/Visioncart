import { MoveRight } from "lucide-react";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const newArrivals = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Fashion",
    price: 5999,
    rating: 4.8,
    image: "/products/shoes.jpg",
    reviews: 124,
  },
  {
    id: 2,
    title: "Apple Watch",
    category: "Wearables",
    price: 29999,
    rating: 4.9,
    image: "/products/watch.jpg",
    reviews: 124,

  },
  {
    id: 3,
    title: "Gaming Headset",
    category: "Gaming",
    price: 3499,
    rating: 4.7,
    image: "/products/headphones.jpg",
    reviews: 124,

  },
  {
    id: 4,
    title: "Leather Backpack",
    category: "Accessories",
    price: 2499,
    rating: 4.6,
    image: "/products/bag.jpg",
    reviews: 124,
  },
];

export default function NewArrivals() {
  return (
    <section className="py-20 bg-white">
      <Container>

        <div className="mb-12 flex items-end justify-between">

          <div>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Just Arrived
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              New Arrivals
            </h2>

            <p className="mt-4 max-w-xl text-slate-500">
              Discover the latest products freshly added to our
              collection. Stay ahead with trending styles and
              must-have essentials.
            </p>

          </div>

          <button className="hidden items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 transition hover:border-orange-500 hover:text-orange-600 md:flex">
            View All
            <MoveRight size={18} />
          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {newArrivals.map((product) => (
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