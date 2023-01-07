import PropTypes from 'prop-types';
import { Footer, Header } from '../components';

function HeaderLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="main">{children}</div>
            <Footer />
        </div>
    );
}

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
