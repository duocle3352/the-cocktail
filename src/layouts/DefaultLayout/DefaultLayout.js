import PropTypes from 'prop-types';
import { Header, Footer, Sidebar } from '../components';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="main">
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
