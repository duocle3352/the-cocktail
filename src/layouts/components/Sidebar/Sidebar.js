import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPageItem } from '~/state/features/paginationSlice';
import useGetCategories from '~/hooks/useGetCategories';
import './Sidebar.css';

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
        <ul className="sidebar-wrapper">
            {categories.map((category, index) => (
                <li key={index} className="">
                    <Link
                        to={`/category/${index}`}
                        className="sidebar-item"
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
