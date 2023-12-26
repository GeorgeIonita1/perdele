import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { footerLinks } from "@/lib/utils";
import Link from "next/link";

function NavigationMobile() {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size='icon'>m</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Categories</SheetTitle>
                    <SheetDescription>
                        Select a category
                    </SheetDescription>
                    </SheetHeader>
                    {footerLinks[2].lines.map((el: string, idx: number): any => (
                        <SheetClose key={idx} asChild className="block">
                            <Link href='/test'>
                                <Button variant='link'>{el}</Button>
                            </Link>
                        </SheetClose>
                    ))}
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export default NavigationMobile;
