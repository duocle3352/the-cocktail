import PropTypes from 'prop-types';
import { memo } from 'react';

function CloseModal({ icon, onCloseModal }) {
    return (
        <button
            className="absolute top-1 right-1 px-1 py-1 text-darkLightText hover:text-darkText"
            onClick={onCloseModal}
        >
            {icon}
        </button>
    );
}

CloseModal.propTypes = {
    icon: PropTypes.node.isRequired,
    onCloseModal: PropTypes.func.isRequired,
};

export default memo(CloseModal);
