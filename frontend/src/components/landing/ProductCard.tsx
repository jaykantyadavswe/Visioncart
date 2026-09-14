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
    <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_28px_55px_rgba(249,115,22,0.12)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-orange-100/80 via-amber-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={image || "/HeroSecImage/imagea.png"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />

        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
          aria-label="Add to wishlist"
        >
          <Heart
            size={18}
            className={`transition-all duration-300 ${
              liked ? "fill-red-500 text-red-500" : "text-slate-700 hover:text-red-500"
            }`}
          />
        </button>

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-md">
          20% OFF
        </span>
      </div>

      <div className="relative p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-orange-600">
            {category}
          </span>

          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-slate-700">{rating}</span>
          </div>
        </div>

        <h3 className="mt-4 line-clamp-2 text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
          {title}
        </h3>

        <p className="mt-2 text-sm font-medium text-emerald-600">Free Shipping</p>

        <div className="mt-5 flex items-end gap-2">
          <span className="text-2xl font-bold text-slate-900">₹{price.toLocaleString()}</span>
          <span className="pb-1 text-sm text-slate-400 line-through">
            ₹{Math.round(price * 1.2).toLocaleString()}
          </span>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
