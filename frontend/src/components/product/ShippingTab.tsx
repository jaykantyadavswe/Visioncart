import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function ShippingTab() {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border p-6">
        <Truck className="text-orange-600" />
        <h3 className="mt-4 text-lg font-semibold">
          Free Delivery
        </h3>

        <p className="mt-2 text-slate-500">
          Free shipping on all eligible orders.
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <RotateCcw className="text-orange-600" />

        <h3 className="mt-4 text-lg font-semibold">
          Easy Returns
        </h3>

        <p className="mt-2 text-slate-500">
          Return within 30 days with no hassle.
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <ShieldCheck className="text-orange-600" />

        <h3 className="mt-4 text-lg font-semibold">
          Secure Payments
        </h3>

        <p className="mt-2 text-slate-500">
          Your transactions are protected with industry-standard encryption.
        </p>
      </div>

    </div>
  );
}