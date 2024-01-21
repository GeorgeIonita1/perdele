import CarouselDisplay from "@/components/CarouselDisplay";
import HeroDisplay from "@/components/HeroDisplay";
import GridDisplay from "@/components/GridDisplay";
import ListDisplay from "@/components/ListDisplay";
import { heroBanners } from "@/lib/utils";

export default function Home() {
  const [banner1, banner2] = heroBanners;

  return (
    <>
      <HeroDisplay data={banner1} />

      <section className="container wrapper">
        <GridDisplay />
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
