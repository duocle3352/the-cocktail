import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

import useGetCategories from '~/hooks/useGetCategories';
import { Button } from '~/components/Button';
import { addToCart } from '~/state/features/cartSlice';
import { resetPageItem } from '~/state/features/paginationSlice';
import './DetailItem.css';

function DetailItem({ item }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
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
        <div ref={ref} className={`detail-item__wrapper  ${inView ? 'drop-up' : 'drop-down'}`}>
            <div className="w-full md:w-[400px] mt-5 px-5">
                <Link
                    to={`category/${categoryIndex}`}
                    className="detail-item-category"
                    onClick={() => handleConnectClick()}
                >
                    {strCategory}
                </Link>

                <div className="flex">
                    <p className="detail-item-tag">{strAlcoholic}</p>
                    <p className="detail-item-tag ml-5">{strGlass}</p>
                </div>

                {/* title */}
                <Link
                    to={`/detail/${idDrink}`}
                    className="detail-item-title"
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
                        <h3 className="inline-block font-bold dark:text-white text-underline">
                            {formattedValue}
                        </h3>
                    )}
                />
                {/* description */}
                <p className="text-sm text-darkLightText my-10">{strInstructions}</p>
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
            <img
                className="md:w-[250px] lg:w-[400px] rounded-xl"
                src={strDrinkThumb}
                alt={strDrink}
            />
        </div>
    );
}

DetailItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default DetailItem;
