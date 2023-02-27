import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({
    to,
    href,
    btnPrimaryGreen = false,
    btnPrimaryOrange = false,
    btnOutline = false,
    btnText = false,
    btnRounded = false,
    btnDisabled = false,
    btnSmall = false,
    btnLarge = false,
    btnFullWidth = false,
    children,
    leftIcon,
    rightIcon,
    classes,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // remove event listener when btn disabled
    if (btnDisabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    let size = '';
    let type = 'btn-wrapper';

    if (btnPrimaryOrange) type = `${type} btn-primary-orange`;
    if (btnPrimaryGreen) type = `${type} btn-primary-green`;
    if (btnOutline) type = `${type} btn-outline`;
    if (btnText) type = `${type} btn-text`;
    if (btnRounded) type = `${type} btn-rounded`;
    if (btnDisabled) type = `${type} btn-disabled`;

    if (btnSmall) size = `${size} btn-small`;
    if (btnLarge) size = `${size} btn-large`;
    if (btnFullWidth) size = `${size} btn-full-width`;

    return (
        <Comp className={`${size} ${type} ${classes}`} {...props}>
            {leftIcon && <span className="flex items-center w-6 mr-2">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="flex items-center w-6 ml-2">{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    btnPrimaryOrange: PropTypes.bool,
    btnPrimaryGreen: PropTypes.bool,
    btnOutline: PropTypes.bool,
    btnText: PropTypes.bool,
    btnRounded: PropTypes.bool,
    btnDisabled: PropTypes.bool,
    btnSmall: PropTypes.bool,
    btnLarge: PropTypes.bool,
    btnFullWidth: PropTypes.bool,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    classes: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
