import MainMenuMobile from "./MainMenuMobile";
import UserHeaderMenu from "./UserHeaderMenu";

function NavigationMobile() {
    return (
        <nav className="md:hidden flex items-center">
            {/* <UserHeaderMenu /> */}
            <MainMenuMobile />
        </nav>
    );
}

export default NavigationMobile;
