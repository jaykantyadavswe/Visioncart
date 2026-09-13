import Link from "next/link";
import {
  CheckCircle2,
  Package,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function OrderSuccessCard() {
  const orderId = "#VC20260802001";

  return (
    <section className="rounded-3xl bg-white p-10 text-center shadow-sm border border-slate-200">

      {/* Success Icon */}

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

        <CheckCircle2
          size={56}
          className="text-green-600"
        />

      </div>

      {/* Heading */}

      <h1 className="mt-8 text-4xl font-bold text-slate-900">
        Order Placed Successfully!
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-slate-500 leading-7">
        Thank you for shopping with VisionCart.
        We've received your order and it's now being processed.
      </p>

      {/* Order Info */}

      <div className="mt-10 grid gap-6 rounded-2xl bg-slate-50 p-6 md:grid-cols-3">

        <div>

          <p className="text-sm text-slate-500">
            Order ID
          </p>

          <h3 className="mt-2 font-bold text-slate-900">
            {orderId}
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Estimated Delivery
          </p>

          <h3 className="mt-2 font-bold text-slate-900">
            5 Aug 2026
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Payment
          </p>

          <h3 className="mt-2 font-bold text-green-600">
            Successful
          </h3>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

        <Link
          href="/orders"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-700"
        >
          <Package size={18} />

          Track Order
        </Link>

        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
        >
          <ShoppingBag size={18} />

          Continue Shopping

          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}