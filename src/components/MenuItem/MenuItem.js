import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MenuItem.css';

function MenuItem({
    children,
    title,
    icon,
    to,
    href,
    isShowDropDown,
    isSmall,
    onClick,
    ...passProps
}) {
    let Comp = 'div';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp {...props} className="block w-full md:w-fit">
            <div
                className={`menu-item__content 
                ${isSmall ? 'menu-item__small-size' : 'text-2xl py-5 px-4'}
                ${isShowDropDown ? 'menu-item__drop-down' : ''}`}
            >
                {title}
                {icon}
            </div>

            {children}
        </Comp>
    );
}

MenuItem.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    isShowDropDown: PropTypes.bool,
    isSmall: PropTypes.bool,
    onClick: PropTypes.func,
};

export default MenuItem;
