import StatsCards from "./StatsCards";
import RecentOrders from "./RecentOrders";
import WishlistPreview from "./WishlistPreview";
import AddressPreview from "./AddressPreview";
import RecentActivity from "./RecentActivity";
import ProfileCard from "./ProfileCard";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">

      <StatsCards />

      <RecentOrders />

      <div className="grid gap-8 lg:grid-cols-2">
        <WishlistPreview />
        <AddressPreview />
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.6fr_420px]">
        <RecentActivity />
        <ProfileCard />
      </div>

    </div>
  );
}