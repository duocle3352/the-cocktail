/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getCategories } from '~/services';

function Sidebar() {
    const [categories, setCategories] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const results = await getCategories();

            setCategories(results.drinks);
        };

        fetchApi();
    }, []);

    return (
        <ul className="flex items-center justify-between h-16 bg-primary-bg px-20">
            {categories.map((category, index) => (
                <li key={index}>
                    <Link
                        to={`/category/${index}`}
                        className={`text-base font-semibold py-2
                        hover:text-primary-green hover:underline
                        ${params.type == index ? 'text-primary-green underline' : ''}`}
                    >
                        {category.strCategory}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Sidebar;
