"use client";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
interface ProductCardProps {
    title: string;
    category: string;
    price: number;
    rating: number;
    image: string;
}

export default function ProductCard({
    title,
    category,
    price,
    rating,
    image,
}: ProductCardProps) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                    src="/HeroSecImage/imagea.png"
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Wishlist */}
                <button
                    onClick={() => setLiked(!liked)}
                    className="
    absolute top-4 right-4
    flex h-10 w-10 items-center justify-center
    rounded-full
    bg-white/90 backdrop-blur-md
    shadow-md
    transition-all duration-300
    hover:scale-110
  "
                >
                    <Heart
                        size={18}
                        className={`transition-all duration-300 ${liked
                            ? "fill-red-500 text-red-500"
                            : "text-slate-600 hover:text-red-500"
                            }`}
                    />
                </button>

                {/* Discount Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                    20% OFF
                </span>
            </div>

            {/* Product Info */}
            <div className="p-6">
                {/* Category + Rating */}
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                        {category}
                    </span>

                    <div className="flex items-center gap-1">
                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="text-sm font-medium text-slate-700">
                            {rating}
                        </span>
                    </div>
                </div>

                {/* Product Name */}
                <h3 className="mt-4 line-clamp-2 text-lg font-semibold text-slate-900 transition group-hover:text-orange-600">
                    {title}
                </h3>

                {/* Shipping */}
                <p className="mt-2 text-sm text-green-600">
                    Free Shipping
                </p>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                    <span className="text-2xl font-bold text-slate-900">
                        ₹{price.toLocaleString()}
                    </span>

                    <span className="text-sm text-slate-400 line-through">
                        ₹{Math.round(price * 1.2).toLocaleString()}
                    </span>

                    <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                        20% OFF
                    </span>
                </div>

                {/* Button */}
                <button
                    className="
      mt-6 flex w-full items-center justify-center gap-2
      rounded-xl bg-orange-600 py-3
      font-semibold text-white
      transition-all duration-300
      hover:bg-orange-700
      hover:shadow-lg
    "
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}