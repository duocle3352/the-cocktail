import { Button } from '~/components/Button';

function SectionHeader({ title, subtitle, isShowBtn }) {
    return (
        <h2 className="font-semibold text-primary-green flex items-center justify-between">
            <p>
                <span>{title}</span>
                <span className="block stroke tracking-wider">{subtitle}</span>
            </p>
            {isShowBtn && <Button btnOutline>Show all</Button>}
        </h2>
    );
}

export default SectionHeader;
