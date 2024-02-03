// fix typescript

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { Button } from "../ui/button";

function NavigationDesktop() {
    const { sessionClaims }: any = auth();
    const isAdmin = sessionClaims?.metadata.role === "admin";

    return (
        <nav className="flex justify-center *:list-none max-md:hidden">
            <li><a href="tel:+40770123456" className="underline underline-offset-4"><Button variant='link'>0771-234-567</Button></a></li>
            <li><Link href='/'><Button variant='link'>Home</Button></Link></li>
            <li><Link href='/product/2'><Button variant='link'>Livingroom</Button></Link></li>
            <li><Link href='/product/2'><Button variant='link'>Bedroom</Button></Link></li>
            <li><Link href='/product/2'><Button variant='link'>Kitchen</Button></Link></li>
            <SignedIn>
                {isAdmin && <li><Link href='/admin'><Button variant='link'>Admin</Button></Link></li>}
                <div className="ml-8 flex items-center">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
        </nav>
    );
}

export default NavigationDesktop;
