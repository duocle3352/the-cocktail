import { Link } from 'react-router-dom';
import { BiSearch, BiCart } from 'react-icons/bi';

import { Nav } from '~/components/Nav';
import { NavItem } from '~/components/NavItem';
import config from '~/config';
import images from '~/assets/images';

// css
const rightToolItem = 'mr-1 py-5 px-4';
const rightToolBtnRounded = 'bg-white p-3 rounded-xl hover:text-primary';

function Header() {
    return (
        <header className="flex items-center justify-between px-6 bg-slate-100">
            {/* nav */}
            <Nav>
                <NavItem link={config.routes.home} title="home" />
                <NavItem link={config.routes.about} title="about" />
                <NavItem link={config.routes.shop} title="shop" />
                <NavItem link={config.routes.contact} title="contact" />
            </Nav>

            {/* logo */}
            <Link to={config.routes.home} className="no-underline">
                <img src={images.logo} alt="The Cocktail Logo"></img>
            </Link>

            {/* right tool */}
            <div className="flex-1 flex items-center justify-end">
                <div className={rightToolItem}>
                    <button className="text-base font-semibold hover:text-primary">Log in</button>
                </div>
                <div className={rightToolItem}>
                    <button className={rightToolBtnRounded}>
                        <BiSearch size="1.5rem" />
                    </button>
                </div>
                <div className={rightToolItem}>
                    <button className={`flex items-center ${rightToolBtnRounded}`}>
                        <BiCart size="1.5rem" />
                        <span className="font-semibold ml-2">100.5$</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
