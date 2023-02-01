import { ShopService } from '~/components/ShopService';
import { ProductCart } from '~/components/ProductCart';
import { SectionHeader } from '~/components/SectionHeader';
import { shopYourFavorites } from '~/data';
import { useGetNonAlcoholic } from '~/hooks';
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

            <section className="section-wrapper">
                <SectionHeader title="Shop" subtitle="Your Favorites" />
                <div className="grid grid-cols-5 gap-x-6 gap-y-8">
                    {shopYourFavorites.map((product) => (
                        <ProductCart
                            key={product.idDrink}
                            id={product.idDrink}
                            name={product.strDrink}
                            image={product.strDrinkThumb}
                            type={product.strCategory}
                        />
                    ))}
                </div>
            </section>

            <section className="section-wrapper">
                <SectionHeader
                    title="Non"
                    subtitle="Alcoholic"
                    link="./category/non-alcoholic"
                    isShowBtn
                />
                <div
                    className="flex flex-col
                            bg-light-blue-bg pt-12 px-9 -mx-9"
                >
                    <img src={images.drawGlass} alt="draw" className="h-[200px] object-contain" />
                    <div
                        className="w-full grid grid-cols-5 gap-x-6 gap-y-8 
                                bg-ap-bg py-12 px-10 rounded-t-xl"
                    >
                        {newListNonAlcoholic.map((product) => (
                            <ProductCart
                                key={product.idDrink}
                                id={product.idDrink}
                                name={product.strDrink}
                                image={product.strDrinkThumb}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="section-wrapper">
                <SectionHeader title="Suggestion " subtitle="For Today" />
                <div className="bg-light-blue-bg py-12 px-9 -mx-9">
                    <h2>lorem</h2>
                </div>
            </section> */}
        </>
    );
}

export default Home;
