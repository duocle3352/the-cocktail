import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useDarkMore } from '~/hooks';

function DarkMore() {
    const [isDarkMore, toggleDarkMore] = useDarkMore();

    return (
        <div>
            {isDarkMore ? (
                <BsSunFill
                    size="1.8rem"
                    className="text-white cursor-pointer select-none"
                    onClick={() => toggleDarkMore()}
                />
            ) : (
                <BsMoonStarsFill
                    size="1.8rem"
                    className="cursor-pointer select-none"
                    onClick={() => toggleDarkMore()}
                />
            )}
        </div>
    );
}

export default DarkMore;
