import Link from "next/link";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Header() {
    return (
        <header className="fixed w-full bg-inherit z-50 flex justify-between items-center p-6">
            <Link className="font-bold text-lg" href='/'>Logo</Link>
            <NavigationMobile />
            <NavigationDesktop />
        </header>
    );
}

export default Header;
