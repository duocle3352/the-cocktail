import PropTypes from 'prop-types';
import './ModalWrapper.css';

function ModalWrapper({ children }) {
    return <div className="modal-wrapper">{children}</div>;
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalWrapper;
