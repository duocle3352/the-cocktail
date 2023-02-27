import { useInView } from 'react-intersection-observer';
import { ProductItem } from '~/components/ProductItem';
import { Loading } from '~/components/Loading';
import images from '~/assets/images';
import './NonAlcoholic.css';

function NonAlcoholic({ items }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`non-alcoholic__wrapper ${inView ? 'drop-up' : 'drop-down'}`}>
            <img
                src={images.drawGlass}
                alt="draw"
                className="h-[100px] md:h-[200px] object-contain"
            />
            <div className="non-alcoholic__items">
                {items.length > 0 ? (
                    items.map((item) => <ProductItem key={item.idDrink} item={item} />)
                ) : (
                    <Loading className="text-2xl" />
                )}
            </div>
        </div>
    );
}

export default NonAlcoholic;
