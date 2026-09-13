import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const wishlist = [
  {
    id: 1,
    title: "MacBook Air M3",
    image: "/products/macbook.jpg",
    price: "₹1,14,999",
  },
  {
    id: 2,
    title: "Apple Watch Ultra 2",
    image: "/products/watch.jpg",
    price: "₹79,999",
  },
  {
    id: 3,
    title: "Nike Air Jordan",
    image: "/products/shoes.jpg",
    price: "₹18,999",
  },
];

export default function WishlistPreview() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-900">
            Wishlist
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Saved products
          </p>

        </div>

        <Link
          href="/account/wishlist"
          className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          View All

          <ArrowRight size={16} />
        </Link>

      </div>

      <div className="space-y-4">

        {wishlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl border border-slate-100 p-3 transition hover:border-orange-200 hover:bg-orange-50"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="flex-1">

              <h3 className="line-clamp-1 font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-orange-600 font-bold">
                {item.price}
              </p>

            </div>

            <button className="rounded-full bg-red-50 p-2 text-red-500 transition hover:bg-red-100">
              <Heart
                size={18}
                className="fill-current"
              />
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}