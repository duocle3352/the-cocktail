import PropTypes from 'prop-types';

function SocialBtn({ icon, title, className }) {
    return (
        <button className={`btn-full-width border-borderColor py-2 mt-2 ${className}`}>
            {icon}
            <span className="ml-2 text-darkLightText">{title}</span>
        </button>
    );
}

SocialBtn.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default SocialBtn;