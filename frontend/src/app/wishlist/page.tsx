"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShoppingBag, Star, Trash2 } from "lucide-react";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { formatPrice, shopCatalog } from "@/app/lib/shopCatalog";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Offer from "@/components/Offer/Offer";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const products = wishlist
    .map((id) => shopCatalog.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <Offer />
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <Container>
            <div className="py-12 lg:py-16">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Saved for later</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">My Wishlist</h1>
              <p className="mt-4 text-base text-slate-500">{products.length} {products.length === 1 ? "product" : "products"} saved for your next purchase.</p>
            </div>
          </Container>
        </section>

        <Container className="py-10 lg:py-14">
          {products.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
              <Heart size={36} className="mx-auto text-slate-300" />
              <h2 className="mt-5 text-xl font-semibold text-slate-950">Your wishlist is empty</h2>
              <p className="mt-2 text-sm text-slate-500">Save products you love and find them here later.</p>
              <Link href="/shop" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">Explore products <ArrowRight size={16} /></Link>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100"><Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition duration-500 hover:scale-105" /></div>
                  </Link>
                  <div className="px-2 pb-2 pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">{product.brand} · {product.category}</p>
                    <Link href={`/products/${product.id}`}><h2 className="mt-2 min-h-12 font-semibold leading-6 text-slate-900 hover:text-orange-600">{product.title}</h2></Link>
                    <div className="mt-3 flex items-center justify-between"><span className="font-bold text-slate-950">{formatPrice(product.price)}</span><span className="flex items-center gap-1 text-xs text-slate-500"><Star size={13} className="fill-amber-400 text-amber-400" /> {product.rating}</span></div>
                    <div className="mt-4 flex gap-2"><Link href={`/products/${product.id}`} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-orange-600"><ShoppingBag size={16} /> View product</Link><button type="button" onClick={() => removeFromWishlist(product.id)} aria-label={`Remove ${product.title} from wishlist`} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"><Trash2 size={16} /></button></div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
