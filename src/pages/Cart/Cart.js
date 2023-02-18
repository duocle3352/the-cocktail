import { useSelector, useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { CartItem } from '~/components/CartItem';
import { Button } from '~/components/Button';
import { clear } from '~/state/features/cartSlice';
import images from '~/assets/images';

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
                    <ul className="my-10 border-b-2 border-solid border-borderColor">
                        <li className="grid grid-cols-12 gap-5 py-5">
                            <div className="col-span-5 text-xl font-semibold">Product</div>
                            <div className="col-span-2 text-xl font-semibold">Price</div>
                            <div className="col-span-2 text-xl font-semibold">QTY</div>
                            <div className="col-span-2 text-xl font-semibold">Total</div>
                        </li>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </ul>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-semibold mb-4">Special instructions for seller</h5>
                            <textarea
                                placeholder="Message"
                                className="h-[150px] w-[500px] p-4 rounded-xl"
                            />
                        </div>
                        <div className="w-[500px]">
                            {/* total price */}
                            <NumericFormat
                                value={total}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(formattedValue) => (
                                    <div className="flex justify-between mb-5">
                                        <p className="text-2xl font-bold">SUBTOTAL:</p>
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
