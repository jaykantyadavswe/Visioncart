import { notFound } from "next/navigation";
import CollectionPage from "@/components/shop/CollectionPage";
import { shopCatalog } from "@/app/lib/shopCatalog";

const collections = ["trending", "newArrivals", "bestSellings"] as const;

export function generateStaticParams() {
  return collections.map((collection) => ({ collection }));
}

export default async function CollectionRoute({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  if (!collections.includes(collection as (typeof collections)[number])) notFound();

  const collectionKey = collection as (typeof collections)[number];
  const products = shopCatalog.filter((product) => product.collections.includes(collectionKey));

  return <CollectionPage collection={collectionKey} products={products} />;
}