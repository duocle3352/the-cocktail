import { Link } from 'react-router-dom';
import { FaCcVisa } from 'react-icons/fa';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { InputField } from '~/components/custom-fields';
import { Button } from '~/components/Button';
import { AmexIcon, ApplePayIcon } from '~/components/Icons';

const titleStyle = 'font-semibold text-white mb-5';
const linkStyle = 'text-white text-sm underline';

function Footer() {
    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid e-mail address.')
            .required('This field is request.'),
    });

    return (
        <section className="py-20 px-10 bg-primary-green">
            <div className="grid grid-cols-3">
                <div>
                    <h5 className={titleStyle}>Proposition 65 Warning</h5>
                    <p className="text-white text-sm w-[265px]">
                        WARNING: Drinking distilled spirits, beer, coolers, wine and other alcoholic
                        beverages may increase cancer risk, and, during pregnancy, can cause birth
                        defects. For more information go to www.P65Warnings.ca.gov/alcohol
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <h5 className={titleStyle}>Newsletter</h5>
                    <p className="text-white text-sm text-center mx-10">
                        Subscribe to be the first to hear about our exclusive offers and latest
                        arrivals.
                    </p>
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
                                <Form className="w-full mt-5 text-center">
                                    <FastField
                                        name="email"
                                        component={InputField}
                                        label=""
                                        placeholder="Email*"
                                    />

                                    <Button type="submit" btnPrimaryOrange classes="mt-3">
                                        Go
                                    </Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
                <div className="flex flex-col items-end">
                    <h5 className={titleStyle}>Resources</h5>
                    <Link to="./" className={linkStyle}>
                        Terms and Conditions
                    </Link>
                    <Link to="./" className={linkStyle}>
                        Privacy Policy
                    </Link>
                    <Link to="./" className={linkStyle}>
                        Shipping & Return Policy
                    </Link>
                    <Link to="./" className={linkStyle}>
                        Contact Us
                    </Link>
                    <Link to="./" className={linkStyle}>
                        Order Tracking
                    </Link>
                    <Link to="./" className={linkStyle}>
                        Terms of Service
                    </Link>
                    <Link to="./" className={linkStyle}>
                        Refund policy
                    </Link>
                </div>
            </div>
            <div className="mt-10 flex justify-around">
                <div>
                    <h5 className={titleStyle}>
                        Accepted
                        <span className="stroke-green"> Payments</span>
                    </h5>
                    <div className="flex items-center justify-center">
                        <AmexIcon />
                        <FaCcVisa fontSize="30px" color="white" className="mx-3" />
                        <ApplePayIcon />
                    </div>
                </div>
                <h4 className="text-white mt-6">Please Drink Responsibly!</h4>
            </div>
        </section>
    );
}

export default Footer;
