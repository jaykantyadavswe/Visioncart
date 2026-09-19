import Hero from "@/components/landing/Hero";
import Navbar from "@/components/layout/Navbar";
import Categories from "@/components/landing/Categories";
import Trending from "@/components/landing/Trending";
import NewArrivels from "@/components/landing/NewArrivels";
import Bestseller from "@/components/landing/Bestseller";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";
import Offer from "@/components/Offer/Offer";

export default function Home() {
  return (
    <>
      <Offer />
      <Navbar />
      <Hero />
      <Categories />
      <Trending />
      <NewArrivels />
      <Bestseller />
      <CTA />
      <Footer />
    </>
  );
}
