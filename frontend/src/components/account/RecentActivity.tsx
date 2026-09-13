import Link from "next/link";
import {
  CheckCircle2,
  Heart,
  MapPin,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Order Delivered",
    description: "iPhone 16 Pro has been delivered.",
    time: "Today",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Added to Wishlist",
    description: "MacBook Air M3 saved to wishlist.",
    time: "Yesterday",
    icon: Heart,
    color: "bg-red-100 text-red-500",
  },
  {
    id: 3,
    title: "Address Updated",
    description: "Home address was updated.",
    time: "3 days ago",
    icon: MapPin,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 4,
    title: "Payment Successful",
    description: "Payment received for Order #VC240801.",
    time: "Last week",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest account activity
          </p>
        </div>

        <Link
          href="/account/activity"
          className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          View All
          <ArrowRight size={16} />
        </Link>

      </div>

      <div className="space-y-6">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="relative flex gap-5"
            >
              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div
                  className={`rounded-full p-3 ${activity.color}`}
                >
                  <Icon size={18} />
                </div>

                {activity.id !== activities.length && (
                  <div className="mt-2 h-full w-px bg-slate-200" />
                )}

              </div>

              {/* Content */}

              <div className="pb-8">

                <div className="flex items-center gap-3">

                  <h3 className="font-semibold text-slate-900">
                    {activity.title}
                  </h3>

                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
                    {activity.time}
                  </span>

                </div>

                <p className="mt-2 text-slate-500">
                  {activity.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}