import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Button } from '~/components/Button';

function SectionHeader({ title, subtitle, isShowBtn, link }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <h2
            ref={ref}
            className={`flex items-center justify-between
                        font-semibold text-primary-green dark:text-primary-orange pb-10
                        ${inView ? 'drop-up' : 'drop-down'}`}
        >
            <p>
                <span>{title}</span>
                <span className="block tracking-wider stroke-orange">{subtitle}</span>
            </p>
            {isShowBtn && (
                <Button to={link} btnOutline onClick={() => window.scrollTo(0, 0)}>
                    Show all
                </Button>
            )}
        </h2>
    );
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    isShowBtn: PropTypes.bool,
};

export default SectionHeader;
