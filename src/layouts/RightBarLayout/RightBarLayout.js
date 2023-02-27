import PropTypes from 'prop-types';
import { Footer, Header, RightBar } from '../components';

function RightBarLayout({ children }) {
    return (
        <>
            <Header />
            <div className="flex mt-20 py-10">
                <RightBar />
                <section className="flex-1 mx-3 md:mx-5 lg:mx-9 lg:ml-5 overflow-hidden">
                    {children}
                </section>
            </div>
            <Footer />
        </>
    );
}

RightBarLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RightBarLayout;
