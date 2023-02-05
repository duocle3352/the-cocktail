import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import { Button } from '~/components/Button';
import useGetCategories from '~/hooks/useGetCategories';

function DetailItem({
    id = '0',
    name,
    type,
    alcoholic = '',
    glass = '',
    description,
    image,
    className,
}) {
    const [count, setCount] = useState(1);
    const price = Number(id.slice(3));

    const categoriesData = useGetCategories();
    let categoryIndex;
    if (categoriesData?.drinks) {
        categoryIndex = categoriesData.drinks.findIndex(
            (category) => category.strCategory === type,
        );
    }

    const alcoholicCollect = alcoholic.replace(/ /g, '_');
    const glassCollect = glass.replace(/ /g, '_');

    const ConnectLink = (to, title) => {
        return (
            <Link
                to={to}
                className="text-base text-darkLightText font-semibold mr-4 hover:text-primary-orange"
            >
                {title}
            </Link>
        );
    };

    const handleCount = (option) => {
        if (option === 'count up') {
            setCount(count + 1);
        } else {
            if (count === 1) setCount(count);
            if (count > 1) setCount(count - 1);
        }
    };

    return (
        <div
            className={`flex items-center justify-around -mx-9 py-12 px-24
                        ${className}`}
        >
            <div className="w-[500px]">
                {/* Connect links */}
                {ConnectLink(`category/${categoryIndex}`, type)}
                {ConnectLink(`collection/${alcoholicCollect}`, alcoholic)}
                {ConnectLink(`collection/${glassCollect}`, glass)}
                {/* title */}
                <h4 className=" mt-3">{name}</h4>

                <div className="flex items-center justify-between mt-5">
                    {/* quality control */}
                    <div
                        className="inline-flex items-center justify-around 
                           w-[100px] border-2 border-borderColor rounded-lg"
                    >
                        <button
                            className={`text-lg px-2 hover:text-primary-orange 
                                        ${
                                            count === 1
                                                ? 'text-darkLightText cursor-default hover:text-darkLightText'
                                                : ''
                                        }`}
                            onClick={() => handleCount()}
                        >
                            -
                        </button>
                        <span>{count}</span>
                        <button
                            className="text-lg px-2 hover:text-primary-orange"
                            onClick={() => handleCount('count up')}
                        >
                            +
                        </button>
                    </div>
                    {/* price */}
                    <NumericFormat
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        prefix={'$'}
                        renderText={(formattedValue) => (
                            <h3 className="font-bold text-underline">{formattedValue}</h3>
                        )}
                    />
                </div>
                {/* description */}
                <p className="w-[400px] text-sm text-darkLightText my-10">{description}</p>

                <Button leftIcon={<BsFillCartPlusFill />} btnPrimaryOrange>
                    ADD TO CART
                </Button>
            </div>
            {/* image */}
            <div className="w-[500px]">
                <img className="w-full" src={image} alt={name} />
            </div>
        </div>
    );
}

DetailItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    alcoholic: PropTypes.string,
    glass: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    className: PropTypes.string,
};

export default DetailItem;
