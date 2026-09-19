export type ShopProduct = {
  id: number;
  title: string;
  category: string;
  brand: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  collections: Array<"trending" | "newArrivals" | "bestSellings">;
};

export const shopCatalog: ShopProduct[] = [
  { id: 1, title: "HP 15s Core i3 Laptop", category: "Electronics", brand: "HP", image: "/Products/image.png", price: 42999, originalPrice: 52999, rating: 4.7, reviews: 186, badge: "Best value", collections: ["bestSellings"] },
  { id: 2, title: "Samsung Galaxy F07", category: "Electronics", brand: "Samsung", image: "/Products/image1.png", price: 8499, originalPrice: 9999, rating: 4.5, reviews: 312, badge: "New", collections: ["newArrivals"] },
  { id: 3, title: "Handcrafted Black Loafers", category: "Fashion", brand: "Urban Walk", image: "/Products/image2.png", price: 1899, originalPrice: 2499, rating: 4.6, reviews: 94, badge: "Trending", collections: ["trending", "newArrivals"] },
  { id: 4, title: "Sony WH-1000XM5", category: "Audio", brand: "Sony", image: "/Products/image3.png", price: 24999, originalPrice: 29999, rating: 4.9, reviews: 203, badge: "Top rated", collections: ["trending", "bestSellings"] },
  { id: 5, title: "Apple Watch Series 9", category: "Wearables", brand: "Apple", image: "/Products/image4.png", price: 36999, originalPrice: 44999, rating: 4.8, reviews: 128, badge: "Limited deal", collections: ["newArrivals"] },
  { id: 6, title: "iPhone 15 Pro", category: "Electronics", brand: "Apple", image: "/Products/image5.png", price: 109999, originalPrice: 129999, rating: 4.9, reviews: 447, badge: "Bestseller", collections: ["trending", "bestSellings"] },
  { id: 7, title: "Classic Rose Polo Shirt", category: "Fashion", brand: "Mavryk", image: "/Products/image6.png", price: 1299, originalPrice: 1799, rating: 4.4, reviews: 76, badge: "Just in", collections: ["newArrivals"] },
  { id: 8, title: "Radiance Glow Skincare Set", category: "Beauty", brand: "Luma", image: "/shopbycategories/beauti.jpg", price: 1899, originalPrice: 2499, rating: 4.8, reviews: 142, badge: "Bestseller", collections: ["bestSellings", "trending"] },
  { id: 9, title: "Hydrating Beauty Essentials", category: "Beauty", brand: "Noura", image: "/shopbycategories/beauti2.jpg", price: 1299, originalPrice: 1699, rating: 4.6, reviews: 88, badge: "New", collections: ["newArrivals"] },
];

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;