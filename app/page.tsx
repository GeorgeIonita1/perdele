import { Suspense } from "react";

import CarouselDisplay from "@/components/CarouselDisplay";
import GridDisplay from "@/components/GridView/GridDisplay";
import GridLoading from "@/components/GridView/GridLoading";
import HeroDisplay from "@/components/HeroDisplay";
import ListDisplay from "@/components/ListDisplay/ListDisplay";
import ListLoading from "@/components/ListDisplay/ListLoading";
import ContactDisplay from "@/components/ContactDisplay";
import { heroBanners } from "@/lib/utils";

export default function Home() {
  const [banner1, banner2] = heroBanners;

  return (
    <>
      <HeroDisplay data={banner1} />

      <section className="container">
        <Suspense fallback={<GridLoading />}>
          <GridDisplay />
        </Suspense>
      </section>

      <section className="container px-20 mt-20">
        <CarouselDisplay />
      </section>

      <HeroDisplay data={banner2} />

      <section className="container">
        <Suspense fallback={<ListLoading />}>
          <ListDisplay />
        </Suspense>
      </section>

      <section className="container">
        <ContactDisplay />
      </section>
    </>
  )
}
