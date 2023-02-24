import { Nav } from '~/components/Nav';
import { NavItem } from '~/components/NavItem';
import { HeaderRightToolItem } from '~/components/HeaderRightToolItem';
import { SignIn } from '~/components/SignIn';
import { ShoppingCart } from '~/components/ShoppingCart';
import { Search } from '~/components/Search';
import { DarkMore } from '~/components/DarkMore';
import { Logo } from '~/components/Logo';
import { Menu } from '~/components/Menu';
import { SignBtn } from '~/components/SignBtn';
import config from '~/config';
import './Header.css';

function Header() {
    return (
        <header className="header-wrapper">
            {/* mobile and tablet menu */}
            <Menu />

            {/* nav */}
            <Nav>
                <NavItem link={config.routes.home} title="home" />
                <NavItem link={config.routes.about} title="about" />
                <NavItem link={config.routes.shop} title="shop" />
                <NavItem link={config.routes.contact} title="contact" />
            </Nav>

            {/* logo */}
            <Logo />

            <div className="header-right-tool__box">
                {/* dark more*/}
                <HeaderRightToolItem className="hidden lg:block xl:block">
                    <DarkMore />
                </HeaderRightToolItem>

                {/* sign*/}
                <HeaderRightToolItem className="hidden lg:block xl:block">
                    <SignBtn />
                </HeaderRightToolItem>

                {/* sign modal */}
                <SignIn />

                {/* search btn*/}
                <HeaderRightToolItem>
                    <Search />
                </HeaderRightToolItem>

                {/* shopping cart */}
                <HeaderRightToolItem>
                    <ShoppingCart />
                </HeaderRightToolItem>
            </div>
        </header>
    );
}

export default Header;
