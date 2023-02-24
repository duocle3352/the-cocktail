import PropTypes from 'prop-types';
import './SocialBtn.css';

function SocialBtn({ icon, title, className }) {
    return (
        <button className={`social-btn ${className}`}>
            {icon}
            <span className="ml-2 text-white">{title}</span>
        </button>
    );
}

SocialBtn.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default SocialBtn;
