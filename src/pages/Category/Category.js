import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SectionHeader } from '~/components/SectionHeader';
import { Paginate } from '~/components/Paginate';
import { Loading } from '~/components/Loading';
import useGetCategories from '~/hooks/useGetCategories';
import getItemByCategory from '~/services/getItemByCategory';

function Category() {
    const params = useParams();
    const [items, setItems] = useState([]);

    const categoriesData = useGetCategories();
    let categories = [];
    if (categoriesData.drinks) categories = categoriesData.drinks;
    // eslint-disable-next-line eqeqeq
    const currentType = categories.find((category, index) => index == params.type);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getItemByCategory(currentType?.strCategory);
            if (result.drinks) setItems(result.drinks);
        };

        fetchApi();
    }, [currentType]);

    return (
        <>
            <div className="flex items-start justify-between">
                <SectionHeader title={currentType?.strCategory || ''} />
                <p>filter</p>
            </div>

            {items.length > 0 ? (
                <Paginate items={items} pageSize={20} />
            ) : (
                <Loading className="text-4xl" />
            )}
        </>
    );
}

export default Category;
