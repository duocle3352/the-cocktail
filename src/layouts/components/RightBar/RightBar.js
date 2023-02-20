/* eslint-disable eqeqeq */
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPageItem } from '~/state/features/paginationSlice';
import useGetCategories from '~/hooks/useGetCategories';

function RightBar() {
    const dispatch = useDispatch();
    const params = useParams();
    const categoriesData = useGetCategories();
    let categories = [];
    if (categoriesData?.drinks) categories = categoriesData.drinks;

    const handleClick = () => {
        dispatch(resetPageItem());
        window.scrollTo(0, 0);
    };

    const Title = ({ index, category }) => {
        const active = params.type == index ? 'text-primary-orange dark:text-primary-orange' : '';
        return (
            <Link
                to={`/category/${index}`}
                className={`flex items-center font-semibold h-[72px] bg-primary-bg 
                            pl-[30px] mb-4 rounded-xl hover:text-primary-orange 
                            dark:text-white dark:bg-dark-bg dark:hover:text-primary-orange
                            ${active}`}
                onClick={() => handleClick()}
            >
                {category.strCategory}
            </Link>
        );
    };

    return (
        <ul className="w-[250px] mx-10">
            {categories.map((category, index) => (
                <li key={index}>
                    <Title index={index} category={category} />
                </li>
            ))}
        </ul>
    );
}

export default RightBar;
