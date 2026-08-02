import ShopHero from "@/components/shop/ShopHero";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopActions from "@/components/shop/ShopActions";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";
import Container from "@/components/ui/Container";
import ActiveFilters from "@/components/shop/ActiveFilters";
import Pagination from "@/components/shop/Pagination";
import ProductToolbar from "@/components/shop/ProductToolbar";

export default function ShopPage() {
  return (
    <>
      {/* <ShopHeader /> */}


      <Container className="py-10 bg-gradient-to-b from-orange-50 to-white">

        <ShopHeader />

        <ShopActions />

        <ActiveFilters />

        <ProductToolbar />

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">

          <FilterSidebar />

          <div>

            <ProductGrid />
          </div>

        </div>

      </Container>
    </>
  );
}