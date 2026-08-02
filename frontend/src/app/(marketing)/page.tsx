import Hero from "@/components/landing/Hero";
import Navbar from "@/components/layout/Navbar";
import States from "@/components/landing/States";
import Image from "next/image";
import Categories from "@/components/landing/Categories";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";
import Offer from "@/components/Offer/Offer";

export default function Home() {
  return (
    <>
      <Offer />
      <Navbar />
      <Hero />
      <States />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
