import Link from "next/link";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Header() {
    return (
        <header className="fixed w-full bg-inherit z-50">
            <div className="px-8 max-md:py-4">
                <div className="max-md:flex justify-between items-center">
                    <div className="text-center py-4 max-md:text-right">
                        <Link href='/'>Logo</Link>
                    </div>
                    <NavigationMobile />
                </div>
                <div className="w-full h-px mx-auto bg-slate-950 max-md:hidden" />
                <NavigationDesktop />
            </div>
        </header>
    );
}

export default Header;
