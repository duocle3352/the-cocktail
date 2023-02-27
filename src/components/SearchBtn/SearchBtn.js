import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { toggleSearch } from '~/state/features/searchSlice';

function SearchBtn() {
    const dispatch = useDispatch();

    const toggleShowSearch = () => {
        dispatch(toggleSearch());
    };

    return (
        <button className={`right-tool-style`} onClick={toggleShowSearch}>
            <BiSearch />
        </button>
    );
}

export default SearchBtn;
