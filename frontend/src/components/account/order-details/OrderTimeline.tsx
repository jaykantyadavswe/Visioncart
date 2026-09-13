import {
  ShoppingCart,
  PackageCheck,
  Truck,
  House,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    title: "Order Placed",
    time: "30 Jul, 10:20 AM",
    icon: ShoppingCart,
    completed: true,
  },
  {
    title: "Packed",
    time: "30 Jul, 4:45 PM",
    icon: PackageCheck,
    completed: true,
  },
  {
    title: "Shipped",
    time: "31 Jul, 8:30 AM",
    icon: Truck,
    completed: true,
  },
  {
    title: "Out for Delivery",
    time: "2 Aug, 9:15 AM",
    icon: House,
    completed: true,
  },
  {
    title: "Delivered",
    time: "2 Aug, 4:15 PM",
    icon: CheckCircle2,
    completed: true,
  },
];

export default function OrderTimeline() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Order Timeline
      </h2>

      <p className="mt-2 text-slate-500">
        Track every stage of your order.
      </p>

      <div className="mt-10">

        {timeline.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {/* Line */}

              {index !== timeline.length - 1 && (
                <div className="absolute left-6 top-12 h-full w-0.5 bg-slate-200" />
              )}

              {/* Icon */}

              <div
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${
                  step.completed
                    ? "bg-green-100 text-green-600"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                <Icon size={20} />
              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex flex-wrap items-center justify-between gap-2">

                  <h3
                    className={`font-semibold ${
                      step.completed
                        ? "text-slate-900"
                        : "text-slate-400"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <span className="text-sm text-slate-500">
                    {step.time}
                  </span>

                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {step.completed
                    ? `${step.title} completed successfully.`
                    : "Waiting..."}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}