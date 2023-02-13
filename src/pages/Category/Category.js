import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

import { SectionHeader } from '~/components/SectionHeader';
import { Paginate } from '~/components/Paginate';
import { Loading } from '~/components/Loading';
import useGetCategories from '~/hooks/useGetCategories';
import getItemByCategory from '~/services/getItemByCategory';

const options = [
    { value: '', label: 'Default' },
    { value: 'A-Z', label: 'Alphabetical, A-Z' },
    { value: 'Z-A', label: 'Alphabetical, Z-A' },
];

function Category() {
    const params = useParams();
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');

    const categoriesData = useGetCategories();
    let categories = [];
    if (categoriesData.drinks) categories = categoriesData.drinks;
    // eslint-disable-next-line eqeqeq
    const currentType = categories.find((category, index) => index == params.type);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getItemByCategory(currentType?.strCategory);
            if (result.drinks) {
                switch (filter) {
                    case 'A-Z':
                        result.drinks.sort((a, b) => {
                            let x = a.strDrink.toLowerCase();
                            let y = b.strDrink.toLowerCase();

                            if (x < y) return -1;
                            if (x > y) return 1;
                            return 0;
                        });
                        setItems(result.drinks);
                        break;
                    case 'Z-A':
                        result.drinks.sort((a, b) => {
                            let x = a.strDrink.toLowerCase();
                            let y = b.strDrink.toLowerCase();

                            if (x > y) return -1;
                            if (x < y) return 1;
                            return 0;
                        });
                        setItems(result.drinks);
                        break;
                    default:
                        result.drinks.sort((a, b) => {
                            let x = a.idDrink.toLowerCase();
                            let y = b.idDrink.toLowerCase();

                            if (x > y) return -1;
                            if (x < y) return 1;
                            return 0;
                        });
                        setItems(result.drinks);
                        break;
                }
            }
        };

        fetchApi();
    }, [currentType, filter]);

    const handleSelectChange = (e) => {
        setFilter(e.value);
    };

    return (
        <>
            <div className="flex items-start justify-between z-10">
                <SectionHeader title={currentType?.strCategory || ''} />
                <Select
                    options={options}
                    defaultValue={options[0]}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'grey' : '#115e5d',
                            width: '220px',
                            padding: '6px',
                        }),
                    }}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 12,
                        cursor: 'pointer',
                        colors: {
                            ...theme.colors,
                            primary50: '#115e5d',
                            primary25: '#aed1d4',
                            primary: '#115e5d',
                        },
                    })}
                    onChange={(e) => handleSelectChange(e)}
                />
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
