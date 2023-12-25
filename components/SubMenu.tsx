'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { footerLinks } from "@/lib/utils";

function SubMenu() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='secondary'>Categories</Button>
            </PopoverTrigger>
            <PopoverContent>
                {footerLinks[2].lines.map((el: string, idx: number): any => (
                    <Link key={idx} href='/test' className="block">
                        <Button variant='link'>{el}</Button>
                    </Link>
                ))}
            </PopoverContent>
        </Popover>
    );
}

export default SubMenu;
