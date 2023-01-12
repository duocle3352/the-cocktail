import { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiCart } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { NumericFormat } from 'react-number-format';
// import { useSelector } from 'react-redux';

import { Nav } from '~/components/Nav';
import { NavItem } from '~/components/NavItem';
import { HeaderRightToolItem } from '~/components/HeaderRightToolItem';
import { ModalWrapper } from '~/components/ModalWrapper';
import { CloseBtn } from '~/components/CloseBtn';
import { SignInForm } from '~/components/SignInForm';
import { RegisterForm } from '~/components/RegisterForm';
import { MiniCart } from '~/components/MiniCart';
import { useOutsideCloser } from '~/hooks';
import config from '~/config';
import images from '~/assets/images';

// css
const rightToolBtn = 'bg-white p-3 rounded-xl hover:text-primary';

function Header() {
    const [isSignInModal, setIsSignInModal] = useState(false);
    const [isShowCart, setIsShowCart] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInModal = () => {
        setIsSignInModal(!isSignInModal);
    };

    // hide modal on click our side
    const modalRef = useRef();
    useOutsideCloser(modalRef, toggleSignInModal);

    const toggleCart = () => {
        setIsShowCart(!isShowCart);
    };

    const showSignIn = useCallback(() => {
        setIsSignIn(true);
    }, []);

    const showRegister = useCallback(() => {
        setIsSignIn(false);
    }, []);

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
                <img src={images.logo} alt="The Cocktail Logo" />
            </Link>

            {/* right tool */}
            <div className="flex-1 flex items-center justify-end">
                {/* sign btn */}
                <HeaderRightToolItem>
                    <button
                        className="text-base font-semibold hover:text-primary"
                        onClick={toggleSignInModal}
                    >
                        Sign in
                    </button>
                </HeaderRightToolItem>

                {/* search btn*/}
                <HeaderRightToolItem>
                    <Link to={config.routes.search} className={`block ${rightToolBtn}`}>
                        <BiSearch size="1.5rem" />
                    </Link>
                </HeaderRightToolItem>

                {/* shopping cart */}
                <HeaderRightToolItem>
                    <MiniCart showCart={isShowCart} onToggleCart={toggleCart}>
                        <button
                            className={`flex items-center relative ${rightToolBtn}`}
                            onClick={toggleCart}
                        >
                            <BiCart size="1.5rem" />
                            <NumericFormat
                                value={100}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(formattedValue) => (
                                    <span className="text-xl font-semibold ml-2">
                                        {formattedValue}
                                    </span>
                                )}
                            />
                            {/* quantity */}
                            <span
                                className="absolute -top-1 -right-2 text-white bg-primary-orange 
                                                leading-none px-1 py-1 rounded-full"
                            >
                                2
                            </span>
                        </button>
                    </MiniCart>
                </HeaderRightToolItem>

                {/* sign form */}
                {isSignInModal && (
                    <ModalWrapper>
                        {/* modal content */}
                        <div
                            className="flex justify-end relative h-[80vh] w-[90vw] rounded-2xl
                        bg-login-bg bg-no-repeat overflow-hidden"
                            ref={modalRef}
                        >
                            {/* close btn */}
                            <CloseBtn
                                icon={<AiOutlineClose size="1.8rem" />}
                                onClose={toggleSignInModal}
                            />

                            {/* slogan */}
                            <h3
                                className={`absolute top-4 left-40 w-[350px] text-white capitalize ${
                                    isSignIn ? '' : 'rotate-90 top-[160px] left-[-60px]'
                                } transition-transform ease-linear`}
                            >
                                <span className="text-primary-orange">premium </span>
                                spirits shipped right to your door
                            </h3>

                            {isSignIn ? (
                                <SignInForm onShowRegister={showRegister} />
                            ) : (
                                <RegisterForm onShowSignIn={showSignIn} />
                            )}
                        </div>
                    </ModalWrapper>
                )}
            </div>
        </header>
    );
}

export default Header;
