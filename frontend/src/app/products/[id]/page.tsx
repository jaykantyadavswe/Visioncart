import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Offer from "@/components/Offer/Offer";
import Container from "@/components/ui/Container";
import ProductDetailActions from "@/components/product/ProductDetailActions";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { formatPrice, shopCatalog } from "@/app/lib/shopCatalog";

export function generateStaticParams() {
  return shopCatalog.map((product) => ({ id: String(product.id) }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = shopCatalog.find((item) => item.id === Number(id));

  if (!product) notFound();

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <Offer />
      <Navbar />
      <main>
        <Container className="py-8 lg:py-12">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-orange-600"><ArrowLeft size={16} /> Back to shop</Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <Image src={product.image} alt={product.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8 transition duration-500 hover:scale-105 sm:p-14" />
              <span className="absolute left-5 top-5 rounded-full bg-orange-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">{product.badge}</span>
            </div>

            <section className="rounded-[32px] border border-slate-200 bg-white p-6 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">{product.brand} · {product.category}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">{product.title}</h1>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm"><span className="flex items-center gap-1 font-semibold"><Star size={17} className="fill-amber-400 text-amber-400" /> {product.rating}</span><span className="text-slate-400">({product.reviews} verified reviews)</span><span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">In stock</span></div>
              <div className="mt-8 flex flex-wrap items-baseline gap-3"><span className="text-4xl font-bold text-slate-950">{formatPrice(product.price)}</span><span className="text-lg text-slate-400 line-through">{formatPrice(product.originalPrice)}</span><span className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-red-600">{discount}% off</span></div>
              <p className="mt-6 leading-7 text-slate-600">A carefully selected {product.category.toLowerCase()} essential from {product.brand}, chosen for dependable quality and everyday value.</p>

              <ProductDetailActions id={product.id} title={product.title} />

              <div className="mt-8 grid gap-4 border-t border-slate-100 pt-7 sm:grid-cols-2"><div className="flex gap-3 text-sm text-slate-600"><Truck size={19} className="shrink-0 text-orange-500" /><span>Free shipping on orders over ₹999</span></div><div className="flex gap-3 text-sm text-slate-600"><span className="text-orange-500">↺</span><span>7-day easy returns</span></div></div>
            </section>
          </div>

          <ProductTabs />
        </Container>
      </main>
      <RelatedProducts />
      <Footer />
    </div>
  );
}
