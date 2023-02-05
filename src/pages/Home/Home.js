import { useEffect, useState } from 'react';
import { ShopService } from '~/components/ShopService';
import { ProductItem } from '~/components/ProductItem';
import { DetailItem } from '~/components/DetailItem';
import { SectionHeader } from '~/components/SectionHeader';
import { useGetNonAlcoholic } from '~/hooks';
import { getRandomCocktailService } from '~/services';
import { shopYourFavorites } from '~/data';
import videos from '~/assets/videos';
import images from '~/assets/images';

function Home() {
    const nonAlcoholic = useGetNonAlcoholic();
    let listNonAlcoholic = [];
    if (nonAlcoholic?.drinks) listNonAlcoholic = nonAlcoholic.drinks;
    // get 10 item Non Alcoholic
    const newListNonAlcoholic = listNonAlcoholic.slice(0, 10);

    const [randomItem1, setRandomItem1] = useState({});
    const [randomItem2, setRandomItem2] = useState({});

    useEffect(() => {
        const fetchApi1 = async () => {
            const result = await getRandomCocktailService();
            setRandomItem1(result.drinks[0]);
        };

        const fetchApi2 = async () => {
            const result = await getRandomCocktailService();
            setRandomItem2(result.drinks[0]);
        };

        fetchApi1();
        fetchApi2();
    }, []);

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
                        <ProductItem
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
                        {newListNonAlcoholic.map((product) => (
                            <ProductItem
                                key={product.idDrink}
                                id={product.idDrink}
                                name={product.strDrink}
                                image={product.strDrinkThumb}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-wrapper">
                <SectionHeader title="Selected " subtitle="For You" />
                <DetailItem
                    id={randomItem1.idDrink}
                    name={randomItem1.strDrink}
                    type={randomItem1.strCategory}
                    alcoholic={randomItem1.strAlcoholic}
                    glass={randomItem1.strGlass}
                    description={randomItem1.strInstructions}
                    image={randomItem1.strDrinkThumb}
                />
                <DetailItem
                    className="flex-row-reverse"
                    id={randomItem2.idDrink}
                    name={randomItem2.strDrink}
                    type={randomItem2.strCategory}
                    alcoholic={randomItem2.strAlcoholic}
                    glass={randomItem2.strGlass}
                    description={randomItem2.strInstructions}
                    image={randomItem2.strDrinkThumb}
                />
            </section>
        </>
    );
}

export default Home;
