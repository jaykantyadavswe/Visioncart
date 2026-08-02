import Image from "next/image";
import { Quote, Star } from "lucide-react";

interface Props {
  name: string;
  role: string;
  review: string;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  review,
  image,
}: Props) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl">
      
      <Quote
        size={34}
        className="text-orange-500"
      />

      <div className="mt-6 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-6 leading-7 text-slate-600">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-slate-900">
            {name}
          </h4>

          <p className="text-sm text-slate-500">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}