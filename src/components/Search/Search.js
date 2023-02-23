import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

import { searchService } from '~/services';
import { useDebounce, useOutsideCloser } from '~/hooks';
import { ModalWrapper } from '~/components/ModalWrapper';
import { CloseBtn } from '~/components/CloseBtn';
import { ProductItem } from '~/components/ProductItem';
import { SectionHeader } from '~/components/SectionHeader';
import { Logo } from '~/components/Logo';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [isShowSearchModal, setShowSearchModal] = useState(false);
    const [isShowLoading, setIsShowLoading] = useState(false);
    const searchRef = useRef();
    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 800);

    const toggleShowSearch = () => {
        setShowSearchModal(!isShowSearchModal);
    };
    useOutsideCloser(searchRef, toggleShowSearch);

    useEffect(() => {
        if (!debounceValue.trim() === '') {
            setResults([]);
            return;
        }

        const fetchApi = async () => {
            setIsShowLoading(true);
            const result = await searchService(debounceValue);
            setIsShowLoading(false);
            setResults(result);
        };

        fetchApi();
    }, [debounceValue]);

    const handleChangeValue = (e) => {
        const newSearchValue = e.target.value;
        if (!newSearchValue.startsWith(' ')) {
            setSearchValue(newSearchValue);
        }
    };

    const handleClearValue = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <>
            <button className={`right-tool-style`} onClick={toggleShowSearch}>
                <BiSearch size="1.5rem" />
            </button>

            {isShowSearchModal && (
                <ModalWrapper>
                    <div
                        className="relative w-full h-full bg-white dark:bg-black p-10 overflow-y-scroll"
                        ref={searchRef}
                    >
                        <CloseBtn
                            icon={<AiOutlineClose size={'2rem'} />}
                            onClose={toggleShowSearch}
                        />

                        {/* logo */}
                        <div className="text-center mb-10">
                            <Logo />
                        </div>

                        {/* input place */}
                        <div
                            className="group relative inline-flex items-center dark:bg-dark-bg
                                       border-2 border-borderColor rounded-md mb-10
                                        overflow-hidden focus-within:border-primary-green"
                        >
                            {/* search icon */}
                            <BiSearch
                                size={'1.4em'}
                                className="w-11 text-darkLightText group-focus-within:text-primary-green"
                            />
                            {/* input */}
                            <input
                                className="h-11 w-[500px] pr-6 dark:bg-dark-bg dark:text-white"
                                placeholder="Search"
                                value={searchValue}
                                spellCheck={false}
                                ref={inputRef}
                                onChange={handleChangeValue}
                            />
                            {/* loading */}
                            {isShowLoading && (
                                <span className="absolute right-11 top-1/2 -translate-y-1/2">
                                    <AiOutlineLoading3Quarters className="text-darkLightText animate-spin" />
                                </span>
                            )}
                            {/* clear btn */}
                            <button
                                className="mr-2 p-2 text-darkLightText"
                                onClick={handleClearValue}
                            >
                                <AiOutlineClose />
                            </button>
                        </div>

                        {/* title */}
                        {searchValue === '' ? (
                            <SectionHeader title="Popular products" />
                        ) : (
                            <SectionHeader title={searchValue} />
                        )}

                        {/* search result place */}
                        {results && results.length > 0 ? (
                            <div className="grid grid-cols-5 gap-5">
                                {results.map((result) => (
                                    <ProductItem key={result.idDrink} item={result} />
                                ))}
                            </div>
                        ) : (
                            <h5>{`The search "${searchValue}" matches 0 products.`}</h5>
                        )}
                    </div>
                </ModalWrapper>
            )}
        </>
    );
}

export default Search;
