import PropTypes from 'prop-types';
import { BiPlus } from 'react-icons/bi';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import useGetCategories from '~/hooks/useGetCategories';

import { useDispatch } from 'react-redux';
import { addToCart } from '~/state/features/cartSlice';

function ProductItem({ item }) {
    const dispatch = useDispatch();
    const categoriesData = useGetCategories();

    const { idDrink, strDrink, strCategory, strDrinkThumb } = item;
    const price = Number(idDrink.slice(3));
    let categoryIndex;
    if (categoriesData?.drinks && strCategory) {
        categoryIndex = categoriesData.drinks.findIndex(
            (category) => category.strCategory === strCategory,
        );
    }

    // item dispatch
    const newItem = { id: idDrink, name: strDrink, price, image: strDrinkThumb, type: strCategory };

    return (
        <div>
            <div className="relative">
                <button
                    className="group/add absolute top-4 right-4 z-[1] bg-white rounded-lg p-1
                            border-2 border-solid border-primary-green hover:bg-primary-green"
                    onClick={() => dispatch(addToCart(newItem))}
                >
                    <BiPlus className="group-hover/add:text-white" size="1rem" />
                </button>

                <Link to={`./detail/${idDrink}`} className="block rounded-xl overflow-hidden ">
                    <img
                        className="hover:scale-110 transition-all"
                        src={strDrinkThumb}
                        alt={strDrink}
                    />
                </Link>
            </div>
            <div className="pt-2">
                <Link
                    to={`./detail/${idDrink}`}
                    className="block text-lg font-semibold hover:text-primary-green"
                >
                    {strDrink}
                </Link>

                <Link
                    to={`./category/${categoryIndex}`}
                    className="block text-darkLightText text-sm hover:text-primary-green"
                >
                    {strCategory}
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

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ProductItem;
