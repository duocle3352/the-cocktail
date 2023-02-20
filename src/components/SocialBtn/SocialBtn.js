import PropTypes from 'prop-types';

function SocialBtn({ icon, title, className }) {
    return (
        <button
            className={`flex items-center justify-center w-full dark:bg-dark-bg
                        border-2 border-solid border-borderColor rounded-xl
                        py-2 mt-2 ${className}`}
        >
            {icon}
            <span className="ml-2 text-darkLightText dark:text-white">{title}</span>
        </button>
    );
}

SocialBtn.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default SocialBtn;
