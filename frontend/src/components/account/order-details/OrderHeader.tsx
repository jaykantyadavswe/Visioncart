import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CalendarDays,
  Package,
} from "lucide-react";

export default function OrderHeader() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      {/* Top */}

      <div className="p-8">

        <Link
          href="/account/orders"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          <ArrowLeft size={18} />

          Back to Orders
        </Link>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              Order #VC240801
            </h1>

            <div className="mt-4 flex flex-wrap gap-3">

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Delivered
              </span>

              <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                <CalendarDays size={16} />

                2 August 2026
              </span>

            </div>

          </div>

          <div className="text-left lg:text-right">

            <p className="text-sm text-slate-500">
              Total Paid
            </p>

            <h2 className="mt-2 text-4xl font-bold text-orange-600">
              ₹1,29,999
            </h2>

          </div>

        </div>

      </div>

      {/* Status Banner */}

      <div className="border-t border-slate-200 bg-green-50 px-8 py-6">

        <div className="flex gap-4">

          <div className="rounded-full bg-green-100 p-3 text-green-600">
            <CheckCircle2 size={26} />
          </div>

          <div>

            <h3 className="text-xl font-bold text-green-700">
              Delivered Successfully
            </h3>

            <p className="mt-2 text-green-700/80">
              Your order was delivered on
              <span className="font-semibold">
                {" "}2 August 2026 at 4:15 PM.
              </span>
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-green-700">

              <Package size={16} />

              Thank you for shopping with VisionCart.

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}