import Link from "next/link";
import { ChevronRight, Lock } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <div className="border-b border-slate-200 pb-8">

      {/* Breadcrumb */}

      <div className="flex items-center gap-2 text-sm text-slate-500">

        <Link
          href="/"
          className="hover:text-orange-600"
        >
          Home
        </Link>

        <ChevronRight size={16} />

        <Link
          href="/cart"
          className="hover:text-orange-600"
        >
          Cart
        </Link>

        <ChevronRight size={16} />

        <span className="font-medium text-slate-900">
          Checkout
        </span>

      </div>

      {/* Heading */}

      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Secure Checkout
          </h1>

          <p className="mt-2 text-slate-500">
            Complete your purchase in just a few steps.
          </p>

        </div>

        <div className="inline-flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-green-700">

          <Lock size={18} />

          <span className="font-medium">
            SSL Encrypted Checkout
          </span>

        </div>

      </div>

    </div>
  );
}