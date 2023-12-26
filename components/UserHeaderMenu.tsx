'use client'

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import { footerLinks } from "@/lib/utils";

function UserHeaderMenu() {
    const { data: session } = useSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    {session?.user?.name && (
                        <AvatarImage src="/perdele.jpg" />
                    )}
                    <AvatarFallback>
                        <Button>User</Button>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {footerLinks[2].lines.map((el: string, idx: number): any => (
                    <Link key={idx} href='/test' className="block">
                        <DropdownMenuItem>{el}</DropdownMenuItem>
                    </Link>
                ))}
                {session?.user?.name ? (
                    <Button onClick={() => signOut()}>Log Out</Button>
                    ) : (
                        <Button onClick={() => signIn()}>Log In</Button>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserHeaderMenu;
