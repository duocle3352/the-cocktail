import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { AiOutlineClose } from 'react-icons/ai';
import HeadlessTippy from '@tippyjs/react/headless';
import { useSelector } from 'react-redux';

import { PopperWrapper } from '~/components/PopperWrapper';
import { MiniCartItem } from '~/components/MiniCartItem';
import { CloseBtn } from '~/components/CloseBtn';
import config from '~/config';

function MiniCart({ children, showCart, onToggleCart }) {
    const listCartItem = useSelector((state) => state.cart.cartItems);

    return (
        <HeadlessTippy
            visible={showCart}
            interactive
            placement="bottom-end"
            onClickOutside={onToggleCart}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <CloseBtn icon={<AiOutlineClose size="1.4rem" />} onClose={onToggleCart} />

                        <h5 className="font-bold pb-1 mb-3 border-b-2 border-borderColor">
                            My Cart
                        </h5>

                        {/* cart item */}
                        <div className="max-h-[400px] w-[500px] overflow-y-auto">
                            {listCartItem.map((item) => (
                                <MiniCartItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    thumb={item.thumb}
                                    quantity={item.quantity}
                                />
                            ))}
                        </div>

                        {/* total price */}
                        <div className="flex items-center justify-between pt-2 mt-5 border-t-2 border-borderColor">
                            <span className="text-lg font-semibold">SUBTOTAL:</span>
                            <NumericFormat
                                value={100}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(formattedValue) => (
                                    <span className="text-2xl font-semibold text-primary-orange">
                                        {formattedValue}
                                    </span>
                                )}
                            />
                        </div>

                        {/* checkout */}
                        <Link
                            to={config.routes.cart}
                            className="btn-full-width text-lg font-semibold text-white 
                                            bg-primary-green py-4 mt-3 hover:opacity-80"
                        >
                            Checkout
                        </Link>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

MiniCart.propTypes = {
    children: PropTypes.node.isRequired,
    showCart: PropTypes.bool.isRequired,
    onToggleCart: PropTypes.func.isRequired,
};

export default MiniCart;
