import { useEffect, useState } from 'react';
import { DetailItem } from '~/components/DetailItem';
import { getRandomCocktailService } from '~/services';

function SelectedSection() {
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
            <DetailItem item={randomItem1} />
            <DetailItem className="flex-row-reverse" item={randomItem2} />
        </>
    );
}

export default SelectedSection;
