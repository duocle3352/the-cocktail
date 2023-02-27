import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPageItem } from '~/state/features/paginationSlice';
import './FeaturedItem.css';

function FeaturedItem({ to, title, bgColor, bgImg, className }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetPageItem());
        window.scrollTo(0, 0);
    };

    return (
        <Link
            to={to}
            className={`group/featured featured-item__wrapper ${className}`}
            onClick={() => handleClick()}
        >
            <span className="featured-item__cover" style={{ backgroundImage: `url(${bgImg})` }} />
            <span className="featured-item__title">{title}</span>
            <p className={`featured-item__title-box featured-item__title ${bgColor}`}>{title}</p>
        </Link>
    );
}

FeaturedItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default FeaturedItem;
