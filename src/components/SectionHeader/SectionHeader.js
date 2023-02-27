import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Button } from '~/components/Button';
import './SectionHeader.css';

function SectionHeader({ title, subtitle, isShowBtn, link }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`section-header ${inView ? 'drop-up' : 'drop-down'}`}>
            <p>
                <span>{title}</span>
                <span className="block tracking-wider stroke-orange">{subtitle}</span>
            </p>
            {isShowBtn && (
                <Button to={link} btnOutline btnSmall onClick={() => window.scrollTo(0, 0)}>
                    Show all
                </Button>
            )}
        </div>
    );
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    isShowBtn: PropTypes.bool,
};

export default SectionHeader;
