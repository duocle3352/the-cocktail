import PropTypes from 'prop-types';

function HeaderRightToolItem({ children }) {
    return <div className="ml-6 py-1">{children}</div>;
}

HeaderRightToolItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderRightToolItem;
