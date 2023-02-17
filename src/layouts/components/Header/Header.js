import { Link } from 'react-router-dom';
import { Nav } from '~/components/Nav';
import { NavItem } from '~/components/NavItem';
import { HeaderRightToolItem } from '~/components/HeaderRightToolItem';
import { SignIn } from '~/components/SignIn';
import { ShoppingCart } from '~/components/ShoppingCart';
import { Search } from '~/components/Search';
import config from '~/config';
import images from '~/assets/images';

function Header() {
    return (
        <header
            className="flex items-center justify-between w-full h-20
                        fixed top-0 left-0 z-50 bg-primary-bg"
        >
            {/* nav */}
            <Nav>
                <NavItem link={config.routes.home} title="home" />
                <NavItem link={config.routes.about} title="about" />
                <NavItem link={config.routes.shop} title="shop" />
                <NavItem link={config.routes.contact} title="contact" />
            </Nav>

            {/* logo */}
            <Link to={config.routes.home} className="no-underline">
                <img src={images.logo} alt="The Cocktail Logo" />
            </Link>

            <div className="flex-1 flex items-center justify-end mr-9">
                {/* sign*/}
                <HeaderRightToolItem>
                    <SignIn />
                </HeaderRightToolItem>

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
