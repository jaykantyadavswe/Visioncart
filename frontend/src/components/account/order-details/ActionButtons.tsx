import Link from "next/link";
import {
  FileText,
  RotateCcw,
  Star,
  Truck,
  MessageCircle,
} from "lucide-react";

export default function ActionButtons() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Quick Actions
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Manage this order or get help.
      </p>

      <div className="mt-8 space-y-3">

        {/* Primary */}

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition hover:bg-orange-700">
          <Truck size={18} />
          Track Shipment
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-3.5 font-semibold transition hover:border-orange-500 hover:text-orange-600">
          <FileText size={18} />
          Download Invoice
        </button>

        {/* Secondary */}

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-3.5 font-semibold transition hover:border-orange-500 hover:text-orange-600">
          <RotateCcw size={18} />
          Buy Again
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-3.5 font-semibold transition hover:border-orange-500 hover:text-orange-600">
          <Star size={18} />
          Write Review
        </button>

        <Link
          href="/support"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-3.5 font-semibold transition hover:border-orange-500 hover:text-orange-600"
        >
          <MessageCircle size={18} />
          Contact Support
        </Link>

      </div>

    </section>
  );
}