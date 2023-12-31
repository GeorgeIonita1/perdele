import { navigationLinks } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

function MainMenuMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="link" className="p-0">Menu</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Categories</SheetTitle>
                <SheetDescription>
                    Select a category
                </SheetDescription>
                </SheetHeader>
                {navigationLinks.map((el: NavigationLink, idx: number): any => (
                    <SheetClose key={idx} asChild className="block">
                        <Link href={el.path}>
                            <Button variant='link'>{el.name}</Button>
                        </Link>
                    </SheetClose>
                ))}
            </SheetContent>
        </Sheet>
    );
}

export default MainMenuMobile;
