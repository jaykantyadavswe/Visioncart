import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  href?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  href = "/shop",
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-end justify-between">

      <div>

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          {badge}
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 text-slate-500">
          {description}
        </p>

      </div>

      <Link
        href={href}
        className="hidden items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:border-orange-500 hover:text-orange-600 md:flex"
      >
        View All
        <ArrowRight size={18} />
      </Link>

    </div>
  );
}