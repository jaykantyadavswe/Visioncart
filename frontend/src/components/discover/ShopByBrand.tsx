import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";

const brands = [
  {
    id: 1,
    name: "Apple",
    logo: "/brands/apple.png",
    products: "245 Products",
    href: "/brands/apple",
  },
  {
    id: 2,
    name: "Nike",
    logo: "/brands/nike.png",
    products: "380 Products",
    href: "/brands/nike",
  },
  {
    id: 3,
    name: "Samsung",
    logo: "/brands/samsung.png",
    products: "190 Products",
    href: "/brands/samsung",
  },
  {
    id: 4,
    name: "Sony",
    logo: "/brands/sony.png",
    products: "156 Products",
    href: "/brands/sony",
  },
  {
    id: 5,
    name: "Adidas",
    logo: "/brands/adidas.png",
    products: "275 Products",
    href: "/brands/adidas",
  },
  {
    id: 6,
    name: "Puma",
    logo: "/brands/puma.png",
    products: "142 Products",
    href: "/brands/puma",
  },
];

export default function ShopByBrand() {
  return (
    <section className="py-20">
      <Container>

        <SectionHeader
          badge="🏷 Brands"
          title="Shop by Brand"
          description="Browse products from your favorite global brands."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {brands.map((brand) => (

            <Link
              key={brand.id}
              href={brand.href}
              className="
                group
                flex
                items-center
                gap-5
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500
                hover:shadow-xl
              "
            >

              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-slate-100">

                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-4"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold">
                  {brand.name}
                </h3>

                <p className="mt-2 text-slate-500">
                  {brand.products}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </Container>
    </section>
  );
}