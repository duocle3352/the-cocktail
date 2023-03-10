import { useInView } from 'react-intersection-observer';
import { FeaturedItem } from '../FeaturedItem';
import images from '~/assets/images';

function FeaturedCollections() {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`grid grid-cols-2 ${inView ? 'drop-up' : 'drop-down'}`}>
            <div>
                <div className="flex">
                    <FeaturedItem
                        to="category/1"
                        title="Cocktail"
                        bgImg={images.collectionCocktail}
                        bgColor="bg-primary-green"
                        className="flex-1"
                    />
                    <div className="w-[300px] flex flex-col">
                        <FeaturedItem
                            to="category/2"
                            title="Shake"
                            bgImg={images.collectionShake}
                            bgColor="bg-light-blue-bg"
                            className="h-[100px]"
                        />

                        <FeaturedItem
                            to="category/5"
                            title="Shot"
                            bgImg={images.collectionShot}
                            bgColor="bg-primary-green"
                            className="h-[100px]"
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <FeaturedItem
                        to="category/9"
                        title="Beer"
                        bgImg={images.collectionBeer}
                        bgColor="bg-primary-orange"
                        className="flex-1 h-[200px]"
                    />
                    <FeaturedItem
                        to="category/0"
                        title="Ordinary"
                        bgImg={images.collectionOrdinary}
                        bgColor="bg-light-blue-bg"
                        className="flex-1 h-[200px]"
                    />
                    <FeaturedItem
                        to="category/4"
                        title="Cocoa"
                        bgImg={images.collectionCocoa}
                        bgColor="bg-primary-orange"
                        className="flex-1 h-[200px]"
                    />
                </div>
            </div>
            <div>
                <div className="flex">
                    <div className="flex flex-col flex-1">
                        <FeaturedItem
                            to="category/8"
                            title="Punch / Party"
                            bgImg={images.collectionParty}
                            bgColor="bg-primary-orange"
                            className="h-[180px]"
                        />
                        <FeaturedItem
                            to="category/10"
                            title="Soft Drink"
                            bgImg={images.collectionSoft}
                            bgColor="bg-primary-green"
                            className="h-[91px]"
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <FeaturedItem
                            to="category/7"
                            title="Homemade Liqueur"
                            bgImg={images.collectionHomemade}
                            bgColor="bg-primary-green"
                            className="h-[91px]"
                        />
                        <FeaturedItem
                            to="category/6"
                            title="Coffee / Tea"
                            bgImg={images.collectionCoffeeTea}
                            bgColor="bg-primary-orange"
                            className="h-[180px]"
                        />
                    </div>
                </div>
                <FeaturedItem
                    to="category/3"
                    title="Other / Unknown"
                    bgImg={images.collectionOther}
                    bgColor="bg-light-blue-bg"
                    className="h-[130px]"
                />
            </div>
        </div>
    );
}

export default FeaturedCollections;
