import PropTypes from 'prop-types';
import './MenuSmallItem.css';

function MenuSmallItem({ title, icon, image, disabled, onClick }) {
    return (
        <div
            className={`menu-small-item__box ${disabled ? 'bg-gray-400' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => onClick()}
        >
            <span className="absolute top-2 right-2 text-2xl dark:text-white">{icon}</span>
            <h6 className="font-semibold dark:text-white ">{title}</h6>
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
