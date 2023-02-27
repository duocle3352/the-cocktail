import { useSelector, useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { CartItem } from '~/components/CartItem';
import { Button } from '~/components/Button';
import { clear } from '~/state/features/cartSlice';
import images from '~/assets/images';
import './Cart.css';

function Cart() {
    const dispatch = useDispatch();
    const { cartItems, amount, total } = useSelector((state) => state.cart);

    return (
        <section>
            <h1 className="font-bold text-primary-green">
                My <span className="stroke">{`Cart (${amount})`}</span>
            </h1>

            {cartItems.length > 0 ? (
                <>
                    {/* list item */}
                    <ul className="cart-list-item">
                        <li className="grid grid-cols-6 md:grid-cols-12 gap-3 py-5">
                            <p className="col-span-4 cart-list-title">Product</p>
                            <p className="col-span-2 cart-list-title">Price</p>
                            <p className="hidden md:block col-span-3 cart-list-title">QTY</p>
                            <p className="hidden md:block col-span-2 cart-list-title">Total</p>
                        </li>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </ul>
                    <div className="md:grid grid-cols-6 gap-10">
                        {/* massage */}
                        <div className="col-span-3 mb-5">
                            <h5 className="font-semibold mb-4 dark:text-white">
                                Special instructions for seller
                            </h5>
                            <textarea placeholder="Message" className="cart-message" />
                        </div>

                        <div className="col-span-3 lg:col-start-5 lg:col-span-2">
                            {/* total price */}
                            <NumericFormat
                                value={total}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(formattedValue) => (
                                    <div className="flex justify-between mb-5">
                                        <p className="text-2xl font-bold dark:text-white">
                                            SUBTOTAL:
                                        </p>
                                        <p className="text-primary-orange text-2xl font-bold ">
                                            {formattedValue}
                                        </p>
                                    </div>
                                )}
                            />

                            {/* btn */}
                            <div className="mb-5">
                                <Button btnOutline btnFullWidth onClick={() => dispatch(clear())}>
                                    Clear All
                                </Button>
                            </div>
                            <Button btnDisabled btnFullWidth>
                                Check out
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex justify-center">
                    <img src={images.emptyCart} alt="empty cart" />
                </div>
            )}
        </section>
    );
}

export default Cart;
