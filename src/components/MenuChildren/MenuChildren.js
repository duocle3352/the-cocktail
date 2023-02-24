import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { resetPageItem } from '~/state/features/paginationSlice';
import { MenuItem } from '~/components/MenuItem';
import useGetCategories from '~/hooks/useGetCategories';
import './MenuChildren.css';

function MenuChildren({ setIsShowMenu, setIsShowDropDown, isShowDropDown }) {
    const dispatch = useDispatch();
    const categoriesData = useGetCategories();
    let categories = [];
    if (categoriesData?.drinks) categories = categoriesData.drinks;

    const handleClick = () => {
        setIsShowMenu(false);
        setIsShowDropDown(false);
        dispatch(resetPageItem());
    };

    return (
        <div
            className={`menu-children ${
                isShowDropDown ? 'h-full opacity-1 mt-4' : 'h-0 opacity-0'
            }`}
        >
            {categories.map((category, index) => (
                <MenuItem
                    key={index}
                    title={category.strCategory}
                    to={`/category/${index}`}
                    isSmall
                    onClick={handleClick}
                />
            ))}
        </div>
    );
}

MenuChildren.propTypes = {
    setIsShowMenu: PropTypes.func.isRequired,
    setIsShowDropDown: PropTypes.func.isRequired,
    isShowDropDown: PropTypes.bool.isRequired,
};

export default MenuChildren;
