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
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5
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
