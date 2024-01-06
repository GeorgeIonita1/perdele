import Link from "next/link";
import { Button } from "./ui/button";

function NavigationDesktop() {
    return (
        <nav className="flex justify-center *:list-none max-md:hidden">
            <li><Link href='/'><Button variant='link'>Home</Button></Link></li>
            <li><Link href='/detail/2'><Button variant='link'>Livingroom</Button></Link></li>
            <li><Link href='/detail/2'><Button variant='link'>Bedroom</Button></Link></li>
            <li><Link href='/detail/2'><Button variant='link'>Kitchen</Button></Link></li>
        </nav>
    );
}

export default NavigationDesktop;
