import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { BsFillCartPlusFill } from 'react-icons/bs';

import useGetCategories from '~/hooks/useGetCategories';
import { Button } from '~/components/Button';
import { addToCart } from '~/state/features/cartSlice';
import { resetPageItem } from '~/state/features/paginationSlice';

function DetailItem({ item, className }) {
    const dispatch = useDispatch();
    const categoriesData = useGetCategories();
    const {
        idDrink,
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strDrinkThumb,
        strInstructions,
    } = item;

    let price = 0;
    if (idDrink) price = Number(idDrink.slice(3));

    let categoryIndex;
    if (categoriesData?.drinks) {
        categoryIndex = categoriesData.drinks.findIndex(
            (category) => category.strCategory === strCategory,
        );
    }

    // item dispatch
    const newItem = {
        id: idDrink,
        name: strDrink,
        category: strCategory,
        price: price,
        image: strDrinkThumb,
        description: strInstructions,
    };

    const handleConnectClick = () => {
        dispatch(resetPageItem());
        window.scrollTo(0, 0);
    };

    return (
        <div
            className={`flex items-center justify-around -mx-9 py-12 px-24
                        ${className}`}
        >
            <div className="w-[500px]">
                <Link
                    to={`category/${categoryIndex}`}
                    className="text-base text-primary-orange font-semibold hover:text-primary-orange
                                px-2 -ml-2 border-2 border-primary-orange rounded-full"
                    onClick={() => handleConnectClick()}
                >
                    {strCategory}
                </Link>

                <div className="flex">
                    <p className="text-base text-darkLightText font-semibold mt-2">
                        {strAlcoholic}
                    </p>
                    <p className="text-base text-darkLightText font-semibold mt-2 ml-5">
                        {strGlass}
                    </p>
                </div>

                {/* title */}
                <Link
                    to={`/detail/${idDrink}`}
                    className="block text-lg font-semibold mt-3"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    {strDrink}
                </Link>
                {/* price */}
                <NumericFormat
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                    fixedDecimalScale={true}
                    prefix={'$'}
                    renderText={(formattedValue) => (
                        <h3 className="inline-block font-bold text-underline">{formattedValue}</h3>
                    )}
                />
                {/* description */}
                <p className="w-[400px] text-sm text-darkLightText my-10">{strInstructions}</p>
                {/* btn add */}
                <Button
                    leftIcon={<BsFillCartPlusFill />}
                    btnPrimaryOrange
                    onClick={() => dispatch(addToCart(newItem))}
                >
                    ADD TO CART
                </Button>
            </div>
            {/* image */}
            <div className="w-[500px]">
                <img className="w-full" src={strDrinkThumb} alt={strDrink} />
            </div>
        </div>
    );
}

DetailItem.propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default DetailItem;
