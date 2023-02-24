import { useState } from 'react';
import { BiChevronLeft, BiGift, BiMenu, BiUser, BiChevronDown } from 'react-icons/bi';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';

import { MenuItem } from '~/components/MenuItem';
import { MenuSmallItem } from '~/components/MenuSmallItem';
import { MenuChildren } from '~/components/MenuChildren';
import { useDarkMore } from '~/hooks';
import images from '~/assets/images';
import config from '~/config';
import { useDispatch } from 'react-redux';
import { toggleSign } from '~/state/features/signInSlice';
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

    return (
        <div className="menu">
            <BiMenu size="2.6rem" className="dark:text-white" onClick={toggleShowMenu} />

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
                            icon={<BiUser size="2rem" />}
                            image={images.squadMenu1}
                            onClick={showSign}
                        />
                        <MenuSmallItem
                            title={isDarkMore ? 'Light more' : 'Dark more'}
                            icon={
                                isDarkMore ? (
                                    <BsSunFill size="2rem" />
                                ) : (
                                    <BsMoonStarsFill size="2rem" />
                                )
                            }
                            image={images.squadMenu2}
                            onClick={toggleDarkMore}
                        />
                    </div>
                    <div className="menu-small-item__wrapper">
                        <MenuSmallItem
                            title="Gift"
                            icon={<BiGift size="2rem" />}
                            // image={images.squadMenu3}
                            disabled
                        />
                        <MenuSmallItem
                            title="Contact Us"
                            icon={<FiUsers size="2rem" />}
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
