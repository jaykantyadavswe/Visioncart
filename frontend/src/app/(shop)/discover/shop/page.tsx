import ShopHeader from "@/components/shop/ShopHeader";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";
import Container from "@/components/ui/Container";
import ActiveFilters from "@/components/shop/ActiveFilters";
import ProductToolbar from "@/components/shop/ProductToolbar";
import RecommendedProducts from "@/components/shop/RecommendedProducts";
import RecentlyViewed from "@/components/shop/RecentlyViewed";
import Newsletter from "@/components/shop/Newsletter";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    collection?: string;
    category?: string;
    brand?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <Container className="max-w-[1600px] py-10 bg-gradient-to-b from-orange-50 to-white">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
        <aside className="w-full lg:w-[18%] lg:min-w-[220px] lg:max-w-[260px]">
          <FilterSidebar />
        </aside>

        <div className="w-full lg:flex-1">
          <ShopHeader
            collection={params.collection}
            category={params.category}
            brand={params.brand}
            search={params.search}
          />

          <ActiveFilters />

          <ProductToolbar />

          <div className="space-y-8">
            <ProductGrid
              collection={params.collection}
              category={params.category}
              brand={params.brand}
              search={params.search}
            />

            <RecentlyViewed />

            <RecommendedProducts />

            <Newsletter />
          </div>
        </div>
      </div>
    </Container>
  );
}