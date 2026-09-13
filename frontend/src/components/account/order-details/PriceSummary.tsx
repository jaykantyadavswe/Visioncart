export default function PriceSummary() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Price Summary
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹1,31,998</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">
            FREE
          </span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>
          <span className="text-red-500">
            -₹2,000
          </span>
        </div>

        <div className="flex justify-between">
          <span>GST</span>
          <span>Included</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>Total</span>

          <span className="text-orange-600">
            ₹1,29,998
          </span>

        </div>

      </div>

    </section>
  );
}