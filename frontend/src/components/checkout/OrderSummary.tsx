import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

const orderItems = [
  {
    id: 1,
    title: "iPhone 16 Pro",
    image: "/products/iphone.jpg",
    quantity: 1,
    price: 129999,
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    image: "/products/headphones.jpg",
    quantity: 2,
    price: 24999,
  },
];

export default function OrderSummary() {
  const subtotal = 179997;
  const shipping = 0;
  const tax = 3499;
  const discount = 5000;

  const total = subtotal + shipping + tax - discount;

  return (
    <aside className="sticky top-24 h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Order Summary
      </h2>

      {/* Products */}

      <div className="mt-6 space-y-4">

        {orderItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">

              <h3 className="line-clamp-1 font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500">
                Qty: {item.quantity}
              </p>

            </div>

            <p className="font-semibold">
              ₹{item.price.toLocaleString()}
            </p>
          </div>
        ))}

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-dashed" />

      {/* Pricing */}

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-slate-500">
            Subtotal
          </span>

          <span>
            ₹{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Shipping
          </span>

          <span className="text-green-600 font-medium">
            Free
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Tax
          </span>

          <span>
            ₹{tax.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Discount
          </span>

          <span className="font-medium text-red-500">
            -₹{discount.toLocaleString()}
          </span>
        </div>

      </div>

      <div className="my-6 border-t border-dashed" />

      {/* Total */}

      <div className="flex items-center justify-between">

        <span className="text-lg font-bold">
          Total
        </span>

        <span className="text-3xl font-bold text-orange-600">
          ₹{total.toLocaleString()}
        </span>

      </div>

      {/* Place Order */}

      <Link
        href="/order-success"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700"
      >
        Place Order

        <ArrowRight size={18} />
      </Link>

      {/* Secure */}

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">

        <ShieldCheck
          size={18}
          className="text-green-600"
        />

        Secure Payment Protected

      </div>

    </aside>
  );
}