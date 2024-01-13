import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import MainMenuMobile from "./MainMenuMobile";

function NavigationMobile() {
    return (
        <nav className="md:hidden flex items-center">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <MainMenuMobile />
        </nav>
    );
}

export default NavigationMobile;
