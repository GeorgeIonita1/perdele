import CardMain from "@/components/CardMain";
import CarouselDisplay from "@/components/CarouselDisplay";
import HeroDisplay from "@/components/HeroDisplay";
import HighlightDisplay from "@/components/HighlightDisplay";
import { dummyData } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <HeroDisplay />
      <div className="container wrapper">
        <HighlightDisplay />
      </div>

      <div className="container wrapper px-20 mt-20">
        <CarouselDisplay />
      </div>

      <div className="container wrapper min-h-screen grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
      {dummyData.map((data: DummyData, idx: number): any => (
        <CardMain key={idx} data={data} />
      ))}
      </div>
    </>
  )
}
