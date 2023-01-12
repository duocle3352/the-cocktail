import PropTypes from 'prop-types';

function PopperWrapper({ children }) {
    return <div className="relative bg-white px-5 py-3 rounded-xl overflow-hidden">{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PopperWrapper;
