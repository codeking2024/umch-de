import SecondNavbar from "./secondNavbar";
import MainNavbar from "./mainNavbar";
import MobileNavbar from "./mobileNavbar";

const Header: React.FC = () => {
    return (
        <header>
            <SecondNavbar />
            <MainNavbar />
            <MobileNavbar />
        </header>
    );
}

export default Header;