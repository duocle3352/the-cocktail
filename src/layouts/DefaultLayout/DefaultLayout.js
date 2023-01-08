import PropTypes from 'prop-types';
import { Header, Footer, Sidebar } from '../components';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="grid grid-cols-6">
                <Sidebar />
                {children}
            </div>
            <Footer />
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
