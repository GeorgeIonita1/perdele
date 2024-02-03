import MainMenuMobile from "../MainMenuMobile";

function NavigationMobile() {
    return (
        <nav className="md:hidden flex items-center max-md:justify-between max-md:w-full max-md:ml-6">
            <MainMenuMobile />
            <a href="tel:+40770123456" className="underline underline-offset-4">
                0771-234-567
            </a>
        </nav>
    );
}

export default NavigationMobile;
