'use client'

import Image from "next/image";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

import { fallbackText } from "@/lib/utils";

function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res.data))
            .catch(res => console.error('failed to fetch single product'))
    }, [])

    return (
        <div className="md:grid md:grid-cols-12 md:gap-16">
            <div className="col-span-5 aspect-square">
                <Image
                    alt={product?.alt_text ?? fallbackText}
                    src={product?.thumbnail ?? ''}
                    height={768}
                    width={768}
                />
            </div>
            <div className="col-span-7 flex flex-col gap-12 max-md:mt-6">
                <h1 className="font-extrabold text-4xl">{product?.title}</h1>
                <p>{product?.description}</p>
                <h4 className="block font-bold text-xl">{product?.price}</h4>
                <div className="flex flex-col gap-2">
                    <small>SKU: 38495</small>
                    <small>Brand: Nutline</small>
                    <small>Category: Face</small>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
