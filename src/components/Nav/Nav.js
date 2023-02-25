import PropTypes from 'prop-types';

function Nav({ children }) {
    return <nav className="flex-1 hidden lg:block md:ml-5 xl:ml-9">{children}</nav>;
}

Nav.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Nav;
