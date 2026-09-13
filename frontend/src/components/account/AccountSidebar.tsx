"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    title: "My Orders",
    href: "/account/orders",
    icon: Package,
  },
  {
    title: "Wishlist",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    title: "Addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    title: "Payment Methods",
    href: "/account/payments",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    href: "/account/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/account/settings",
    icon: Settings,
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* User */}

      <div className="border-b border-slate-200 pb-6">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-600">
            J
          </div>

          <div>

            <h3 className="font-bold text-slate-900">
              Jaykant
            </h3>

            <p className="text-sm text-slate-500">
              Premium Member
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="mt-6 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-orange-600 text-white"
                  : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <div className="flex items-center gap-3">

                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={18}
                className="opacity-0 transition group-hover:opacity-100"
              />

            </Link>
          );
        })}

      </nav>

      {/* Logout */}

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 font-semibold text-red-500 transition hover:bg-red-50">

        <LogOut size={18} />

        Logout

      </button>

    </aside>
  );
}