import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CloseBtn } from '~/components/CloseBtn';

import { useDispatch } from 'react-redux';
import { remove, increase, decrease } from '~/state/features/cartSlice';

const controlStyle = 'text-base font-semibold p-2';

function MiniCartItem({ item }) {
    const { id, name, image, price, amount } = item;
    const dispatch = useDispatch();
    return (
        <div className="flex relative w-full bg-primary-bg px-6 py-4 my-2 rounded-lg">
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
                <Link
                    to={`detail/${id}`}
                    className="block text-lg font-semibold mb-2 hover:text-primary-green"
                >
                    {name}
                </Link>

                <div className="flex items-center justify-between">
                    {/* handle count */}
                    <div className="flex items-center justify-around w-[120px] border-2 border-primary-orange rounded-xl">
                        <button
                            className={`${controlStyle} hover:text-primary-orange ${
                                amount === 0
                                    ? 'cursor-default text-darkLightText hover:text-darkLightText'
                                    : ''
                            }`}
                            onClick={() => dispatch(decrease(item))}
                        >
                            <AiOutlineMinus />
                        </button>

                        <span className={controlStyle}>{amount}</span>

                        <button
                            className={`${controlStyle} hover:text-primary-orange`}
                            onClick={() => dispatch(increase(item))}
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>

                    {/* price */}
                    <div className="flex flex-col items-end">
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
