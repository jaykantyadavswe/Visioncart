"use client";

import { useState } from "react";
import { Truck, Zap, Bike } from "lucide-react";

const deliveryOptions = [
  {
    id: "standard",
    title: "Standard Delivery",
    description: "Delivered in 3–5 business days",
    price: "Free",
    icon: Truck,
  },
  {
    id: "express",
    title: "Express Delivery",
    description: "Delivered tomorrow",
    price: "₹199",
    icon: Zap,
  },
  {
    id: "same-day",
    title: "Same Day Delivery",
    description: "Delivered within 6 hours",
    price: "₹399",
    icon: Bike,
  },
];

export default function DeliveryMethod() {
  const [selected, setSelected] = useState("standard");

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Delivery Method
      </h2>

      <p className="mt-2 text-slate-500">
        Select the delivery option that works best for you.
      </p>

      <div className="mt-8 space-y-4">

        {deliveryOptions.map((option) => {
          const Icon = option.icon;
          const active = selected === option.id;

          return (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full rounded-2xl border p-5 transition-all duration-200 ${
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

                  <div className="text-left">

                    <h3 className="font-semibold text-slate-900">
                      {option.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {option.description}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p
                    className={`text-lg font-bold ${
                      option.price === "Free"
                        ? "text-green-600"
                        : "text-slate-900"
                    }`}
                  >
                    {option.price}
                  </p>

                </div>

              </div>
            </button>
          );
        })}

      </div>

    </section>
  );
}