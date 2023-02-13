import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import useGetCategories from '~/hooks/useGetCategories';
import { addToCart } from '~/state/features/cartSlice';
import { resetPageItem } from '~/state/features/paginationSlice';

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

    const handleCategoryClick = () => {
        dispatch(resetPageItem());
        window.scrollTo(0, 0);
    };

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

                <Link
                    to={`./detail/${idDrink}`}
                    className="block rounded-xl overflow-hidden "
                    onClick={() => window.scrollTo(0, 0)}
                >
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
                    onClick={() => window.scrollTo(0, 0)}
                >
                    {strDrink}
                </Link>

                <Link
                    to={`./category/${categoryIndex}`}
                    className="block text-darkLightText text-sm hover:text-primary-green"
                    onClick={() => handleCategoryClick()}
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
