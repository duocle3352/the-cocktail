import { useSelector } from 'react-redux';

const useGetCategories = () => {
    const { categories, isLoading, hasError } = useSelector((state) => state.categories);

    let data;
    if (isLoading === true) {
        data = 'loading';
    }
    if (isLoading === false) {
        data = categories;
    }
    if (hasError === true) {
        data = 'have error';
    }

    return data;
};

export default useGetCategories;
