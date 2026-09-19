import Container from "../ui/Container";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

import {
  Dumbbell,
  Gem,
  Home,
  Laptop,
  Shirt,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Fashion",
    icon: <Shirt size={28} />,
    products: "1,250+ Products",
    href: "/categories/fashion",
    image: "/shopbycategories/pic1.jpg",
  },
  {
    id: 2,
    title: "Electronics",
    icon: <Laptop size={28} />,
    products: "980+ Products",
    href: "/categories/electronics",
    image: "/shopbycategories/headphones2.jpg",
  },
  {
    id: 3,
    title: "Beauty",
    icon: <Sparkles size={28} />,
    products: "540+ Products",
    href: "/categories/beauty",
    image: "/shopbycategories/beauti.jpg",
  },
  {
    id: 4,
    title: "Fitness",
    icon: <Dumbbell size={28} />,
    products: "2,400+ Products",
    href: "/categories/fitness",
    image: "/shopbycategories/fitness.jpg",
  },
  {
    id: 5,
    title: "Home Decor",
    icon: <Home size={28} />,
    products: "780+ Products",
    href: "/categories/home-decor",
    image: "/shopbycategories/homedecor.jpg",
  },
  {
    id: 6,
    title: "Accessories",
    icon: <Gem size={28} />,
    products: "650+ Products",
    href: "/categories/accessories",
    image: "/shopbycategories/headphones.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Categories
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Shop by Category
            </h2>

            <p className="mt-3 max-w-xl text-base text-slate-500">
              Browse our most popular categories and discover products tailored to your lifestyle.
            </p>
          </div>

          <Link href="/categories" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-600 hover:shadow-sm md:block">
            View All Categories <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
}