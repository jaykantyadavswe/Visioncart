import Container from "../ui/Container";
import ProductCard from "../shop/ProductCard";
import SectionHeader from "./SectionHeader";

interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
}

interface ProductSectionProps {
  badge: string;
  title: string;
  description: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductSection({
  badge,
  title,
  description,
  products,
  viewAllLink = "/shop",
}: ProductSectionProps) {
  return (
    <section className="py-20">
      <Container>

        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          href={viewAllLink}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
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