'use client'

import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductPreview from "./ProductPreview";
import LoadingSun from "./LoadingSun";

function CarouselDisplay() {
    const [products, setProducts] = useState<Product[] | null>(null);

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const loadData = () => {
        return (
            products ? (
                products.map(data => (
                    <CarouselItem key={data.id} className="md:basis-1/2 lg:basis-1/3">
                        <ProductPreview data={data} />
                    </CarouselItem>
                ))
            ) : (
                Array(3).fill('4').map((el, idx) => (
                    <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                        <LoadingSun />
                    </CarouselItem>
                ))
            )
        );
    }

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
                {loadData()}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CarouselDisplay;
