import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Contact Information
      </h2>

      <p className="mt-2 text-slate-500">
        We'll use these details to send your order confirmation and delivery updates.
      </p>

      <div className="mt-8 grid gap-6">

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500">

            <Mail size={18} className="text-slate-400" />

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500">

            <Phone size={18} className="text-slate-400" />

            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

      </div>

      {/* Save Information */}

      <label className="mt-6 flex cursor-pointer items-center gap-3">

        <input
          type="checkbox"
          className="h-5 w-5 rounded accent-orange-600"
        />

        <span className="text-sm text-slate-600">
          Save this information for future purchases
        </span>

      </label>

    </section>
  );
}