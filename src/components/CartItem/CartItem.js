import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { decrease, increase, remove } from '~/state/features/cartSlice';
import './CartItem.css';

function CartItem({ item }) {
    const { id, name, price, image, amount } = item;
    const dispatch = useDispatch();

    return (
        <li className="cart-item">
            {/* info */}
            <div className="col-span-4 flex ">
                <img className="cart-item__image" src={image} alt={name} />
                <Link to={`detail/${id}`} className="cart-item__title">
                    {name}
                </Link>
            </div>
            {/* price */}
            <NumericFormat
                value={price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(formattedValue) => (
                    <p className="col-span-2 cart-item__price">{formattedValue}</p>
                )}
            />
            {/* amount */}
            <div className="col-span-4 md:col-span-3 flex items-start">
                <button
                    className={`cart-item__QTY-btn ${
                        amount === 0 ? 'cart-item__QTY-disabled' : ''
                    }`}
                    onClick={() => dispatch(decrease(item))}
                >
                    <FiChevronLeft size="1.6rem" />
                </button>
                <p className="cart-item__QTY">{amount}</p>
                <button className="cart-item__QTY-btn" onClick={() => dispatch(increase(item))}>
                    <FiChevronRight size="1.6rem" />
                </button>
            </div>
            {/* total price */}
            <NumericFormat
                value={price * amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(formattedValue) => (
                    <p className="col-span-2 cart-item__price">{formattedValue}</p>
                )}
            />
            {/* remove */}
            <div className="absolute top-3 right-0 md:static ">
                <button className="cart-item__remove-btn" onClick={() => dispatch(remove(item))}>
                    <AiOutlineClose size="1rem" />
                </button>
            </div>
        </li>
    );
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CartItem;
