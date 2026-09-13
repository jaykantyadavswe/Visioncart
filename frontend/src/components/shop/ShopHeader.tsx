import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ShopHeaderProps {
  collection?: string;
  category?: string;
  brand?: string;
  search?: string;
}

export default function ShopHeader({
  collection,
  category,
  brand,
  search,
}: ShopHeaderProps) {
  let title = "All Products";
  let description = "Discover our latest products across every category.";

  if (collection === "trending") {
    title = "Trending Products";
    description = "Explore what's trending among shoppers.";
  }

  if (collection === "new-arrivals") {
    title = "New Arrivals";
    description = "Fresh products just added to our collection.";
  }

  if (collection === "flash-deals") {
    title = "Flash Deals";
    description = "Limited-time offers available now.";
  }

  if (collection === "premium") {
    title = "Premium Picks";
    description = "Carefully curated premium products.";
  }

  if (brand) {
    title = `${brand} Products`;
    description = `Browse all products from ${brand}.`;
  }

  if (category) {
    title = `${category} Collection`;
    description = `Explore the best ${category} products.`;
  }

  if (search) {
    title = `Search Results`;
    description = `Showing results for "${search}".`;
  }

  return (
    <div className="mb-10">

      {/* Breadcrumb */}

      <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">

        <Link href="/">Home</Link>

        <ChevronRight size={16} />

        <span>Shop</span>

        {title !== "All Products" && (
          <>
            <ChevronRight size={16} />
            <span className="font-medium text-slate-800">
              {title}
            </span>
          </>
        )}

      </div>

      {/* Heading */}

      <h1 className="text-4xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="mt-3 max-w-2xl text-slate-500">
        {description}
      </p>

    </div>
  );
}