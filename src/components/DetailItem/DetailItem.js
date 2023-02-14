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
    const { idDrink, strDrink, strCategory, strAlcoholic, strDrinkThumb, strInstructions } = item;

    let price = 0;
    let alcoholicCollect;
    if (idDrink && strAlcoholic) {
        price = Number(idDrink.slice(3));
        alcoholicCollect = strAlcoholic.replace(/ /g, '_');
    }

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

    const ConnectLink = ({ to, title }) => {
        return (
            <Link
                to={to}
                className="text-base text-darkLightText font-semibold mr-4 hover:text-primary-orange"
                onClick={() => handleConnectClick()}
            >
                {title}
            </Link>
        );
    };

    return (
        <div
            className={`flex items-center justify-around -mx-9 py-12 px-24
                        ${className}`}
        >
            <div className="w-[500px]">
                {/* Connect links */}
                <ConnectLink to={`category/${categoryIndex}`} title={strCategory} />
                <ConnectLink to={`collection/${alcoholicCollect}`} title={strAlcoholic} />
                {/* title */}
                <h4 className=" mt-3">{strDrink}</h4>
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
