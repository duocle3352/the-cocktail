import PropTypes from 'prop-types';
import { memo } from 'react';

function CloseBtn({ icon, onClose }) {
    return (
        <button
            className="absolute-right p-1 text-darkLightText hover:text-primary-green"
            onClick={onClose}
        >
            {icon}
        </button>
    );
}

CloseBtn.propTypes = {
    icon: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default memo(CloseBtn);
