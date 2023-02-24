import PropTypes from 'prop-types';

function HeaderRightToolItem({ children, className }) {
    return <div className={`ml-3 md:ml-6 lg:ml-6 xl:ml-6 py-1 ${className}`}>{children}</div>;
}

HeaderRightToolItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderRightToolItem;
