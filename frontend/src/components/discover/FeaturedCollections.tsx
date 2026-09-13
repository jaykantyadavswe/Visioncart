import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Electronics",
    items: "1,240 Products",
    image: "/collections/electronics.jpg",
    href: "/categories/electronics",
  },
  {
    id: 2,
    title: "Fashion",
    items: "890 Products",
    image: "/collections/fashion.jpg",
    href: "/categories/fashion",
  },
  {
    id: 3,
    title: "Gaming",
    items: "430 Products",
    image: "/collections/gaming.jpg",
    href: "/categories/gaming",
  },
  {
    id: 4,
    title: "Beauty",
    items: "620 Products",
    image: "/collections/beauty.jpg",
    href: "/categories/beauty",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20">
      <Container>

        <div className="mb-12">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            ✨ Collections
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Featured Collections
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Discover handpicked collections curated for every lifestyle.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {collections.map((collection) => (

            <Link
              key={collection.id}
              href={collection.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 w-full p-6 text-white">

                  <h3 className="text-2xl font-bold">
                    {collection.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-200">
                    {collection.items}
                  </p>

                  <div className="mt-5 flex items-center gap-2 font-medium">

                    Explore

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </Container>
    </section>
  );
}