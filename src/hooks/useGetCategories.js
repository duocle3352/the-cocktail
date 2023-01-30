import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesData } from '~/state/features/categoriesSlice';

const useGetCategories = () => {
    const dispatch = useDispatch();
    const { categories, isLoading, error } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(categoriesData());
    }, [dispatch]);

    let data;
    if (isLoading === true) {
        data = 'loading';
    }
    if (isLoading === false) {
        data = categories;
    }
    if (error !== null) {
        data = 'have error';
    }

    return data;
};

export default useGetCategories;
