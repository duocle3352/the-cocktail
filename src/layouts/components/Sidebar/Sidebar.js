import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPageItem } from '~/state/features/paginationSlice';
import useGetCategories from '~/hooks/useGetCategories';

function Sidebar() {
    const dispatch = useDispatch();
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

    const handleClick = () => {
        dispatch(resetPageItem());
        window.scrollTo(0, 0);
    };

    return (
        <ul
            className="hidden items-center justify-between h-16 bg-ap-bg dark:bg-black px-20
                        lg:flex xl:flex"
        >
            {categories.map((category, index) => (
                <li key={index}>
                    <Link
                        to={`/category/${index}`}
                        className={`text-base font-semibold py-2 hover:text-primary-green hover:underline
                        dark:text-white dark:hover:text-primary-orange`}
                        onClick={() => handleClick()}
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
