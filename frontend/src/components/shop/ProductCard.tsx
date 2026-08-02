"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
    image: string;
    title: string;
    category: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    badge?: string;
}

export default function ProductCard({
    image,
    title,
    category,
    price,
    originalPrice,
    rating,
    reviews,
    badge,
}: ProductCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}
            <div className="relative overflow-hidden bg-slate-100">

                {badge && (
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                        {badge}
                    </span>
                )}

                <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow transition hover:bg-orange-600 hover:text-white">
                    <Heart size={18} />
                </button>

                <Link href={`/product/${1}`}>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                </Link>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">

                    <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-800">
                        <Eye size={18} />
                        Quick View
                    </button>

                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                <p className="text-sm font-medium text-orange-600">
                    {category}
                </p>

                <h3 className="mt-2 line-clamp-2 text-lg font-bold text-slate-900">
                    {title}
                </h3>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">

                    <div className="flex items-center">
                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="ml-1 font-semibold">
                            {rating}
                        </span>
                    </div>

                    <span className="text-sm text-slate-500">
                        ({reviews} Reviews)
                    </span>

                </div>

                {/* Price */}
                <div className="mt-5 flex items-center gap-3">

                    <span className="text-2xl font-bold text-slate-900">
                        ₹{price.toLocaleString()}
                    </span>

                    {originalPrice && (
                        <span className="text-sm text-slate-400 line-through">
                            ₹{originalPrice.toLocaleString()}
                        </span>
                    )}

                </div>

                {/* Button */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700">
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>

            </div>

        </div>
    );
}