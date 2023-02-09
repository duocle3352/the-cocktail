import { ShopService } from '~/components/ShopService';
import { ProductItem } from '~/components/ProductItem';
import { SectionHeader } from '~/components/SectionHeader';
import { FeaturedCollections } from '~/components/FeaturedCollections';
import { SelectedSection } from '~/components/SelectedSection';
import { useGetNonAlcoholic } from '~/hooks';
import { shopYourFavorites } from '~/data';
import videos from '~/assets/videos';
import images from '~/assets/images';

function Home() {
    const nonAlcoholic = useGetNonAlcoholic();
    let listNonAlcoholic = [];
    if (nonAlcoholic?.drinks) listNonAlcoholic = nonAlcoholic.drinks;
    // get 10 item Non Alcoholic
    const newListNonAlcoholic = listNonAlcoholic.slice(0, 10);

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
                    link="/collection/non-alcoholic"
                    isShowBtn
                />
                <div
                    className="flex flex-col
                            bg-light-blue-bg pt-12 px-9 -mx-9"
                >
                    <img src={images.drawGlass} alt="draw" className="h-[200px] object-contain" />
                    <div
                        className="w-full grid grid-cols-5 gap-x-6 gap-y-8 
                                bg-primary-bg py-12 px-10 rounded-t-xl"
                    >
                        {newListNonAlcoholic.map((item) => (
                            <ProductItem key={item.idDrink} item={item} />
                        ))}
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
