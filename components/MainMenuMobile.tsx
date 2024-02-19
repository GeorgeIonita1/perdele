import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { Menu } from "lucide-react";

import { navigationLinks } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

function MainMenuMobile() {
    const { sessionClaims }: any = auth();
    const isAdmin = sessionClaims?.metadata.role === "admin";

    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <Button variant="link" className="p-0">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetClose>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <Button variant='outline' className="w-full mt-8">
                                <SignInButton mode="modal" />
                            </Button>
                        </SignedOut>
                    </SheetClose>

                    <SheetTitle className="pt-10">Categories</SheetTitle>
                </SheetHeader>
                {navigationLinks.map((el: NavigationLink, idx: number): any => (
                    <SheetClose key={idx} asChild className="block">
                        <Link href={el.path}>
                            <Button variant='link'>{el.name}</Button>
                        </Link>
                    </SheetClose>
                ))}
                {isAdmin && (
                    <SheetClose asChild className="block">
                        <Link href='/admin'>
                            <Button variant='link'>Admin</Button>
                        </Link>
                    </SheetClose>
                )}
            </SheetContent>
        </Sheet>
    );
}

export default MainMenuMobile;
