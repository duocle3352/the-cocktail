import { useState } from 'react';
import { BiChevronLeft, BiGift, BiMenu, BiUser, BiChevronDown, BiSearch } from 'react-icons/bi';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { MenuItem } from '~/components/MenuItem';
import { MenuSmallItem } from '~/components/MenuSmallItem';
import { MenuChildren } from '~/components/MenuChildren';
import { useDarkMore } from '~/hooks';
import { toggleSign } from '~/state/features/signInSlice';
import { toggleSearch } from '~/state/features/searchSlice';
import images from '~/assets/images';
import config from '~/config';
import './Menu.css';

function Menu() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowDropDown, setIsShowDropDown] = useState(false);
    const [isDarkMore, toggleDarkMore] = useDarkMore();
    const dispatch = useDispatch();

    const toggleShowMenu = () => {
        setIsShowMenu(!isShowMenu);
    };

    const toggleShowDropDown = () => {
        setIsShowDropDown(!isShowDropDown);
    };

    const showSign = () => {
        dispatch(toggleSign());
    };

    const showSearch = () => {
        dispatch(toggleSearch());
    };

    return (
        <div className="menu">
            <BiMenu size="1.8rem" className="dark:text-white" onClick={toggleShowMenu} />

            <div className={`menu-content ${isShowMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                <BiChevronLeft
                    size="2.6rem"
                    width="4rem"
                    onClick={toggleShowMenu}
                    className="bg-white rounded-lg"
                />
                <div className="flex flex-col items-center justify-center gap-4 mt-10">
                    <MenuItem
                        title="Catalog"
                        isShowDropDown={isShowDropDown}
                        icon={
                            <BiChevronDown
                                size="2rem"
                                className={`transition-transform duration-500 ${
                                    isShowDropDown ? 'rotate-180' : 'rotate-0'
                                }`}
                            />
                        }
                        onClick={toggleShowDropDown}
                    >
                        <MenuChildren
                            setIsShowMenu={setIsShowMenu}
                            setIsShowDropDown={setIsShowDropDown}
                            isShowDropDown={isShowDropDown}
                        />
                    </MenuItem>

                    <MenuItem title="About" to={config.routes.about} onClick={toggleShowMenu} />
                    <MenuItem title="Shop" to={config.routes.shop} onClick={toggleShowMenu} />

                    <div className="menu-small-item__wrapper">
                        <MenuSmallItem
                            title="Log In"
                            icon={<BiUser />}
                            image={images.squadMenu1}
                            onClick={showSign}
                        />
                        <MenuSmallItem
                            title={isDarkMore ? 'Light more' : 'Dark more'}
                            icon={isDarkMore ? <BsSunFill /> : <BsMoonStarsFill />}
                            image={images.squadMenu2}
                            onClick={toggleDarkMore}
                        />
                    </div>
                    <div className="menu-small-item__wrapper">
                        <MenuSmallItem
                            title="Search"
                            icon={<BiSearch />}
                            image={images.squadMenu3}
                            onClick={showSearch}
                        />

                        <MenuSmallItem
                            title="Gift"
                            icon={<BiGift />}
                            // image={images.squadMenu4}
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
