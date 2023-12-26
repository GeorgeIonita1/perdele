import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

function CardMain() {
    return (
        <Card className="max-md:max-w-screen-md max-md:mb-4">
            <CardContent className="p-0">
                <Image alt="Imagine cu perdele" src='/perdele.jpg' width={768} height={768} />
            </CardContent>
            <CardFooter className="justify-center pt-2">
                <div>
                    <h3 className="block font-bold text-lg">Titlul vine aici</h3>
                    <span className="block">$150.00 <s>$200.00</s></span>
                </div>
            </CardFooter>
        </Card>
    );
}

export default CardMain;
