import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

export default function CartHeader() {
  return (
    <div className="border-b border-slate-200 pb-8">

      {/* Breadcrumb */}

      <div className="flex items-center gap-2 text-sm text-slate-500">

        <Link
          href="/"
          className="transition hover:text-orange-600"
        >
          Home
        </Link>

        <ChevronRight size={16} />

        <span className="font-medium text-slate-800">
          Shopping Cart
        </span>

      </div>

      {/* Header */}

      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Shopping Cart
          </h1>

          <p className="mt-2 text-slate-500">
            You have{" "}
            <span className="font-semibold text-slate-900">
              3 items
            </span>{" "}
            in your cart.
          </p>

        </div>

        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}