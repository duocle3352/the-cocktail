import PropTypes from 'prop-types';
import { memo } from 'react';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import { InputField } from '~/components/custom-fields';
import config from '~/config';
import { Link } from 'react-router-dom';
import { FormTitle } from '../FormTitle';
import { SocialBtn } from '../SocialBtn';

function SignInForm({ onShowRegister }) {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid e-mail address.')
            .required('This field is request.'),

        password: Yup.string()
            .matches(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
                'Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.',
            )
            .required('This field is request.'),
    });

    return (
        <div className="flex flex-col items-center justify-center w-[40%] bg-white px-8 ">
            <FormTitle title="Sign in" />

            <p className="font-medium text-center mt-3">
                Don`t have an account yet?&#160;
                <button className="text-primary-orange" onClick={onShowRegister}>
                    Sign up here
                </button>
            </p>

            {/* social btn */}
            <div className="w-full mt-3">
                <SocialBtn icon={<FcGoogle size="1.4rem" />} title="Sign in with Google" />
                <SocialBtn
                    icon={<BsFacebook color="#0674e7" size="1.4rem" />}
                    title="Sign in with Facebook"
                />
            </div>

            {/* separate */}
            <div className="flex justify-center w-full mt-3 mb-5 border-b-2 border-solid border-borderColor">
                <span className="text-xs text-darkLightText bg-white px-3 translate-y-2/4">OR</span>
            </div>

            {/* form */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formikProps) => {
                    // eslint-disable-next-line no-unused-vars
                    const { errors, touched } = formikProps;

                    return (
                        <Form className="w-full">
                            <FastField
                                name="email"
                                component={InputField}
                                label="Email"
                                placeholder="Email*"
                            />

                            <FastField
                                name="password"
                                component={InputField}
                                label="Password"
                                type="password"
                                placeholder="Password*"
                            />

                            <div className="flex justify-center text-xs mt-2">
                                <Link to={config.routes.home} className="text-primary-orange">
                                    Forgotten Your Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="btn-full-width btn-primary text-white text-lg py-[6px] mt-5 rounded-xl"
                            >
                                Sign In
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

SignInForm.propTypes = {
    onShowRegister: PropTypes.func,
};

export default memo(SignInForm);
