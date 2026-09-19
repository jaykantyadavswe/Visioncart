import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Gem, Home, Laptop, Shirt, Sparkles } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Offer from "@/components/Offer/Offer";
import Container from "@/components/ui/Container";

const categories = [
  { slug: "fashion", title: "Fashion", description: "Everyday pieces with a little more personality.", icon: Shirt, image: "/shopbycategories/pic1.jpg" },
  { slug: "electronics", title: "Electronics", description: "Smart tech for work, play, and everything between.", icon: Laptop, image: "/shopbycategories/headphones2.jpg" },
  { slug: "beauty", title: "Beauty", description: "Thoughtful essentials for your daily ritual.", icon: Sparkles, image: "/shopbycategories/beauti.jpg" },
  { slug: "fitness", title: "Fitness", description: "Equipment and essentials to keep moving.", icon: Dumbbell, image: "/shopbycategories/fitness.jpg" },
  { slug: "home-decor", title: "Home Decor", description: "Small details that make a space feel yours.", icon: Home, image: "/shopbycategories/homedecor.jpg" },
  { slug: "accessories", title: "Accessories", description: "Finishing touches for every kind of day.", icon: Gem, image: "/shopbycategories/headphones.jpg" },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <Offer />
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-white"><Container><div className="py-14 lg:py-20"><p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Shop your way</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Browse by category.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">Start with what you need and we will show you the products that belong there.</p></div></Container></section>
        <Container className="py-12 lg:py-16"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => { const Icon = category.icon; return <Link key={category.slug} href={`/categories/${category.slug}`} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]"><div className="relative aspect-[1.6] overflow-hidden rounded-2xl bg-slate-100"><Image src={category.image} alt={category.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-slate-950/15" /><span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-orange-600"><Icon size={19} /></span></div><div className="flex items-center justify-between px-1 pb-1 pt-5"><div><h2 className="text-xl font-semibold text-slate-950">{category.title}</h2><p className="mt-1 text-sm text-slate-500">{category.description}</p></div><ArrowRight size={19} className="text-orange-600 transition group-hover:translate-x-1" /></div></Link>; })}</div></Container>
      </main>
      <Footer />
    </div>
  );
}