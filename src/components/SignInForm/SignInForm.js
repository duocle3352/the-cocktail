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
import { Button } from '../Button';
import './SignInForm.css';

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
        <div className="sign-content sign-in__content px-10 ">
            <FormTitle title="Sign in" />

            <p className="sign-subtitle">
                Don`t have an account yet?&#160;
                <button className="text-primary-orange" onClick={() => onShowRegister()}>
                    Sign up here
                </button>
            </p>

            {/* social btn */}
            <div className="w-full mt-3">
                <SocialBtn icon={<FcGoogle size="1.4rem" />} title="Sign in" />
                <SocialBtn icon={<BsFacebook color="#0674e7" size="1.4rem" />} title="Sign in" />
            </div>

            {/* separate */}
            <div className="sign-separate-line">
                <span className="sign-separate-text">OR</span>
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

                            <div className="flex justify-center text-xs my-2">
                                <Link to={config.routes.home} className="text-primary-orange">
                                    Forgotten Your Password?
                                </Link>
                            </div>

                            <Button type="submit" btnPrimaryGreen btnFullWidth>
                                Sign In
                            </Button>
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
