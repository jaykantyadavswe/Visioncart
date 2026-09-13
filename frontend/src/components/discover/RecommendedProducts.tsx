import ProductSection from "./ProductSection";

const products = [
  {
    id: 5,
    title: "AirPods Pro",
    category: "Audio",
    brand: "Apple",
    image: "/products/airpods.jpg",
    price: 21999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 410,
    badge: "Recommended",
  },
  {
    id: 6,
    title: "Galaxy Watch",
    category: "Wearables",
    brand: "Samsung",
    image: "/products/watch.jpg",
    price: 18999,
    originalPrice: 22999,
    rating: 4.8,
    reviews: 220,
    badge: "Top Pick",
  },
  {
    id: 7,
    title: "Canon Camera",
    category: "Camera",
    brand: "Canon",
    image: "/products/camera.jpg",
    price: 64999,
    originalPrice: 69999,
    rating: 4.8,
    reviews: 170,
    badge: "Popular",
  },
  {
    id: 8,
    title: "Gaming Mouse",
    category: "Accessories",
    brand: "Logitech",
    image: "/products/mouse.jpg",
    price: 3999,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 124,
    badge: "-20%",
  },
];

export default function RecommendedProducts() {
  return (
    <ProductSection
      badge="⭐ Recommended"
      title="Recommended For You"
      description="Handpicked products based on your interests."
      products={products}
    />
  );
}