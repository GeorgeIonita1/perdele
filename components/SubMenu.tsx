import Link from "next/link";
import { Button } from "./ui/button";
import { footerLinks } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

function SubMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>Categories</Button>
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

export default SubMenu;
