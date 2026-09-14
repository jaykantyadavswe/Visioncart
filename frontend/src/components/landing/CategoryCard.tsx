import Link from "next/link";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  products: string;
  href: string;
  image: string;
}

export default function CategoryCard({
  title,
  icon,
  href,
  products,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_24px_50px_rgba(249,115,22,0.12)]"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-orange-100/80 via-amber-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-inner ring-8 ring-white transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="text-orange-600 transition-colors duration-300 group-hover:text-white">
              {icon}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{products}</p>
        </div>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
          Shop Now
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}