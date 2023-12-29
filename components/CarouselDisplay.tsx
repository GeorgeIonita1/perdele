'use client'

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import CardMain from "./CardMain";
import { dummyData } from "@/lib/utils";
import { useRef } from "react";

function CarouselDisplay() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <Carousel
            className="relative"
            opts={{ align: "start" }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {dummyData.map((data: DummyData, idx: number): any => (
                    <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                        <CardMain data={data} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CarouselDisplay;
