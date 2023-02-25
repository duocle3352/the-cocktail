import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { BiCart } from 'react-icons/bi';
import { MiniCart } from '~/components/MiniCart';
import './ShoppingCart.css';

function ShoppingCart() {
    const [isShowCart, setIsShowCart] = useState(false);
    const { amount, total } = useSelector((state) => state.cart);

    const toggleCart = () => {
        setIsShowCart(!isShowCart);
    };

    return (
        <MiniCart showCart={isShowCart} onToggleCart={toggleCart}>
            <button className={`right-tool-style`} onClick={toggleCart}>
                <BiCart />
                <NumericFormat
                    value={total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    renderText={(formattedValue) => (
                        <span className="shopping-cart__price">{formattedValue}</span>
                    )}
                />
                {/* quantity */}
                <span className="shopping-cart__quantity">{amount}</span>
            </button>
        </MiniCart>
    );
}

export default ShoppingCart;
