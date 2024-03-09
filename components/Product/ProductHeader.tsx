import Image from "next/image";
import { Star } from "lucide-react";

import { fallbackText } from "@/lib/utils";

function ProductDetailHeader({ product }: { product: Product }) {
    return (
        <section className="md:grid md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 aspect-square">
                <Image
                    alt={product?.alt_text ?? fallbackText}
                    src={product?.thumbnail ?? ''}
                    height={768}
                    width={768}
                />
            </div>
            <div className="col-span-7 max-md:mt-6">
                <h1 className="font-extrabold text-4xl">{product?.title}</h1>
                <h4 className="block font-bold text-xl mt-4">{product?.price} RON</h4>
                <p className="mt-16">{product?.description}</p>
                <div className="mt-3 flex gap-2 mt-16">
                    <span><Star /></span>
                    <span>(2 customer review)</span>
                </div>
                <div className="flex flex-col gap-2 mt-16">
                    <small>SKU: 38495</small>
                    <small>Brand: Nutline</small>
                    <small>Category: Face</small>
                </div>
            </div>
        </section>
    );
}

export default ProductDetailHeader;
