import PropTypes from 'prop-types';
import { Button } from '~/components/Button';

function SectionHeader({ title, subtitle, isShowBtn, link }) {
    return (
        <h2
            className="flex items-center justify-between
                        font-semibold text-primary-green pb-10"
        >
            <p>
                <span>{title}</span>
                <span className="block stroke tracking-wider">{subtitle}</span>
            </p>
            {isShowBtn && (
                <Button to={link} btnOutline>
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
