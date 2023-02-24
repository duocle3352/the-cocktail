import PropTypes from 'prop-types';
import './MenuSmallItem.css';

function MenuSmallItem({ title, icon, image, disabled, onClick }) {
    return (
        <div
            className={`menu-small-item__box ${disabled ? 'bg-gray-400' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => onClick()}
        >
            <span className="absolute top-3 right-3  dark:text-white">{icon}</span>
            <h5 className="font-semibold dark:text-white ">{title}</h5>
        </div>
    );
}

MenuSmallItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    image: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default MenuSmallItem;
