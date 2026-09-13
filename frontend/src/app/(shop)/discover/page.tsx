import DiscoverHero from "@/components/discover/DiscoverHero";
import TrendingProducts from "@/components/discover/TrendingProducts";
import RecommendedProducts from "@/components/discover/RecommendedProducts";
import ContinueShopping from "@/components/discover/ContinueShopping";
import FeaturedCollections from "@/components/discover/FeaturedCollections";
import NewArrivals from "@/components/discover/NewArrivals";
import FlashDeals from "@/components/discover/FlashDeals";
import ShopByBrand from "@/components/discover/ShopByBrand";
import ShopByLifestyle from "@/components/discover/ShopByLifestyle";
import PremiumPicks from "@/components/discover/PremiumPicks";
import FinalCTA from "@/components/discover/FinalCTA";

export default function DiscoverPage() {
    return (
        <main className="bg-slate-50">

            <DiscoverHero />

            <TrendingProducts />

            <RecommendedProducts />

            <NewArrivals />

            <FlashDeals />

            <ShopByBrand />

            <ShopByLifestyle />

            <PremiumPicks />

            <ContinueShopping />

            <FeaturedCollections />

            <FinalCTA/>

        </main>
    );
}