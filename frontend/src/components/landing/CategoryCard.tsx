import Link from "next/link";
interface CategoryCardProps {
    title: string;
    icon: React.ReactNode;
    products: string;
    href: string;
}

export default function CategoryCard({
    title,
    icon,
    href,
    products,
}: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="group rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
        >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                {icon}
            </div>

            <h3 className="mt-5 text-lg font-semibold text-zinc-800">
                {title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
                {products}
            </p>
        </Link>
    );
}