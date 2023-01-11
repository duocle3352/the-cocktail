import PropTypes from 'prop-types';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ link, title }) {
    return (
        <NavLink
            className={({ isActive }) => `nav nav-after ${isActive ? 'nav-active' : ''}`}
            to={link}
            end
        >
            {title}
        </NavLink>
    );
}

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default memo(NavItem);
