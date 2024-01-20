'use client'

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import CardMain from "./CardMain";

function CarouselDisplay() {
    const [products, setProducts] = useState<Product[] | null>(null);

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(res => setProducts(res.data))
            .catch(res => console.log('failed to fetch data'))
    }, [])

    return (
        <Carousel
            className="relative"
            opts={{ align: "start" }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {products?.map((data, idx) => (
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
