import PropTypes from 'prop-types';

function HeaderRightToolItem({ children }) {
    return <div className="mr-1 py-1 px-4">{children}</div>;
}

HeaderRightToolItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderRightToolItem;
