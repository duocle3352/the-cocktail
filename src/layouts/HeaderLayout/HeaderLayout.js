import PropTypes from 'prop-types';
import { Header, Footer } from '../components';

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            <div className="mt-20 mx-9 py-10">{children}</div>
            <Footer />
        </>
    );
}

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
