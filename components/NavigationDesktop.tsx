import Link from "next/link";
import SubMenu from "./SubMenu";
import UserHeaderMenu from "./UserHeaderMenu";
import { Button } from "./ui/button";

function NavigationDesktop() {
    return (
        <nav className="flex justify-center *:list-none max-md:hidden">
            {/* <li className="mr-auto">
                <SubMenu />
            </li> */}

            <li><Link href='/'><Button variant='link'>Home</Button></Link></li>
            <li><Link href='/detail/2'><Button variant='link'>Livingroom</Button></Link></li>
            <li><Link href='/detail/2'><Button variant='link'>Bedroom</Button></Link></li>
            <li><Link href='/detail/2'><Button variant='link'>Kitchen</Button></Link></li>

            {/* route to admin section disabled */}
            {/* <li>
                <Link href='/admin'>
                    <Button variant='link'>Admin</Button>
                </Link>
            </li> */}

            {/* <li className="ml-auto">
                <UserHeaderMenu />
            </li> */}
        </nav>
    );
}

export default NavigationDesktop;
