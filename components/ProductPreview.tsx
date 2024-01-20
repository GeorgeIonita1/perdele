// add typescript

import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

function ProductPreview({ data }: { data: any }) {
    return (
        <Link href='/product/2' className="p-1">
            <Card className="highlight-item max-md:max-w-screen-md max-md:mb-4">
                <CardContent className="card-main p-0">
                    <div className="overflow-hidden">
                        <Image alt="Imagine cu perdele" src={data?.thumbnail} width={768} height={768} />
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
