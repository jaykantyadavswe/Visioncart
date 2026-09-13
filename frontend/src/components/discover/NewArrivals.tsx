import ProductSection from "./ProductSection";

const newArrivals = [
  {
    id: 13,
    title: "iPhone 16 Pro",
    category: "Smartphones",
    brand: "Apple",
    image: "/products/iphone.jpg",
    price: 129999,
    originalPrice: 139999,
    rating: 4.9,
    reviews: 95,
    badge: "New",
  },
  {
    id: 14,
    title: "Nike Pegasus 41",
    category: "Footwear",
    brand: "Nike",
    image: "/products/shoes.jpg",
    price: 8999,
    originalPrice: 9999,
    rating: 4.8,
    reviews: 58,
    badge: "Just Arrived",
  },
  {
    id: 15,
    title: "Sony Alpha Camera",
    category: "Camera",
    brand: "Sony",
    image: "/products/camera.jpg",
    price: 89999,
    originalPrice: 95999,
    rating: 4.9,
    reviews: 44,
    badge: "Latest",
  },
  {
    id: 16,
    title: "Mechanical Keyboard Pro",
    category: "Accessories",
    brand: "Keychron",
    image: "/products/keyboard.jpg",
    price: 7499,
    originalPrice: 8499,
    rating: 4.8,
    reviews: 71,
    badge: "New",
  },
];

export default function NewArrivals() {
  return (
    <ProductSection
      badge="🆕 New Arrivals"
      title="Fresh Picks for You"
      description="Discover the newest products just added to our store."
      products={newArrivals}
    />
  );
}