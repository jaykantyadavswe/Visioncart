"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShoppingBag, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Offer from "@/components/Offer/Offer";
import Container from "@/components/ui/Container";
import { formatPrice, ShopProduct, shopCatalog } from "@/app/lib/shopCatalog";
import WishlistButton from "@/components/wishlist/WishlistButton";

type CollectionKey = "trending" | "newArrivals" | "bestSellings";

const collectionDetails: Record<CollectionKey, { title: string; eyebrow: string; description: string }> = {
  trending: { title: "Trending now", eyebrow: "What is getting attention", description: "The products shoppers are discovering, saving, and adding to cart right now." },
  newArrivals: { title: "New arrivals", eyebrow: "Fresh to VisionCart", description: "The newest additions to our catalog, selected to give your everyday routine a smart refresh." },
  bestSellings: { title: "Best sellers", eyebrow: "Loved by shoppers", description: "Reliable customer favourites with the ratings and repeat orders to back them up." },
};

const nextCollection: Record<CollectionKey, { key: CollectionKey; title: string; description: string }> = {
  newArrivals: { key: "trending", title: "Trending now", description: "See what shoppers are discovering right now." },
  trending: { key: "bestSellings", title: "Best sellers", description: "Reliable favourites with the ratings to back them up." },
  bestSellings: { key: "newArrivals", title: "New arrivals", description: "Fresh additions selected for your next upgrade." },
};

export default function CollectionPage({ collection, products }: { collection: CollectionKey; products: ShopProduct[] }) {
  const router = useRouter();
  const details = collectionDetails[collection];
  const recommendation = nextCollection[collection];
  const recommendedProducts = shopCatalog
    .filter((product) => product.collections.includes(recommendation.key))
    .slice(0, 4);

  const handleProductClick = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    const card = (event.target as HTMLElement).closest("article");
    const title = card?.querySelector("h2")?.textContent;
    const product = products.find((item) => item.title === title);
    if (product) router.push(`/products/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <Offer />
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <Container>
            <div className="py-12 lg:py-16">
              <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-orange-600"><ArrowLeft size={16} /> Back to shop</Link>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-orange-600">{details.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">{details.title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">{details.description}</p>
            </div>
          </Container>
        </section>

        <Container className="py-10 lg:py-14" onClick={handleProductClick}>
          <div className="mb-6 flex items-center justify-between"><p className="text-sm text-slate-500"><strong className="text-slate-900">{products.length}</strong> products in this collection</p><Link href="/shop" className="text-sm font-semibold text-orange-600 hover:text-orange-700">Shop everything</Link></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
              return <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]">
                <div className="relative aspect-square overflow-hidden bg-slate-100"><Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur">{product.badge}</span><WishlistButton productId={product.id} title={product.title} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur hover:text-orange-600" /></div>
                <div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">{product.brand} · {product.category}</p><h2 className="mt-2 min-h-14 text-lg font-semibold leading-7 text-slate-950">{product.title}</h2><div className="mt-3 flex items-center gap-2 text-sm"><Star size={15} className="fill-amber-400 text-amber-400" /><span className="font-semibold">{product.rating}</span><span className="text-slate-400">({product.reviews})</span></div><div className="mt-4 flex items-baseline gap-2"><span className="text-xl font-bold">{formatPrice(product.price)}</span><span className="text-sm text-slate-400 line-through">{formatPrice(product.originalPrice)}</span></div><button onClick={() => toast.success(`${product.title} added to your cart`)} className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-orange-600"><ShoppingBag size={17} /> Add to cart</button></div>
              </article>;
            })}
          </div>
        </Container>
      </main>

      <section className="border-t border-slate-200 bg-white py-14 lg:py-18">
        <Container>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Keep exploring</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{recommendation.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{recommendation.description}</p>
            </div>
            <Link href={`/shop/${recommendation.key}`} className="hidden items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 sm:inline-flex">View collection <ArrowRight size={16} /></Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedProducts.map((product) => (
              <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">{product.brand}</p>
                  <h3 className="mt-1 line-clamp-2 min-h-12 font-semibold leading-6 text-slate-900">{product.title}</h3>
                  <div className="mt-3 flex items-center justify-between"><span className="font-bold text-slate-950">{formatPrice(product.price)}</span><span className="flex items-center gap-1 text-xs text-slate-500"><Star size={13} className="fill-amber-400 text-amber-400" /> {product.rating}</span></div>
                </div>
              </article>
            ))}
          </div>

          <Link href={`/shop/${recommendation.key}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 sm:hidden">View collection <ArrowRight size={16} /></Link>
        </Container>
      </section>
      <Footer />
    </div>
  );
}