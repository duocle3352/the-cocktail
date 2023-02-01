import * as httpRequest from '~/utils/httpRequest';

// https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
const getCocktailNonAlcoholic = async () => {
    const res = await httpRequest.get('filter.php', {
        params: {
            a: 'Non_Alcoholic',
        },
    });

    return res.data;
};

export default getCocktailNonAlcoholic;
