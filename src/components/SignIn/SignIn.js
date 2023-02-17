import { useCallback, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { useOutsideCloser } from '~/hooks';
import { CloseBtn } from '~/components/CloseBtn';
import { ModalWrapper } from '~/components/ModalWrapper';
import { RegisterForm } from '~/components/RegisterForm';
import { SignInForm } from '~/components/SignInForm';

function SignIn() {
    const [isSignInModal, setIsSignInModal] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const modalRef = useRef();

    const toggleSignInModal = () => {
        setIsSignInModal(!isSignInModal);
    };
    useOutsideCloser(modalRef, toggleSignInModal);

    const toggleSignIn = useCallback(() => {
        setIsSignIn(!isSignIn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <button
                className="text-base font-semibold hover:text-primary"
                onClick={toggleSignInModal}
            >
                Sign in
            </button>

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
                            <SignInForm onShowRegister={toggleSignIn} />
                        ) : (
                            <RegisterForm onShowSignIn={toggleSignIn} />
                        )}
                    </div>
                </ModalWrapper>
            )}
        </>
    );
}

export default SignIn;
