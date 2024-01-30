// add fallback image??

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "./ui/card";
import { fallbackText } from "@/lib/utils";

function ProductPreview({ data }: { data: Product }) {
    return (
        <Link href={`/product/${data.id}`} className="p-1">
            <Card className="aspect-square max-md:max-w-screen-md max-md:mb-4">
                <CardContent className="card-main p-0">
                    <div className="overflow-hidden">
                        <Image
                            alt={data.alt_text ?? fallbackText}
                            src={data?.thumbnail ?? ''}
                            width={768}
                            height={768}
                        />
                    </div>
                </CardContent>
                <CardFooter className="justify-center pt-2">
                    <div>
                        <h3 className="block font-bold text-lg">{data.title}</h3>
                        <span className="block">{data.price} RON</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}

export default ProductPreview;
