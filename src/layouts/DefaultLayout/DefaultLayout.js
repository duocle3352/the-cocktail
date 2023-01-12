import PropTypes from 'prop-types';
import { Header, Footer, Sidebar, Slider } from '../components';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            <Slider />
            <div className="grid grid-cols-6">{children}</div>
            <Footer />
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
