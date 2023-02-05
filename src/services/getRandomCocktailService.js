import * as httpRequest from '~/utils/httpRequest';

// https://www.thecocktaildb.com/api/json/v1/1/random.php
const getRandomCocktailService = async () => {
    const res = await httpRequest.get('random.php', {
        params: {},
    });

    return res.data;
};

export default getRandomCocktailService;
