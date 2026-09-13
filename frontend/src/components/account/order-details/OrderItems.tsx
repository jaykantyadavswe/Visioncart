import Image from "next/image";
import Link from "next/link";
import {
  RotateCcw,
  Star,
} from "lucide-react";

const items = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    image: "/products/iphone.jpg",
    variant: "Natural Titanium • 256GB",
    quantity: 1,
    price: 129999,
  },
  {
    id: 2,
    name: "Apple 20W USB-C Adapter",
    image: "/products/adapter.jpg",
    variant: "White",
    quantity: 1,
    price: 1999,
  },
];

export default function OrderItems() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Ordered Items
          </h2>

          <p className="mt-2 text-slate-500">
            {items.length} items in this order
          </p>
        </div>

      </div>

      <div className="space-y-6">

        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 rounded-2xl border border-slate-200 p-5 transition hover:border-orange-300 hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex gap-5">

              <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-slate-100">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.variant}
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm">

                  <span>
                    Qty:
                    <strong> {item.quantity}</strong>
                  </span>

                  <span>
                    ₹{item.price.toLocaleString()}
                  </span>

                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-3">

              <Link
                href={`/product/${item.id}`}
                className="rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                View Product
              </Link>

              <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold transition hover:border-orange-500 hover:text-orange-600">

                <RotateCcw size={18} />

                Buy Again

              </button>

              <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold transition hover:border-orange-500 hover:text-orange-600">

                <Star size={18} />

                Write Review

              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}