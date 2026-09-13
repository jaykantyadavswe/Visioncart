import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Trash2,
  Minus,
  Plus,
  Star,
} from "lucide-react";

interface CartItemProps {
  id: number;
  title: string;
  image: string;
  brand: string;
  category: string;
  price: number;
  quantity: number;
  rating: number;
}

export default function CartItem({
  id,
  title,
  image,
  brand,
  category,
  price,
  quantity,
  rating,
}: CartItemProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

      <div className="flex flex-col gap-6 md:flex-row">

        {/* Product Image */}

        <Link href={`/product/${id}`}>

          <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-100 md:w-40">

            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />

          </div>

        </Link>

        {/* Product Details */}

        <div className="flex flex-1 flex-col">

          <div className="flex flex-col justify-between gap-4 md:flex-row">

            <div>

              <p className="text-sm font-medium text-orange-600">
                {brand}
              </p>

              <Link href={`/product/${id}`}>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 hover:text-orange-600">
                  {title}
                </h3>
              </Link>

              <p className="mt-2 text-slate-500">
                {category}
              </p>

              <div className="mt-4 flex items-center gap-2">

                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="font-semibold">
                  {rating}
                </span>

              </div>

            </div>

            {/* Price */}

            <div className="text-left md:text-right">

              <p className="text-3xl font-bold text-slate-900">
                ₹{price.toLocaleString()}
              </p>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Quantity */}

            <div className="flex w-fit items-center rounded-xl border border-slate-300">

              <button className="p-3 hover:bg-slate-100">
                <Minus size={18} />
              </button>

              <span className="w-12 text-center font-semibold">
                {quantity}
              </span>

              <button className="p-3 hover:bg-slate-100">
                <Plus size={18} />
              </button>

            </div>

            {/* Actions */}

            <div className="flex items-center gap-6">

              <button className="flex items-center gap-2 text-slate-500 transition hover:text-orange-600">

                <Heart size={18} />

                Save

              </button>

              <button className="flex items-center gap-2 text-red-500 transition hover:text-red-600">

                <Trash2 size={18} />

                Remove

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}