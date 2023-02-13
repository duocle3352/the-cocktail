import PropTypes from 'prop-types';
import { Footer, Header, RightBar } from '../components';

function RightBarLayout({ children }) {
    return (
        <>
            <Header />
            <div className="flex mt-20 py-10">
                <RightBar />
                <section className="flex-1 ml-5 mr-9">{children}</section>
            </div>
            <Footer />
        </>
    );
}

RightBarLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RightBarLayout;
