import PropTypes from 'prop-types';
import { Header, Footer, Sidebar, Slider } from '../components';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="mt-20">
                <Sidebar />
                <Slider />
                <div className="py-10">{children}</div>
            </div>
            <Footer />
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
