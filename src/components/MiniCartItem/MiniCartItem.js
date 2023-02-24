import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CloseBtn } from '~/components/CloseBtn';
import { remove, increase, decrease } from '~/state/features/cartSlice';
import './MiniCartItem.css';

function MiniCartItem({ item }) {
    const { id, name, image, price, amount } = item;
    const dispatch = useDispatch();
    return (
        <div className="mini-cart-item__wrapper">
            <CloseBtn
                icon={<AiOutlineClose size="1.2rem" />}
                onClose={() => dispatch(remove(item))}
            />

            <div className="w-[80px]">
                {/* image */}
                <img className="w-full rounded-lg object-contain" src={image} alt={name} />
            </div>
            <div className="flex-1 ml-6">
                {/* name */}
                <Link to={`detail/${id}`} className="mini-cart-item__name">
                    {name}
                </Link>

                <div className="flex items-center justify-between">
                    {/* handle count */}
                    <div className="mini-cart-item__control-box">
                        <button
                            className={`mini-cart-item__control-style mini-cart-item__control-btn ${
                                amount === 0 ? 'mini-cart-item__control-disabled' : ''
                            }`}
                            onClick={() => dispatch(decrease(item))}
                        >
                            <AiOutlineMinus />
                        </button>

                        <span className="mini-cart-item__control-style">{amount}</span>

                        <button
                            className={`mini-cart-item__control-style mini-cart-item__control-btn`}
                            onClick={() => dispatch(increase(item))}
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>

                    {/* price */}
                    <div className="flex flex-col items-end w-[115px]">
                        <NumericFormat
                            value={price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            renderText={(formattedValue) => (
                                <div className="text-base text-primary-green">{formattedValue}</div>
                            )}
                        />
                        <NumericFormat
                            value={price * amount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            renderText={(formattedValue) => (
                                <div className="text-lg font-semibold text-primary-orange">
                                    Total: {formattedValue}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

MiniCartItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MiniCartItem;
