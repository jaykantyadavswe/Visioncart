import {
  Package,
  Heart,
  Wallet,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Orders",
    value: "12",
    subtitle: "+2 this month",
    icon: Package,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Wishlist",
    value: "24",
    subtitle: "Saved products",
    icon: Heart,
    color: "bg-red-100 text-red-500",
  },
  {
    title: "Total Spent",
    value: "₹1,28,450",
    subtitle: "Lifetime purchases",
    icon: Wallet,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Reward Points",
    value: "2,450",
    subtitle: "Available points",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function StatsCards() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-green-600">

                  <TrendingUp size={16} />

                  <span>{stat.subtitle}</span>

                </div>

              </div>

              <div
                className={`rounded-2xl p-4 transition group-hover:scale-110 ${stat.color}`}
              >
                <Icon size={26} />
              </div>

            </div>

          </div>
        );
      })}

    </section>
  );
}