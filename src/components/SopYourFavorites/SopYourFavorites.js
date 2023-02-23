import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { ProductItem } from '~/components/ProductItem';

function SopYourFavorites({ items }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`grid grid-cols-5 gap-x-6 gap-y-8
            ${inView ? 'drop-up' : 'drop-down'}`}
        >
            {items && items.map((item) => <ProductItem key={item.idDrink} item={item} />)}
        </div>
    );
}

SopYourFavorites.propTypes = {
    items: PropTypes.array.isRequired,
};

export default SopYourFavorites;
