import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading({ className }) {
    return (
        <p
            className={`flex items-center justify-center
                        font-semibold text-darkLightText dark:text-white ${className}`}
        >
            <AiOutlineLoading3Quarters className="mr-5 animate-spin" />
            Loading ...
        </p>
    );
}

Loading.propTypes = {
    className: PropTypes.string,
};

export default Loading;
