import { useSelector } from 'react-redux';

const useGetNonAlcoholic = () => {
    const { nonAlcoholic } = useSelector((state) => state.alcoholic);
    if (nonAlcoholic.drinks) return nonAlcoholic.drinks;
};

export default useGetNonAlcoholic;
