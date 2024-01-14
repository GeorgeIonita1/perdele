import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import MainMenuMobile from "./MainMenuMobile";

function NavigationMobile() {
    return (
        <nav className="md:hidden flex items-center max-md:justify-between max-md:w-full max-md:ml-6">
            <MainMenuMobile />
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
        </nav>
    );
}

export default NavigationMobile;
