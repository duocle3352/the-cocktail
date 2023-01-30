import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CloseBtn } from '~/components/CloseBtn';

const quantityCSS = 'text-base font-semibold p-2';

function MiniCartItem({ id, name, thumb, quantity }) {
    const price = Number(id.slice(3)) * quantity;

    const remove = () => {
        console.log('removed');
    };

    return (
        <div className="flex relative w-full bg-primary-bg px-6 py-4 my-2 rounded-lg">
            <CloseBtn icon={<AiOutlineClose size="1.2rem" />} onClose={remove} />

            <div className="w-[80px]">
                {/* image */}
                <img className="w-full rounded-lg object-contain" src={thumb} alt={name} />
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
                            className={`${quantityCSS} hover:text-primary-orange ${
                                quantity === 1
                                    ? 'cursor-default text-darkLightText hover:text-darkLightText'
                                    : ''
                            }`}
                            // onClick={() => addItem(id)}
                        >
                            <AiOutlineMinus />
                        </button>

                        <span className={quantityCSS}>{quantity}</span>

                        <button
                            className={`${quantityCSS} hover:text-primary-orange`}
                            // onClick={() => plusItem(id, name, thumb)}
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>

                    {/* price */}
                    <NumericFormat
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(formattedValue) => (
                            <span className="text-lg font-semibold text-primary-orange">
                                {formattedValue}
                            </span>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

MiniCartItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default MiniCartItem;
