import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

export default function OrderSummary() {
  const subtotal = 188997;
  const shipping = 0;
  const tax = 3499;
  const discount = 5000;

  const total = subtotal + shipping + tax - discount;

  return (
    <div className="sticky top-24 h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Order Summary
      </h2>

      {/* Price Details */}

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-semibold">
            ₹{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-600">Shipping</span>

          <span className="font-semibold text-green-600">
            Free
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-600">Tax</span>

          <span className="font-semibold">
            ₹{tax.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Discount
          </span>

          <span className="font-semibold text-red-500">
            -₹{discount.toLocaleString()}
          </span>
        </div>

      </div>

      {/* Divider */}

      <div className="my-8 border-t border-dashed" />

      {/* Total */}

      <div className="flex items-center justify-between">

        <span className="text-lg font-semibold">
          Total
        </span>

        <span className="text-3xl font-bold text-orange-600">
          ₹{total.toLocaleString()}
        </span>

      </div>

      {/* Coupon */}

      <div className="mt-8">

        <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">

          <Tag size={16} />

          Coupon Code

        </label>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Enter coupon"
            className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
          />

          <button className="rounded-xl bg-slate-900 px-5 font-medium text-white transition hover:bg-orange-600">
            Apply
          </button>

        </div>

      </div>

      {/* Checkout */}

      <Link
        href="/checkout"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
      >
        Proceed to Checkout

        <ArrowRight size={20} />
      </Link>

      {/* Secure Note */}

      <p className="mt-5 text-center text-sm text-slate-500">
        Secure checkout with encrypted payment.
      </p>

    </div>
  );
}