import PropTypes from 'prop-types';
import { memo } from 'react';
import { Formik, Form, FastField, Field } from 'formik';
import * as Yup from 'yup';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import { FormTitle } from '../FormTitle';
import { SocialBtn } from '../SocialBtn';
import { InputField } from '~/components/custom-fields';
import { Link } from 'react-router-dom';

function RegisterForm({ onShowSignIn }) {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        old: null,
        policy: null,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is request.'),

        email: Yup.string()
            .email('Please enter a valid e-mail address.')
            .required('This field is request.'),

        password: Yup.string()
            .matches(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
                'Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.',
            )
            .required('This field is request.'),

        confirm: Yup.string()
            .oneOf([Yup.ref('pass'), null], 'Passwords must match')
            .required('This field is request.'),

        old: Yup.array().required('You are too young to register / order.').nullable(),
        policy: Yup.array().required('Invalid value.').nullable(),
    });

    return (
        <div className="flex flex-col items-center justify-center w-[80%] bg-white px-8 ">
            <div className="w-full max-h-full px-7 overflow-y-auto">
                <FormTitle title="Sign up" />

                <p className="font-medium text-center mt-3">
                    You have an account?&#160;
                    <button className="text-primary" onClick={onShowSignIn}>
                        Sign in here
                    </button>
                </p>

                {/* social btn */}
                <div className="flex w-full mt-3">
                    <SocialBtn
                        className="mr-10"
                        icon={<FcGoogle size="1.4rem" />}
                        title="Sign up with Google"
                    />
                    <SocialBtn
                        className="ml-10"
                        icon={<BsFacebook color="#0674e7" size="1.4rem" />}
                        title="Sign up with Facebook"
                    />
                </div>

                {/* separate */}
                <div className="flex justify-center w-full mt-3 mb-5 border-b-2 border-solid border-borderColor">
                    <span className="text-xs text-darkLightText bg-white px-3 translate-y-2/4">
                        OR
                    </span>
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
                                <div className="flex justify-between w-full">
                                    <div className="w-full mr-10">
                                        <FastField
                                            name="name"
                                            component={InputField}
                                            label="Full name"
                                            placeholder="Full name*"
                                        />

                                        <FastField
                                            name="password"
                                            component={InputField}
                                            label="Password"
                                            type="password"
                                            placeholder="Password*"
                                        />
                                    </div>
                                    <div className="w-full ml-10">
                                        <FastField
                                            name="email"
                                            component={InputField}
                                            label="Email"
                                            placeholder="Email*"
                                        />

                                        <FastField
                                            name="confirm"
                                            component={InputField}
                                            label="Confirm password"
                                            type="password"
                                            placeholder="Confirm password*"
                                        />
                                    </div>
                                </div>

                                {/* checkbox */}
                                <label className="block mt-2">
                                    <div className="flex">
                                        <Field type="checkbox" name="old" value="yes" />
                                        <p className="ml-2">Yes, I am 16+ years old.</p>
                                    </div>
                                    {errors.old && touched.old && (
                                        <p className="from-error">{errors.old}</p>
                                    )}
                                </label>

                                <label className="block mt-2">
                                    <div className="flex">
                                        <Field type="checkbox" name="policy" value="yes" />
                                        <p className="ml-2">
                                            I have read, understood and accepted the{' '}
                                            <Link className="text-primary underline">
                                                Privacy Policy
                                            </Link>{' '}
                                            and{' '}
                                            <Link className="text-primary underline">
                                                Website Terms and Conditions
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                    {errors.policy && touched.policy && (
                                        <p className="from-error">{errors.policy}</p>
                                    )}
                                </label>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="w-[300px] btn-primary text-white text-lg py-[8px]  mt-5 rounded-xl"
                                    >
                                        Register
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

RegisterForm.propTypes = {
    onShowSignIn: PropTypes.func,
};

export default memo(RegisterForm);
