import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CreditCard,
  MapPin,
  Package,
  RotateCcw,
  FileText,
  ArrowRight,
} from "lucide-react";

interface OrderCardProps {
  order: {
    id: string;
    status: "Delivered" | "Shipped" | "Processing" | "Cancelled";
    date: string;
    total: number;
    quantity: number;
    payment: string;
    address: string;
    image: string;
    product: string;
  };
}

const statusStyles = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-orange-100 text-orange-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">

      {/* Top */}

      <div className="flex flex-col gap-6 border-b border-slate-100 p-6 lg:flex-row lg:justify-between">

        <div className="flex gap-5">

          <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={order.image}
              alt={order.product}
              fill
              className="object-cover"
            />
          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              {order.product}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Order ID: {order.id}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              <span
                className={`rounded-full px-4 py-1 text-sm font-medium ${
                  statusStyles[order.status]
                }`}
              >
                {order.status}
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-1 text-sm">
                Qty {order.quantity}
              </span>

            </div>

          </div>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-500">
            Total
          </p>

          <h3 className="mt-2 text-3xl font-bold text-orange-600">
            ₹{order.total.toLocaleString()}
          </h3>

        </div>

      </div>

      {/* Details */}

      <div className="grid gap-5 border-b border-slate-100 p-6 md:grid-cols-3">

        <div className="flex gap-3">
          <CalendarDays size={18} className="mt-1 text-slate-400" />
          <div>
            <p className="text-sm text-slate-500">Order Date</p>
            <p className="font-medium">{order.date}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <CreditCard size={18} className="mt-1 text-slate-400" />
          <div>
            <p className="text-sm text-slate-500">Payment</p>
            <p className="font-medium">{order.payment}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin size={18} className="mt-1 text-slate-400" />
          <div>
            <p className="text-sm text-slate-500">Shipping</p>
            <p className="font-medium line-clamp-2">
              {order.address}
            </p>
          </div>
        </div>

      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-3 p-6">

        <Link
          href={`/account/orders/${order.id}`}
          className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
        >
          <Package size={18} />
          View Details
        </Link>

        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:border-orange-500 hover:text-orange-600">
          <RotateCcw size={18} />
          Buy Again
        </button>

        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:border-orange-500 hover:text-orange-600">
          <FileText size={18} />
          Invoice
        </button>

        <button className="ml-auto inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:border-orange-500 hover:text-orange-600">
          Track Order
          <ArrowRight size={18} />
        </button>

      </div>

    </article>
  );
}