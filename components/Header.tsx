import Link from "next/link";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Header() {
    return (
        <header className="fixed w-full bg-inherit">
            <div className="container">
                <div className="max-md:flex justify-between items-center">
                    <NavigationMobile />
                    <div className="text-center py-4 max-md:text-right">
                        <Link href='/'>Logo</Link>
                    </div>
                </div>
                <div className="w-full h-px mx-auto bg-slate-950 max-md:hidden" />
                <NavigationDesktop />
            </div>
        </header>
    );
}

export default Header;
