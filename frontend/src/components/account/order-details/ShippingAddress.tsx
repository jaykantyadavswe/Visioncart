import { MapPin, Phone, User } from "lucide-react";

export default function ShippingAddress() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Shipping Address
      </h2>

      <div className="mt-6 space-y-5">

        <div className="flex gap-3">
          <User className="mt-1 text-orange-600" size={18} />
          <div>
            <p className="text-sm text-slate-500">Recipient</p>
            <p className="font-semibold">Jaykant Kumar</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Phone className="mt-1 text-orange-600" size={18} />
          <div>
            <p className="text-sm text-slate-500">Phone</p>
            <p className="font-semibold">+91 98765 43210</p>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin className="mt-1 text-orange-600" size={18} />
          <div>
            <p className="text-sm text-slate-500">Delivery Address</p>

            <p className="leading-7">
              221B Baker Street<br />
              Bhopal, Madhya Pradesh<br />
              India - 462001
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}