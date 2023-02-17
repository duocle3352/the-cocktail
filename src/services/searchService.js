import * as httpRequest from '~/utils/httpRequest';

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m
const searchService = async (key) => {
    const res = await httpRequest.get('search.php', {
        params: {
            s: key,
        },
    });

    return res.data.drinks;
};

export default searchService;
