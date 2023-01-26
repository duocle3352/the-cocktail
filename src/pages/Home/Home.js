import { ShopService } from '~/components/ShopService';
import videos from '~/assets/videos';
import images from '~/assets/images';

function Home() {
    return (
        <>
            {/* shop services */}
            <section className="grid grid-cols-3 group/services">
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

            {/* <section className="section-wrapper">
               
                <h2 className="font-semibold text-primary-green">
                    <p>Shop</p>
                    <p className="tracking-wider">your favorites</p>
                </h2>
                
            </section> */}
        </>
    );
}

export default Home;
