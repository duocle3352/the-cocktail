import { Link } from 'react-router-dom';
import { FaCcVisa } from 'react-icons/fa';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { InputField } from '~/components/custom-fields';
import { Button } from '~/components/Button';
import { AmexIcon, ApplePayIcon } from '~/components/Icons';
import './Footer.css';

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
        <section className="footer-wrapper">
            {/* Warning */}
            <div>
                <h6 className="footer-title footer-text-left__on-pc">Proposition 65 Warning</h6>
                <p className="footer-text footer-text-left__on-pc lg:w-[265px]">
                    WARNING: Drinking distilled spirits, beer, coolers, wine and other alcoholic
                    beverages may increase cancer risk, and, during pregnancy, can cause birth
                    defects. For more information go to www.P65Warnings.ca.gov/alcohol
                </p>
            </div>

            {/* letter */}
            <div>
                <h6 className="footer-title">Newsletter</h6>
                <p className="footer-text lg:mx-10">
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

            {/* Resources */}
            <div className="flex flex-col items-center lg:items-end">
                <h6 className="footer-title">Resources</h6>
                <Link to="./" className="footer-link">
                    Terms and Conditions
                </Link>
                <Link to="./" className="footer-link">
                    Privacy Policy
                </Link>
                <Link to="./" className="footer-link">
                    Shipping & Return Policy
                </Link>
                <Link to="./" className="footer-link">
                    Contact Us
                </Link>
                <Link to="./" className="footer-link">
                    Order Tracking
                </Link>
                <Link to="./" className="footer-link">
                    Terms of Service
                </Link>
                <Link to="./" className="footer-link">
                    Refund policy
                </Link>
            </div>

            {/* Payments */}
            <div className="footer-payment">
                <div>
                    <h5 className="footer-title">
                        Accepted
                        <span className="stroke-green"> Payments</span>
                    </h5>
                    <div className="flex items-center justify-center">
                        <AmexIcon />
                        <FaCcVisa fontSize="30px" color="white" className="mx-3" />
                        <ApplePayIcon />
                    </div>
                </div>
                <h4 className="text-white mt-6 text-center">Please Drink Responsibly!</h4>
            </div>
        </section>
    );
}

export default Footer;
