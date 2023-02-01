import { useSelector } from 'react-redux';

const useGetNonAlcoholic = () => {
    const { nonAlcoholic, isLoading, hasError } = useSelector((state) => state.alcoholic);

    let data;
    if (isLoading === true) {
        data = 'loading';
    }
    if (isLoading === false) {
        data = nonAlcoholic;
    }
    if (hasError === true) {
        data = 'have error';
    }

    return data;
};

export default useGetNonAlcoholic;
