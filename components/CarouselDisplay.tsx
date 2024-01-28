'use client'

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductPreview from "./ProductPreview";

function CarouselDisplay() {
    const [products, setProducts] = useState<Product[] | null>(null);

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(res => setProducts(res.data))
            .catch(res => console.error('failed to fetch data'))
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
                {products?.map(data => (
                    <CarouselItem key={data.id} className="md:basis-1/2 lg:basis-1/3">
                        <ProductPreview data={data} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CarouselDisplay;
