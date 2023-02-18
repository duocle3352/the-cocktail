import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { CloseBtn } from '~/components/CloseBtn';
import { decrease, increase, remove } from '~/state/features/cartSlice';

function CartItem({ item }) {
    const { id, name, price, image, amount } = item;
    const dispatch = useDispatch();

    return (
        <li className="grid grid-cols-12 gap-5 py-3 relative">
            {/* info */}
            <div className="col-span-5 flex ">
                <img className="w-[100px] rounded-lg object-contain mr-10" src={image} alt={name} />
                <Link
                    to={`detail/${id}`}
                    className="contents text-lg font-semibold hover:text-primary-green"
                >
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
                    <p className="col-span-2 text-xl font-bold">{formattedValue}</p>
                )}
            />
            {/* amount */}
            <div className="col-span-2 flex items-start">
                <button
                    className={`border-2 border-solid border-primary-green rounded-full hover:text-primary-orange ${
                        amount === 0
                            ? 'cursor-default text-darkLightText hover:text-darkLightText border-darkLightText'
                            : ''
                    }`}
                    onClick={() => dispatch(decrease(item))}
                >
                    <FiChevronLeft size="1.6rem" />
                </button>

                <p className="text-xl font-bold px-10">{amount}</p>

                <button
                    className={`border-2 border-solid border-primary-green rounded-full hover:text-primary-orange`}
                    onClick={() => dispatch(increase(item))}
                >
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
                    <p className="col-span-2 text-xl font-bold">{formattedValue}</p>
                )}
            />
            {/* remove */}
            <CloseBtn
                icon={<AiOutlineClose size="2rem" />}
                onClose={() => dispatch(remove(item))}
            />
        </li>
    );
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CartItem;
