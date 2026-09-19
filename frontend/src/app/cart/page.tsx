"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Offer from "@/components/Offer/Offer";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/app/lib/shopCatalog";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <Offer /><Navbar />
      <main>
        <section className="border-b border-slate-200 bg-white"><Container><div className="py-12 lg:py-16"><p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Your selection</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Shopping Cart</h1><p className="mt-4 text-base text-slate-500">Review your items before checkout.</p></div></Container></section>
        <Container className="py-10 lg:py-14">
          {items.length === 0 ? <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"><ShoppingBag size={38} className="mx-auto text-slate-300" /><h2 className="mt-5 text-xl font-semibold">Your cart is empty</h2><p className="mt-2 text-sm text-slate-500">Add something you love and it will appear here.</p><Link href="/shop" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">Continue shopping <ArrowRight size={16} /></Link></div> : <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">{items.map(({ product, quantity }) => <article key={product.id} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 sm:gap-6"><Link href={`/products/${product.id}`} className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-36 sm:w-36"><Image src={product.image} alt={product.title} fill sizes="144px" className="object-cover" /></Link><div className="min-w-0 flex-1"><p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">{product.brand} · {product.category}</p><Link href={`/products/${product.id}`}><h2 className="mt-2 font-semibold text-slate-950 hover:text-orange-600">{product.title}</h2></Link><p className="mt-2 font-bold text-slate-950">{formatPrice(product.price)}</p><div className="mt-4 flex items-center justify-between gap-3"><div className="flex items-center rounded-xl border border-slate-200"><button type="button" onClick={() => updateQuantity(product.id, quantity - 1)} aria-label="Decrease quantity" className="p-2 text-slate-500 hover:text-orange-600"><Minus size={15} /></button><span className="w-8 text-center text-sm font-semibold">{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, quantity + 1)} aria-label="Increase quantity" className="p-2 text-slate-500 hover:text-orange-600"><Plus size={15} /></button></div><button type="button" onClick={() => removeFromCart(product.id)} aria-label={`Remove ${product.title}`} className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={17} /></button></div></div></article>)}</div>
            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 lg:sticky lg:top-28"><h2 className="text-xl font-semibold">Order summary</h2><div className="mt-6 space-y-4 text-sm"><div className="flex justify-between text-slate-500"><span>Subtotal</span><span className="font-semibold text-slate-900">{formatPrice(subtotal)}</span></div><div className="flex justify-between text-slate-500"><span>Shipping</span><span className="font-semibold text-slate-900">{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div><div className="border-t border-slate-100 pt-4"><div className="flex justify-between text-base font-bold"><span>Total</span><span>{formatPrice(total)}</span></div></div></div><Link href="/checkout" className="mt-7 flex h-12 w-full items-center justify-center rounded-xl bg-orange-600 text-sm font-semibold text-white transition hover:bg-orange-500">Proceed to checkout</Link><p className="mt-4 text-center text-xs text-slate-400">Free shipping on orders over ₹999</p></aside>
          </div>}
        </Container>
      </main><Footer />
    </div>
  );
}
