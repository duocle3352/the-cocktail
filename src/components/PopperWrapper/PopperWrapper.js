import PropTypes from 'prop-types';
import './PopperWrapper.css';

function PopperWrapper({ children }) {
    return <div className="popper-wrapper">{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PopperWrapper;
