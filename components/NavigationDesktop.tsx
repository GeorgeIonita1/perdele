import SubMenu from "./SubMenu";
import UserHeaderMenu from "./UserHeaderMenu";
import { Button } from "./ui/button";

function NavigationDesktop() {
    return (
        <nav className="flex justify-center *:list-none py-4 max-md:hidden">
            <li className="mr-auto">
                <SubMenu />
            </li>

            <li><Button variant='link'>Livingroom</Button></li>
            <li><Button variant='link'>Bedroom</Button></li>
            <li><Button variant='link'>Kitchen</Button></li>
            <li><Button variant='link'>Hallway</Button></li>

            <li className="ml-auto">
                <UserHeaderMenu />
            </li>
        </nav>
    );
}

export default NavigationDesktop;
