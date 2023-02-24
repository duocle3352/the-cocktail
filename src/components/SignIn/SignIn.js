import { useCallback, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { useOutsideCloser } from '~/hooks';
import { CloseBtn } from '~/components/CloseBtn';
import { ModalWrapper } from '~/components/ModalWrapper';
import { RegisterForm } from '~/components/RegisterForm';
import { SignInForm } from '~/components/SignInForm';
import { toggleSign } from '~/state/features/signInSlice';

function SignIn() {
    const dispatch = useDispatch();
    const modalRef = useRef();
    const [isSignIn, setIsSignIn] = useState(true);
    const isSignInModal = useSelector((state) => state.sign);

    const toggleSignModal = () => {
        dispatch(toggleSign());
    };
    useOutsideCloser(modalRef, toggleSignModal);

    const toggleSignIn = useCallback(() => {
        setIsSignIn(!isSignIn);
    }, [isSignIn]);

    return (
        isSignInModal && (
            <ModalWrapper>
                {/* modal content */}
                <div className="sign-wrapper" ref={modalRef}>
                    {/* close btn */}
                    <CloseBtn icon={<AiOutlineClose size="2.4rem" />} onClose={toggleSignModal} />

                    {isSignIn ? (
                        <SignInForm onShowRegister={toggleSignIn} />
                    ) : (
                        <RegisterForm onShowSignIn={toggleSignIn} />
                    )}
                </div>
            </ModalWrapper>
        )
    );
}

export default SignIn;
