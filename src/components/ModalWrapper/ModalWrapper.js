import PropTypes from 'prop-types';

function ModalWrapper({ children }) {
    return (
        <div
            className="fixed top-0 bottom-0 right-0 left-0 z-50
                        bg-[rgba(0,0,0,0.7)] dark:bg-[#ffffff1d] flex items-center justify-center"
        >
            {children}
        </div>
    );
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalWrapper;
