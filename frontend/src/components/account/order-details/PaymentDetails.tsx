import {
  CreditCard,
  Receipt,
  BadgeCheck,
} from "lucide-react";

export default function PaymentDetails() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Payment Details
      </h2>

      <div className="mt-6 space-y-5">

        <div className="flex justify-between">

          <div className="flex gap-3">
            <CreditCard
              className="text-orange-600"
              size={18}
            />

            <span>Payment Method</span>
          </div>

          <strong>UPI</strong>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-3">
            <Receipt
              className="text-orange-600"
              size={18}
            />

            <span>Transaction ID</span>
          </div>

          <strong>TXN98456321</strong>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-3">
            <BadgeCheck
              className="text-orange-600"
              size={18}
            />

            <span>Status</span>
          </div>

          <span className="font-semibold text-green-600">
            Paid
          </span>

        </div>

      </div>

    </section>
  );
}