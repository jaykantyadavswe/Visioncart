import Link from "next/link";
import {
  Mail,
  Phone,
  CalendarDays,
  Package,
  UserPen,
  Crown,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Avatar */}

      <div className="flex flex-col items-center text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-4xl font-bold text-white shadow-lg">
          J
        </div>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          Jaykant
        </h2>

        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
          <Crown size={16} />
          Premium Member
        </div>

      </div>

      {/* Info */}

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">
          <Mail size={18} className="text-slate-400" />
          <span className="text-slate-600">
            jaykant@example.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="text-slate-400" />
          <span className="text-slate-600">
            +91 98765 43210
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays size={18} className="text-slate-400" />
          <span className="text-slate-600">
            Member Since Jan 2026
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Package size={18} className="text-slate-400" />
          <span className="text-slate-600">
            12 Orders Completed
          </span>
        </div>

      </div>

      {/* Divider */}

      <div className="my-8 border-t border-slate-200" />

      {/* Quick Stats */}

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            24
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Wishlist
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            ₹1.28L
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Total Spent
          </p>
        </div>

      </div>

      {/* Button */}

      <Link
        href="/account/settings"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition hover:bg-orange-700"
      >
        <UserPen size={18} />
        Edit Profile
      </Link>

    </section>
  );
}