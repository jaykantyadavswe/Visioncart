import Container from "../ui/Container";
import CategoryCard from "./CategoryCard";

import {
  BookOpen,
  Gamepad2,
  Laptop,
  Shirt,
  Sparkles,
  Dumbbell,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Electronics",
    icon: <Laptop size={28} />,
    products: "1,250+ Products",
    href: "/categories/electronics",
  },
  {
    id: 2,
    title: "Fashion",
    icon: <Shirt size={28} />,
    products: "980+ Products",
    href: "/categories/fashion",
  },
  {
    id: 3,
    title: "Gaming",
    icon: <Gamepad2 size={28} />,
    products: "540+ Products",
    href: "/categories/gaming",
  },
  {
    id: 4,
    title: "Books",
    icon: <BookOpen size={28} />,
    products: "2,400+ Products",
    href: "/categories/books",
  },
  {
    id: 5,
    title: "Beauty",
    icon: <Sparkles size={28} />,
    products: "780+ Products",
    href: "/categories/beauty",
  },
  {
    id: 6,
    title: "Sports",
    icon: <Dumbbell size={28} />,
    products: "650+ Products",
    href: "/categories/sports",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-24">
  <Container>
    <div className="mb-16 flex items-center justify-between">
      <div>
        <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
          Categories
        </span>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Shop by Category
        </h2>

        <p className="mt-3 max-w-xl text-slate-500">
          Browse our most popular categories and discover products
          tailored to your lifestyle.
        </p>
      </div>

      <button className="hidden rounded-xl border px-5 py-3 font-medium transition hover:border-orange-500 hover:text-orange-600 md:block">
        View All Categories →
      </button>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          {...category}
        />
      ))}
    </div>
  </Container>
</section>
  );
}