import { ShopService } from '~/components/ShopService';
import { ProductItem } from '~/components/ProductItem';
import { SectionHeader } from '~/components/SectionHeader';
import { FeaturedCollections } from '~/components/FeaturedCollections';
import { SelectedSection } from '~/components/SelectedSection';
import { Loading } from '~/components/Loading';
import { useGetNonAlcoholic } from '~/hooks';
import { shopYourFavorites } from '~/data';
import config from '~/config';
import videos from '~/assets/videos';
import images from '~/assets/images';

function Home() {
    const nonAlcoholicItems = useGetNonAlcoholic();
    // get 10 item Non Alcoholic
    let newNonAlcoholicItems = [];
    if (nonAlcoholicItems) {
        newNonAlcoholicItems = nonAlcoholicItems.slice(0, 10);
    }

    return (
        <>
            {/* shop services */}
            <section className="section-wrapper grid grid-cols-3 group/services">
                <ShopService
                    videoSource={videos.draw1}
                    imageSource={images.draws1}
                    title="Search"
                    topDescription="1500+ cocktail"
                    bottomDescription="to choose from"
                />

                <ShopService
                    videoSource={videos.draw2}
                    imageSource={images.draws2}
                    title="Tap"
                    topDescription="Checkout in seconds"
                    bottomDescription="with express checkout"
                />

                <ShopService
                    videoSource={videos.draw3}
                    imageSource={images.draws3}
                    title="Drink"
                    topDescription="Delivered to your"
                    bottomDescription="door within days"
                />
            </section>

            <section className="section-wrapper">
                <SectionHeader title="Shop" subtitle="Your Favorites" />
                <div className="grid grid-cols-5 gap-x-6 gap-y-8">
                    {shopYourFavorites.map((item) => (
                        <ProductItem key={item.idDrink} item={item} />
                    ))}
                </div>
            </section>

            <section className="section-wrapper">
                <SectionHeader
                    title="Non"
                    subtitle="Alcoholic"
                    link={config.routes.nonAlcoholic}
                    isShowBtn
                />
                <div
                    className="flex flex-col
                            bg-light-blue-bg pt-12 px-9 -mx-9"
                >
                    <img src={images.drawGlass} alt="draw" className="h-[200px] object-contain" />
                    <div
                        className="w-full grid grid-cols-5 gap-x-6 gap-y-8 
                                bg-primary-bg dark:bg-black py-12 px-10 rounded-t-xl"
                    >
                        {newNonAlcoholicItems.length > 0 ? (
                            newNonAlcoholicItems.map((item) => (
                                <ProductItem key={item.idDrink} item={item} />
                            ))
                        ) : (
                            <Loading className="text-2xl" />
                        )}
                    </div>
                </div>
            </section>

            <section className="section-wrapper">
                <SectionHeader title="Selected " subtitle="For You" />
                <SelectedSection />
            </section>

            <section className="section-wrapper">
                <SectionHeader title="Featured" subtitle="Collections" />
                <FeaturedCollections />
            </section>
        </>
    );
}

export default Home;
