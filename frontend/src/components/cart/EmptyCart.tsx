import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
        <ShoppingCart
          size={42}
          className="text-orange-600"
        />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-900">
        Your Cart is Empty
      </h2>

      <p className="mt-4 max-w-md text-slate-500">
        Looks like you haven't added anything yet.
        Discover amazing products and start shopping today.
      </p>

      <Link
        href="/shop"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-700"
      >
        Start Shopping

        <ArrowRight size={18} />
      </Link>

    </div>
  );
}