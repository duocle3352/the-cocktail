import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPageItem } from '~/state/features/paginationSlice';

const titleStyle = 'text-white text-2xl font-semibold';

function FeaturedItem({ to, title, bgColor, bgImg, className }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetPageItem());
        window.scrollTo(0, 0);
    };

    return (
        <Link
            to={to}
            className={`group flex items-center justify-center
                        relative z-0 m-4 rounded-xl overflow-hidden
                        ${className}`}
            onClick={() => handleClick()}
        >
            <span
                className={`absolute left-0 w-full h-full z-[-1]
                            bg-center bg-cover bg-no-repeat brightness-50 `}
                style={{ backgroundImage: `url(${bgImg})` }}
            />
            <span className={titleStyle}>{title}</span>
            <p
                className={`absolute left-0 w-full h-full z-10
                            flex items-center justify-center 
                            transition-all group-hover:translate-y-[-100%]
                            ${titleStyle} ${bgColor}`}
            >
                {title}
            </p>
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