import {
  Truck,
  Lock,
  RefreshCw,
  PhoneCall,
} from "lucide-react";
import Container from "../ui/Container";

const stats = [
  {
    id: 1,
    icon: <Truck size={28} />,
    title: "Free Delivery",
    subtitle: "On Orders Over $50",
  },
  {
    id: 2,
    icon: <Lock size={28} />,
    title: "Secure Payments",
    subtitle: "100% Protected",
  },
  {
    id: 3,
    icon: <RefreshCw size={28} />,
    title: "Easy Returns",
    subtitle: "30-Day Money Back",
  },
  {
    id: 4,
    icon: <PhoneCall size={28} />,
    title: "24/7 Support",
    subtitle: "Always Available",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-orange-50 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}