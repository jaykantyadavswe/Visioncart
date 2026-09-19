import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Offer from "@/components/Offer/Offer";
import Container from "@/components/ui/Container";
import { formatPrice, shopCatalog } from "@/app/lib/shopCatalog";

const categoryNames: Record<string, string> = { fashion: "Fashion", electronics: "Electronics", beauty: "Beauty", fitness: "Fitness", "home-decor": "Home Decor", accessories: "Accessories", audio: "Audio", wearables: "Wearables" };

export function generateStaticParams() { return Object.keys(categoryNames).map((category) => ({ category })); }

export default async function CategoryProductsPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const title = categoryNames[category];
  if (!title) notFound();
  const products = shopCatalog.filter((product) => product.category.toLowerCase() === title.toLowerCase());

  return <div className="min-h-screen bg-[#f7f8fa] text-slate-900"><Offer /><Navbar /><main><section className="border-b border-slate-200 bg-white"><Container><div className="py-12 lg:py-16"><Link href="/categories" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-orange-600"><ArrowLeft size={16} /> All categories</Link><p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Category shopping</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">{title}</h1><p className="mt-4 text-base text-slate-500">{products.length} products selected for this category.</p></div></Container></section><Container className="py-10 lg:py-14">{products.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((product) => <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"><div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100"><Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" /><span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">{product.badge}</span></div><div className="px-2 pb-2 pt-4"><p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">{product.brand}</p><h2 className="mt-2 min-h-12 font-semibold leading-6 text-slate-900">{product.title}</h2><div className="mt-3 flex items-center justify-between"><span className="font-bold text-slate-950">{formatPrice(product.price)}</span><span className="flex items-center gap-1 text-xs text-slate-500"><Star size={13} className="fill-amber-400 text-amber-400" /> {product.rating}</span></div><button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-semibold text-white hover:bg-orange-600"><ShoppingBag size={16} /> Add to cart</button></div></article>)}</div> : <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center text-slate-500">No products are available in this category yet.</div>}</Container></main><Footer /></div>;
}