"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowDownUp,
  ChevronDown,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Offer from "@/components/Offer/Offer";
import Container from "@/components/ui/Container";
import WishlistButton from "@/components/wishlist/WishlistButton";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { shopCatalog } from "@/app/lib/shopCatalog";

type Product = {
  id: number;
  title: string;
  category: string;
  brand: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
};

const catalog: Product[] = [
  { id: 1, title: "HP 15s Core i3 Laptop", category: "Electronics", brand: "HP", image: "/Products/image.png", price: 42999, originalPrice: 52999, rating: 4.7, reviews: 186, badge: "Best value" },
  { id: 2, title: "Samsung Galaxy F07", category: "Electronics", brand: "Samsung", image: "/Products/image1.png", price: 8499, originalPrice: 9999, rating: 4.5, reviews: 312, badge: "New" },
  { id: 3, title: "Handcrafted Black Loafers", category: "Fashion", brand: "Urban Walk", image: "/Products/image2.png", price: 1899, originalPrice: 2499, rating: 4.6, reviews: 94, badge: "Trending" },
  { id: 4, title: "Sony WH-1000XM5", category: "Audio", brand: "Sony", image: "/Products/image3.png", price: 24999, originalPrice: 29999, rating: 4.9, reviews: 203, badge: "Top rated" },
  { id: 5, title: "Apple Watch Series 9", category: "Wearables", brand: "Apple", image: "/Products/image4.png", price: 36999, originalPrice: 44999, rating: 4.8, reviews: 128, badge: "Limited deal" },
  { id: 6, title: "iPhone 15 Pro", category: "Electronics", brand: "Apple", image: "/Products/image5.png", price: 109999, originalPrice: 129999, rating: 4.9, reviews: 447, badge: "Bestseller" },
  { id: 7, title: "Classic Rose Polo Shirt", category: "Fashion", brand: "Mavryk", image: "/Products/image6.png", price: 1299, originalPrice: 1799, rating: 4.4, reviews: 76, badge: "Just in" },
];

const categories = ["All products", "Electronics", "Fashion", "Audio", "Wearables"];

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export default function ShopPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All products");
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const router = useRouter();

  const visibleProducts = useMemo(() => {
    const filtered = catalog.filter((product) => {
      const matchesCategory = category === "All products" || product.category === category;
      const searchable = `${product.title} ${product.brand} ${product.category}`.toLowerCase();
      return matchesCategory && searchable.includes(query.toLowerCase());
    });

    return [...filtered].sort((first, second) => {
      if (sort === "price-low") return first.price - second.price;
      if (sort === "price-high") return second.price - first.price;
      if (sort === "rating") return second.rating - first.rating;
      return first.id - second.id;
    });
  }, [category, query, sort]);

  const handleProductClick = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    const card = (event.target as HTMLElement).closest("article");
    const title = card?.querySelector("h2")?.textContent;
    const product = catalog.find((item) => item.title === title);
    if (product) router.push(`/products/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <Offer />
      <Navbar />

      <main>
        <section className="border-b border-slate-200 bg-white">
          <Container>
            <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-end lg:justify-between lg:py-16">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-600">The VisionCart edit</p>
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Shop what fits your world.</h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">A considered collection of everyday upgrades, from pocket-sized essentials to the things that make home feel better.</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500"><ShoppingBag size={18} className="text-orange-500" /><span><strong className="text-slate-900">{catalog.length}</strong> products, ready to ship</span></div>
            </div>
          </Container>
        </section>

        <Container className="py-8 lg:py-12">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, brands, categories" className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100" />
              {query && <button onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><X size={17} /></button>}
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="inline-flex h-12 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 lg:hidden"><SlidersHorizontal size={17} /> Filters</button>
              <label className="relative flex h-12 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700"><ArrowDownUp size={17} className="text-orange-500" /><span className="hidden sm:inline">Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products" className="cursor-pointer appearance-none bg-transparent pr-5 outline-none"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select><ChevronDown size={15} className="pointer-events-none absolute right-3 text-slate-400" /></label>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <aside className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}>
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between"><h2 className="font-semibold text-slate-950">Browse by</h2>{category !== "All products" && <button onClick={() => setCategory("All products")} className="text-xs font-semibold text-orange-600 hover:text-orange-700">Clear</button>}</div>
                <div className="mt-5 space-y-1">{categories.map((item) => <button key={item} onClick={() => { setCategory(item); setMobileFiltersOpen(false); }} className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${category === item ? "bg-orange-50 font-semibold text-orange-700" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>{item}<span className="text-xs text-slate-400">{item === "All products" ? catalog.length : catalog.filter((product) => product.category === item).length}</span></button>)}</div>
                <div className="mt-8 border-t border-slate-100 pt-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Shopping promise</p><ul className="mt-4 space-y-3 text-sm leading-5 text-slate-500"><li>Free shipping over ₹999</li><li>7-day easy returns</li><li>Secure checkout, always</li></ul></div>
              </div>
            </aside>

            <section aria-label="Product results" onClick={handleProductClick}>
              <div className="mb-5 flex items-center justify-between"><p className="text-sm text-slate-500">Showing <strong className="text-slate-900">{visibleProducts.length}</strong> results{category !== "All products" && <> in <strong className="text-slate-900">{category}</strong></>}</p></div>
              {visibleProducts.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{visibleProducts.map((product) => { const discount = Math.round((1 - product.price / product.originalPrice) * 100); const cartProduct = shopCatalog.find((item) => item.id === product.id); return <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]"><div className="relative aspect-[1.05] overflow-hidden bg-slate-100"><Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 30vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur">{product.badge}</span><WishlistButton productId={product.id} title={product.title} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:scale-105 hover:text-orange-600" /></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">{product.brand} · {product.category}</p><h2 className="mt-2 min-h-14 text-lg font-semibold leading-7 text-slate-950">{product.title}</h2><div className="mt-3 flex items-center gap-2 text-sm"><Star size={15} className="fill-amber-400 text-amber-400" /><span className="font-semibold text-slate-800">{product.rating}</span><span className="text-slate-400">({product.reviews})</span></div><div className="mt-4 flex items-baseline gap-2"><span className="text-xl font-bold text-slate-950">{formatPrice(product.price)}</span><span className="text-sm text-slate-400 line-through">{formatPrice(product.originalPrice)}</span><span className="text-xs font-bold text-emerald-600">{discount}% off</span></div>{cartProduct && <AddToCartButton product={cartProduct} className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-orange-600" />}</div></article>; })}</div> : <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"><Search size={30} className="mx-auto text-slate-300" /><h2 className="mt-4 text-lg font-semibold text-slate-900">No products found</h2><p className="mt-2 text-sm text-slate-500">Try another search or clear the category filter.</p><button onClick={() => { setQuery(""); setCategory("All products"); }} className="mt-5 text-sm font-semibold text-orange-600">Clear all filters</button></div>}
            </section>
          </div>
        </Container>
      </main>

      <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Fresh to the shelves</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">New Arrivals</h2>
              <p className="mt-2 text-sm text-slate-500">The latest pieces we think you will want first.</p>
            </div>
            <button onClick={() => { setCategory("All products"); setSort("featured"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hidden text-sm font-semibold text-orange-600 hover:text-orange-700 sm:block">Browse all products</button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {catalog.filter((product) => [2, 3, 5, 7].includes(product.id)).map((product) => (
              <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[1.15] overflow-hidden rounded-2xl bg-white">
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-orange-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">New</span>
                </div>
                <div className="px-2 pb-2 pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{product.brand}</p>
                  <h3 className="mt-1 font-semibold text-slate-900">{product.title}</h3>
                  <div className="mt-3 flex items-center justify-between"><span className="font-bold text-slate-950">{formatPrice(product.price)}</span><span className="flex items-center gap-1 text-xs text-slate-500"><Star size={13} className="fill-amber-400 text-amber-400" /> {product.rating}</span></div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f8fa] py-16 lg:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Loved by shoppers</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Best Sellers</h2>
              <p className="mt-2 text-sm text-slate-500">Reliable favourites with the reviews to prove it.</p>
            </div>
            <button onClick={() => { setSort("rating"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hidden text-sm font-semibold text-orange-600 hover:text-orange-700 sm:block">Sort by rating</button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {catalog.filter((product) => [6, 4, 1].includes(product.id)).map((product, index) => (
              <article key={product.id} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                  <Image src={product.image} alt={product.title} fill sizes="112px" className="object-cover" />
                  <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">{index + 1}</span>
                </div>
                <div className="min-w-0 py-1"><p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">{product.category}</p><h3 className="mt-2 line-clamp-2 font-semibold leading-6 text-slate-950">{product.title}</h3><div className="mt-3 flex items-center gap-2"><span className="font-bold text-slate-950">{formatPrice(product.price)}</span><span className="flex items-center gap-1 text-xs text-slate-500"><Star size={13} className="fill-amber-400 text-amber-400" /> {product.rating}</span></div></div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}