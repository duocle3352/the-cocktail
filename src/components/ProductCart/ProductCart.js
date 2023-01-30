import PropTypes from 'prop-types';
import { BiPlus } from 'react-icons/bi';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import useGetCategories from '~/hooks/useGetCategories';

function ProductCart({ id, name, image, type }) {
    const price = Number(id.slice(3));
    const categoriesData = useGetCategories();
    let categoryIndex;

    if (categoriesData?.drinks) {
        categoryIndex = categoriesData.drinks.findIndex(
            (category) => category.strCategory === type,
        );
    }

    return (
        <div>
            <div className="relative">
                <button
                    className="group/add absolute top-4 right-4 z-[1] bg-white rounded-lg
                             p-1 hover:bg-primary-green"
                >
                    <BiPlus className="group-hover/add:text-white" size="1rem" />
                </button>

                <Link to={`./detail/${id}`} className="block rounded-xl overflow-hidden ">
                    <img className="hover:scale-110 transition-all" src={image} alt={name} />
                </Link>
            </div>
            <div className="pt-2">
                <Link
                    to={`./detail/${id}`}
                    className="block text-lg font-semibold hover:text-primary-green"
                >
                    {name}
                </Link>

                <Link
                    to={`./category/${categoryIndex}`}
                    className="block text-darkLightText text-sm hover:text-primary-green"
                >
                    {type}
                </Link>

                <NumericFormat
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                    fixedDecimalScale={true}
                    prefix={'$'}
                    renderText={(formattedValue) => (
                        <p className="text-xl font-bold">{formattedValue}</p>
                    )}
                />
            </div>
        </div>
    );
}

ProductCart.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default ProductCart;
