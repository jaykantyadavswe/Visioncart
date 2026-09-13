import Container from "../ui/Container";
import ProductCard from "../shop/ProductCard";
import SectionHeader from "./SectionHeader";

const trendingProducts = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Footwear",
    brand: "Nike",
    image: "/products/shoes.jpg",
    price: 6999,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 210,
    badge: "Trending",
  },
  {
    id: 2,
    title: "Apple Watch",
    category: "Wearables",
    brand: "Apple",
    image: "/products/watch.jpg",
    price: 38999,
    originalPrice: 42999,
    rating: 4.9,
    reviews: 412,
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "Sony Headphones",
    category: "Audio",
    brand: "Sony",
    image: "/products/headphones.jpg",
    price: 24999,
    originalPrice: 28999,
    rating: 4.8,
    reviews: 176,
    badge: "Hot",
  },
  {
    id: 4,
    title: "MacBook Air",
    category: "Laptop",
    brand: "Apple",
    image: "/products/laptop.jpg",
    price: 114999,
    originalPrice: 124999,
    rating: 4.9,
    reviews: 320,
    badge: "New",
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-20">
      <Container>

        <SectionHeader
          badge="🔥 Trending"
          title="Trending Products"
          description="Most popular products customers are buying right now."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}