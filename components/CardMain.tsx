import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

function CardMain({ data }: CardMainProps) {
    return (
        <Card className="max-md:max-w-screen-md max-md:mb-4">
            <CardContent className="p-0">
                <Image alt="Imagine cu perdele" src={data.imaSrc} width={768} height={768} />
            </CardContent>
            <CardFooter className="justify-center pt-2">
                <div>
                    <Link href='/detail/2'>
                        <h3 className="block font-bold text-lg">{data.title}</h3>
                    </Link>
                    <span className="block">{data.price} <s>{data.oldPrice}</s></span>
                </div>
            </CardFooter>
        </Card>
    );
}

export default CardMain;
