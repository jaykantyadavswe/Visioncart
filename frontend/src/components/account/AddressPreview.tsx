import Link from "next/link";
import { MapPin, Home, ArrowRight, Plus } from "lucide-react";

export default function AddressPreview() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-900">
            Saved Address
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Default delivery address
          </p>

        </div>

        <Link
          href="/account/addresses"
          className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          Manage

          <ArrowRight size={16} />
        </Link>

      </div>

      {/* Address Card */}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
            <Home size={22} />
          </div>

          <div className="flex-1">

            <h3 className="font-semibold text-slate-900">
              Home
            </h3>

            <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600">
              <MapPin size={16} className="mt-1 shrink-0" />

              221B Baker Street,
              <br />
              Bhopal, Madhya Pradesh
              <br />
              India - 462001
            </p>

          </div>

        </div>

      </div>

      {/* Add Address */}

      <Link
        href="/account/addresses/new"
        className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-dashed border-orange-300 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
      >
        <Plus size={18} />

        Add New Address
      </Link>

    </section>
  );
}