import CarouselDisplay from "@/components/CarouselDisplay";
import HeroDisplay from "@/components/HeroDisplay";
import HighlightDisplay from "@/components/HighlightDisplay";
import ListDisplay from "@/components/ListDisplay";
import { heroBanners } from "@/lib/utils";

export default function Home() {
  const banner1 = heroBanners[0];
  const banner2 = heroBanners[1];

  return (
    <>
      <HeroDisplay data={banner1} />

      <section className="container wrapper">
        <HighlightDisplay />
      </section>

      <section className="container wrapper px-20 mt-20">
        <CarouselDisplay />
      </section>

      <HeroDisplay data={banner2} />

      <section className="container wrapper">
        <ListDisplay />
      </section>
    </>
  )
}
