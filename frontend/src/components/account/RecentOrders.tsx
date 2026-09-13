import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recentOrders = [
  {
    id: "#VC240801",
    product: "iPhone 16 Pro",
    image: "/products/iphone.jpg",
    date: "2 Aug 2026",
    total: "₹1,29,999",
    status: "Delivered",
  },
  {
    id: "#VC240802",
    product: "Sony WH-1000XM5",
    image: "/products/headphones.jpg",
    date: "30 Jul 2026",
    total: "₹24,999",
    status: "Shipped",
  },
  {
    id: "#VC240803",
    product: "Nike Air Max 270",
    image: "/products/shoes.jpg",
    date: "28 Jul 2026",
    total: "₹8,999",
    status: "Processing",
  },
];

const statusStyles = {
  Delivered:
    "bg-green-100 text-green-700",
  Shipped:
    "bg-blue-100 text-blue-700",
  Processing:
    "bg-orange-100 text-orange-700",
};

export default function RecentOrders() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Recent Orders
          </h2>

          <p className="mt-2 text-slate-500">
            Your latest purchases.
          </p>

        </div>

        <Link
          href="/account/orders"
          className="flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
        >
          View All

          <ArrowRight size={18} />
        </Link>

      </div>

      <div className="space-y-5">

        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-orange-300 hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-5">

              <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-slate-100">

                <Image
                  src={order.image}
                  alt={order.product}
                  fill
                  className="object-cover"
                />

              </div>

              <div>

                <h3 className="font-bold text-slate-900">
                  {order.product}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {order.id}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {order.date}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-6">

              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  statusStyles[
                    order.status as keyof typeof statusStyles
                  ]
                }`}
              >
                {order.status}
              </span>

              <h4 className="font-bold text-slate-900">
                {order.total}
              </h4>

              <Link
                href={`/account/orders/${order.id}`}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-600"
              >
                Details
              </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}