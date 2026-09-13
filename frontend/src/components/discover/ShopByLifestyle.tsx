import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";

const lifestyles = [
  {
    id: 1,
    title: "Gaming Setup",
    subtitle: "Consoles, Keyboards & Accessories",
    image: "/lifestyle/gaming.jpg",
    href: "/collections/gaming",
  },
  {
    id: 2,
    title: "Work From Home",
    subtitle: "Office Essentials",
    image: "/lifestyle/work.jpg",
    href: "/collections/work",
  },
  {
    id: 3,
    title: "Travel Essentials",
    subtitle: "Bags, Watches & More",
    image: "/lifestyle/travel.jpg",
    href: "/collections/travel",
  },
  {
    id: 4,
    title: "Fitness Gear",
    subtitle: "Health & Workout",
    image: "/lifestyle/fitness.jpg",
    href: "/collections/fitness",
  },
];

export default function ShopByLifestyle() {
  return (
    <section className="py-20">
      <Container>

        <SectionHeader
          badge="🌟 Lifestyle"
          title="Shop by Lifestyle"
          description="Discover curated collections designed around your everyday lifestyle."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {lifestyles.map((item) => (

            <Link
              key={item.id}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl"
            >

              <div className="relative h-[320px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-white/80">
                    {item.subtitle}
                  </p>

                  <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-orange-500 hover:text-white">
                    Explore Collection
                  </button>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </Container>
    </section>
  );
}