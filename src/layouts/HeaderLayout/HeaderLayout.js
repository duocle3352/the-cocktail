import PropTypes from 'prop-types';
import { Header, Sidebar, Footer } from '../components';

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            <div className="mt-20">
                <Sidebar />
                <div className="mx-9 py-10"> {children}</div>
            </div>
            <Footer />
        </>
    );
}

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
