import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { BiCart } from 'react-icons/bi';
import { MiniCart } from '~/components/MiniCart';

function ShoppingCart() {
    const [isShowCart, setIsShowCart] = useState(false);
    const { amount, total } = useSelector((state) => state.cart);

    const toggleCart = () => {
        setIsShowCart(!isShowCart);
    };

    return (
        <MiniCart showCart={isShowCart} onToggleCart={toggleCart}>
            <button className={`right-tool-style`} onClick={toggleCart}>
                <BiCart size="1.5rem" />
                <NumericFormat
                    value={total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    renderText={(formattedValue) => (
                        <span className="text-xl font-semibold ml-2">{formattedValue}</span>
                    )}
                />
                {/* quantity */}
                <span
                    className="absolute -top-1 -right-2 text-white bg-primary-orange 
                            leading-none px-1 py-1 rounded-full"
                >
                    {amount}
                </span>
            </button>
        </MiniCart>
    );
}

export default ShoppingCart;
