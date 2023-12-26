import { footerLinks } from "@/lib/utils";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function UserHeaderMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="/perdele.jpg" />
                    <AvatarFallback>GG</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {footerLinks[2].lines.map((el: string, idx: number): any => (
                    <Link key={idx} href='/test' className="block">
                        <DropdownMenuItem>{el}</DropdownMenuItem>
                    </Link>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserHeaderMenu;
