import { DetailItem } from '~/components/DetailItem';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailItemService } from '~/services';
import { Loading } from '~/components/Loading';
import { SectionHeader } from '~/components/SectionHeader';
import { ProductItem } from '~/components/ProductItem';
import { shopYourFavorites } from '~/data';

const List = ({ data, title }) => {
    return (
        <ul className="list-decimal list-inside">
            <h4 className="mb-4">{title}</h4>
            {data.map((key) => (
                <li key={key[0]} className="text-lg py-1">
                    {key[1]}
                </li>
            ))}
        </ul>
    );
};

function Detail() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [measures, setMeasures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            const result = await getDetailItemService(id);
            const resultArray = Object.entries(result);
            const ingredients = resultArray.filter((item) => {
                return item[0].startsWith('strIngredient') && item[1];
            });
            const measures = resultArray.filter((item) => {
                return item[0].startsWith('strMeasure') && item[1];
            });

            setIngredients(ingredients);
            setMeasures(measures);
            setItem(result);
            setIsLoading(false);
        };

        fetchApi();
    }, [id]);

    return (
        <>
            {!isLoading ? (
                <>
                    <DetailItem item={item} className="flex-row-reverse" />
                    <div className="flex items-start justify-around mb-10">
                        <List data={ingredients} title="Ingredients" />
                        <List data={measures} title="Measures" />
                    </div>
                </>
            ) : (
                <Loading className="text-3xl" />
            )}

            <div>
                <SectionHeader title="Customer" subtitle="also like" />
                <div className="grid grid-cols-5 gap-x-6 gap-y-8">
                    {shopYourFavorites.map((item) => (
                        <ProductItem key={item.idDrink} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Detail;
