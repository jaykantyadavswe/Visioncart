interface ProductPreviewCardProps {
  title: string;
  price: string;
  image: string;
}

export default function ProductPreviewCard({
  title,
  price,
  image
}: ProductPreviewCardProps) {
  return (
    <div className="w-45 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-25 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <h3 className="font-semibold text-zinc-800">
        {title}
      </h3>

      <div className="mt-1 flex items-center justify-between">
        <span className="font-bold text-zinc-600">
          {price}
        </span>

        <button className="rounded-lg bg-orange-600 px-3 py-1 text-sm text-white">
          View
        </button>
      </div>
    </div>
  );
}