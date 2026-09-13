"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    ShoppingCart,
    Star,
    Eye,
    Truck,
} from "lucide-react";

interface ProductCardProps {
    image: string;
    title: string;
    category: string;
    brand?: string;
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
    brand = "Premium Brand",
    price,
    originalPrice,
    rating,
    reviews,
    badge,
}: ProductCardProps) {

    return (
        <div
            className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            "
        >

            {/* Image Section */}
            <div className="relative overflow-hidden bg-slate-100">


                {/* Discount Badge */}
                {badge && (
                    <span className="
                    absolute
                    left-4
                    top-4
                    z-10
                    rounded-full
                    bg-orange-600
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-white
                    ">
                        {badge}
                    </span>
                )}


                {/* Wishlist */}
                <button
                    className="
                    absolute
                    right-4
                    top-4
                    z-10
                    rounded-full
                    bg-white
                    p-2.5
                    shadow-md
                    transition
                    hover:bg-orange-600
                    hover:text-white
                    "
                >
                    <Heart size={18}/>
                </button>


                {/* Product Image */}
                <Link href={`/products/${title.replace(/\s+/g, '-').toLowerCase()}`} className="relative block h-72 w-full overflow-hidden">

                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="
                        h-72
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-110
                        "
                    />

                </Link>


                {/* Quick View */}
                <div
                    className="
                    absolute
                    inset-x-4
                    bottom-4
                    translate-y-10
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    "
                >

                    <button
                        className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-white
                        py-3
                        font-semibold
                        text-slate-800
                        shadow-lg
                        "
                    >
                        <Eye size={18}/>
                        Quick View
                    </button>

                </div>


            </div>


            {/* Content */}
            <div className="p-5">


                {/* Category + Brand */}
                <div className="flex items-center justify-between">

                    <p className="text-sm font-semibold text-orange-600">
                        {category}
                    </p>


                    <p className="text-xs text-slate-400">
                        {brand}
                    </p>

                </div>


                {/* Title */}
                <Link href={`/products/${title.replace(/\s+/g, '-').toLowerCase()}`}>
                    <h3
                        className="
                        mt-3
                        line-clamp-2
                        text-lg
                        font-bold
                        text-slate-900
                        transition
                        hover:text-orange-600
                        "
                    >
                        {title}
                    </h3>

                </Link>



                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">

                    <div className="flex items-center gap-1">

                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="font-semibold">
                            {rating}
                        </span>

                    </div>


                    <span className="text-sm text-slate-500">
                        ({reviews})
                    </span>

                </div>



                {/* Price */}
                <div className="mt-4 flex items-center gap-3">

                    <span className="text-2xl font-bold text-slate-900">
                        ₹{price.toLocaleString()}
                    </span>


                    {originalPrice && (
                        <span
                            className="
                            text-sm
                            text-slate-400
                            line-through
                            "
                        >
                            ₹{originalPrice.toLocaleString()}
                        </span>
                    )}

                </div>



                {/* Color Variants */}
                <div className="mt-4 flex gap-2">

                    <span className="h-5 w-5 rounded-full bg-black ring-2 ring-slate-200"/>
                    <span className="h-5 w-5 rounded-full bg-blue-600"/>
                    <span className="h-5 w-5 rounded-full bg-gray-300"/>

                </div>



                {/* Delivery */}
                <div
                    className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-green-600
                    "
                >
                    <Truck size={15}/>
                    Free Delivery
                </div>



                {/* Add Cart */}
                <button
                    className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-orange-600
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-orange-700
                    "
                >

                    <ShoppingCart size={18}/>

                    Add to Cart

                </button>


            </div>

        </div>
    );
}