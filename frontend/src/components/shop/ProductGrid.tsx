import ProductCard from "./ProductCard";

interface ProductGridProps {
  collection?: string;
  category?: string;
  brand?: string;
  search?: string;
}


const allProducts = [
  {
    id: 1,
    title: "iPhone 16 Pro",
    category: "Smartphones",
    brand: "Apple",
    image: "/products/iphone.jpg",
    price: 129999,
    originalPrice: 139999,
    rating: 4.9,
    reviews: 124,
    badge: "Trending",
    collection: "trending",
  },
  {
    id: 2,
    title: "Nike Air Max",
    category: "Footwear",
    brand: "Nike",
    image: "/products/shoes.jpg",
    price: 8999,
    originalPrice: 9999,
    rating: 4.8,
    reviews: 83,
    badge: "New",
    collection: "new-arrivals",
  },
  {
    id: 3,
    title: "Sony Headphones",
    category: "Audio",
    brand: "Sony",
    image: "/products/headphones.jpg",
    price: 24999,
    originalPrice: 28999,
    rating: 4.9,
    reviews: 203,
    badge: "Flash Deal",
    collection: "flash-deals",
  },
  {
    id: 4,
    title: "MacBook Air M3",
    category: "Laptops",
    brand: "Apple",
    image: "/products/laptop.jpg",
    price: 114999,
    originalPrice: 124999,
    rating: 5,
    reviews: 98,
    badge: "Premium",
    collection: "premium",
  },
];

export default function ProductGrid({
  collection,
  brand,
  category,
  search,
}: ProductGridProps) {
  const filteredProducts = allProducts.filter((product) => {
    if (collection && product.collection !== collection) return false;

    if (
      brand &&
      product.brand.toLowerCase() !== brand.toLowerCase()
    )
      return false;

    if (
      category &&
      product.category.toLowerCase() !== category.toLowerCase()
    )
      return false;

    if (
      search &&
      !product.title.toLowerCase().includes(search.toLowerCase())
    )
      return false;

    return true;
  });

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}