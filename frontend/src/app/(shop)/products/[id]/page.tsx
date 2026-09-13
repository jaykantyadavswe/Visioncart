import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import Container from "@/components/ui/Container";
import ProductTabs from "@/components/product/ProductTabs";
export default function ProductDetailsPage() {
  return (
    <main className="bg-slate-50 py-10">
      <Container>

        <div className="grid gap-12 lg:grid-cols-2">
          <ProductGallery />
          <ProductInfo />
        </div>

        <ProductTabs />
        <RelatedProducts />
      </Container>
    </main>
  );
}