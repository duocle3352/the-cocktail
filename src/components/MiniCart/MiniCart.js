import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import { AiOutlineClose } from 'react-icons/ai';
import HeadlessTippy from '@tippyjs/react/headless';
import { useSelector } from 'react-redux';

import { PopperWrapper } from '~/components/PopperWrapper';
import { MiniCartItem } from '~/components/MiniCartItem';
import { CloseBtn } from '~/components/CloseBtn';
import { Button } from '~/components/Button';
import config from '~/config';
import images from '~/assets/images';

function MiniCart({ children, showCart, onToggleCart }) {
    const { total, cartItems, amount } = useSelector((state) => state.cart);

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

                        <h5 className="font-bold pb-1 mb-3 border-b-2 border-borderColor dark:text-white">
                            {`My Cart (${amount} items):`}
                        </h5>

                        {/* cart item */}
                        <div className="max-h-[400px] w-[500px] overflow-y-auto">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => <MiniCartItem item={item} key={item.id} />)
                            ) : (
                                <img src={images.emptyCart} alt="empty cart" />
                            )}
                        </div>

                        {/* total price */}
                        <div className="flex items-center justify-between pt-2 my-5 border-t-2 border-borderColor">
                            <span className="text-lg font-semibold dark:text-white">SUBTOTAL:</span>
                            <NumericFormat
                                value={total}
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
                        <Button
                            btnFullWidth
                            btnLarge
                            btnPrimaryGreen
                            to={config.routes.cart}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Checkout
                        </Button>
                    </PopperWrapper>
                </div>
            )}
        >
            {/* children */}
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
