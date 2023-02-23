import { useInView } from 'react-intersection-observer';
import { ProductItem } from '~/components/ProductItem';
import { Loading } from '~/components/Loading';
import images from '~/assets/images';

function NonAlcoholic({ items }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`flex flex-col bg-light-blue-bg pt-12 px-9 -mx-9
            ${inView ? 'drop-up' : 'drop-down'}`}
        >
            <img src={images.drawGlass} alt="draw" className="h-[200px] object-contain" />
            <div
                className="w-full grid grid-cols-5 gap-x-6 gap-y-8 
                bg-primary-bg dark:bg-black py-12 px-10 rounded-t-xl"
            >
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
