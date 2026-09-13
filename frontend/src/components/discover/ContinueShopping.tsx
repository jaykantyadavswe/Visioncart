import ProductSection from "./ProductSection";

const historyProducts = [
  {
    id: 9,
    title: "Nike Revolution 7",
    category: "Footwear",
    brand: "Nike",
    image: "/products/shoes.jpg",
    price: 5999,
    originalPrice: 7499,
    rating: 4.7,
    reviews: 142,
    badge: "Viewed",
  },
  {
    id: 10,
    title: "Apple AirPods Pro",
    category: "Audio",
    brand: "Apple",
    image: "/products/airpods.jpg",
    price: 22999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 612,
    badge: "Recent",
  },
  {
    id: 11,
    title: "Samsung Galaxy Watch",
    category: "Wearables",
    brand: "Samsung",
    image: "/products/watch.jpg",
    price: 18999,
    originalPrice: 20999,
    rating: 4.8,
    reviews: 243,
    badge: "Viewed",
  },
  {
    id: 12,
    title: "Sony WH-1000XM5",
    category: "Audio",
    brand: "Sony",
    image: "/products/headphones.jpg",
    price: 24999,
    originalPrice: 27999,
    rating: 4.9,
    reviews: 401,
    badge: "Continue",
  },
];

export default function ContinueShopping() {
  return (
    <ProductSection
      badge="🕒 Continue Shopping"
      title="Pick Up Where You Left Off"
      description="Products you've recently viewed or explored."
      products={historyProducts}
    />
  );
}