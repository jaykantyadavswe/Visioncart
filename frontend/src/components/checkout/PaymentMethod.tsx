"use client";

import { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Landmark,
  Banknote,
} from "lucide-react";

const paymentMethods = [
  {
    id: "card",
    title: "Credit / Debit Card",
    description: "Visa, MasterCard, RuPay",
    icon: CreditCard,
  },
  {
    id: "upi",
    title: "UPI Payment",
    description: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
  },
  {
    id: "netbanking",
    title: "Net Banking",
    description: "All major Indian banks",
    icon: Landmark,
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    description: "Pay when your order arrives",
    icon: Banknote,
  },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState("upi");

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Payment Method
      </h2>

      <p className="mt-2 text-slate-500">
        Choose your preferred payment option.
      </p>

      <div className="mt-8 space-y-4">

        {paymentMethods.map((method) => {
          const Icon = method.icon;
          const active = selected === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelected(method.id)}
              className={`w-full rounded-2xl border p-5 text-left transition ${
                active
                  ? "border-orange-500 bg-orange-50"
                  : "border-slate-200 hover:border-orange-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`rounded-xl p-3 ${
                      active
                        ? "bg-orange-100 text-orange-600"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      {method.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {method.description}
                    </p>

                  </div>

                </div>

                <div
                  className={`h-5 w-5 rounded-full border-2 transition ${
                    active
                      ? "border-orange-600 bg-orange-600"
                      : "border-slate-300"
                  }`}
                >
                  {active && (
                    <div className="m-auto mt-1 h-2 w-2 rounded-full bg-white" />
                  )}
                </div>

              </div>
            </button>
          );
        })}

      </div>

      {/* Card Details */}

      {selected === "card" && (
        <div className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Card Number
            </label>

            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Expiry Date
              </label>

              <input
                type="text"
                placeholder="MM / YY"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                CVV
              </label>

              <input
                type="password"
                placeholder="***"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

          </div>

        </div>
      )}

    </section>
  );
}