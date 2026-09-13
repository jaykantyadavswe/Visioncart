import {
  User,
  MapPin,
  Building,
  Globe,
  Hash,
} from "lucide-react";

export default function ShippingAddress() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Shipping Address
      </h2>

      <p className="mt-2 text-slate-500">
        Enter the address where you'd like your order delivered.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {/* Full Name */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500">

            <User size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* Country */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Country
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500">

            <Globe size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="India"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* State */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            State
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500">

            <Building size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Madhya Pradesh"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* City */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            City
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500">

            <Building size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Bhopal"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* ZIP */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            ZIP Code
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500">

            <Hash size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="462001"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

      </div>

      {/* Address */}

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Street Address
        </label>

        <div className="flex items-start rounded-xl border border-slate-300 px-4 py-3 focus-within:border-orange-500">

          <MapPin
            size={18}
            className="mt-1 text-slate-400"
          />

          <textarea
            rows={4}
            placeholder="House No., Street, Area..."
            className="w-full resize-none bg-transparent px-3 outline-none"
          />

        </div>

      </div>

      {/* Landmark */}

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Landmark (Optional)
        </label>

        <input
          type="text"
          placeholder="Near City Mall"
          className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-orange-500"
        />

      </div>

    </section>
  );
}