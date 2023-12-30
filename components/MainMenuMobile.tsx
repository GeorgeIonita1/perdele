import { footerLinks } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

function MainMenuMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">Menu</Button>
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
    );
}

export default MainMenuMobile;
