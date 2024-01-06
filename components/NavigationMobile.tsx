import MainMenuMobile from "./MainMenuMobile";

function NavigationMobile() {
    return (
        <nav className="md:hidden flex items-center">
            <MainMenuMobile />
        </nav>
    );
}

export default NavigationMobile;
