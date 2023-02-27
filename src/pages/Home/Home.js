import { ShopService } from '~/components/ShopService';
import { SectionHeader } from '~/components/SectionHeader';
import { FeaturedCollections } from '~/components/FeaturedCollections';
import { SelectedSection } from '~/components/SelectedSection';
import { SopYourFavorites } from '~/components/SopYourFavorites';
import { NonAlcoholic } from '~/components/NonAlcoholic';
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
            <section className="section-wrapper grid grid-cols-3 gap-5 xl:gap-10 group/services">
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
                <SopYourFavorites items={shopYourFavorites} />
            </section>

            <section className="section-wrapper">
                <SectionHeader
                    title="Non"
                    subtitle="Alcoholic"
                    link={config.routes.nonAlcoholic}
                    isShowBtn
                />
                <NonAlcoholic items={newNonAlcoholicItems} />
            </section>

            <section className="section-wrapper">
                <SectionHeader title="Selected " subtitle="For You" />
                <SelectedSection />
            </section>

            <section className="section-wrapper hidden lg:block">
                <SectionHeader title="Featured" subtitle="Collections" />
                <FeaturedCollections />
            </section>
        </>
    );
}

export default Home;
