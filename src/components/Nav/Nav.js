import PropTypes from 'prop-types';

function Nav({ children }) {
    return <nav className="flex-1">{children}</nav>;
}

Nav.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Nav;
