import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useGetCategories from '~/hooks/useGetCategories';

function Sidebar() {
    const categoriesData = useGetCategories();
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (categoriesData === 'loading') setIsLoading(true);

        if (categoriesData?.drinks) {
            setCategories(categoriesData.drinks);
            setIsLoading(false);
            setIsError(false);
        }

        if (categoriesData === 'have error') setIsError(true);
    }, [categoriesData]);

    return (
        <ul className="flex items-center justify-between h-16 bg-ap-bg dark:bg-black px-20">
            {categories.map((category, index) => (
                <li key={index}>
                    <Link
                        to={`/category/${index}`}
                        className={`text-base font-semibold py-2 hover:text-primary-green hover:underline
                        dark:text-white dark:hover:text-primary-orange`}
                    >
                        {category.strCategory}
                    </Link>
                </li>
            ))}

            {isLoading && <li>Loading...</li>}
            {isError && <li>Have error</li>}
        </ul>
    );
}

export default Sidebar;
