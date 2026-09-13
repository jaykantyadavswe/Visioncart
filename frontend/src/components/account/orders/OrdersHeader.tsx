import { PackageCheck } from "lucide-react";

export default function OrdersHeader() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-5">

          <div className="rounded-2xl bg-orange-100 p-4 text-orange-600">

            <PackageCheck size={30} />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              My Orders
            </h1>

            <p className="mt-2 text-slate-500">
              Track, manage and review all your purchases.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-50 px-6 py-4 text-center">

            <h3 className="text-3xl font-bold text-slate-900">
              12
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Total Orders
            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 px-6 py-4 text-center">

            <h3 className="text-3xl font-bold text-green-600">
              9
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Delivered
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}