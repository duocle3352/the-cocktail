import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import config from '~/config';

function Search() {
    return (
        <Link to={config.routes.search} className={`right-tool-style`}>
            <BiSearch size="1.5rem" />
        </Link>
    );
}

export default Search;

// import { useEffect, useState } from 'react';
// import { searchService } from '~/services';
// import { useDebounce } from '~/hooks';

// function Search() {
//     const [result, setResult] = useState([]);
//     const [searchValue, setSearchValue] = useState('');
//     const debounceValue = useDebounce(searchValue, 800);

//     useEffect(() => {
//         const fetchApi = async () => {
//             const result = await searchService(debounceValue);
//             setResult(result);
//         };

//         fetchApi();
//     }, [debounceValue]);

//     return <h1>Search page</h1>;
// }

// export default Search;
