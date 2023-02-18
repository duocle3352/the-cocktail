import * as httpRequest from '~/utils/httpRequest';

// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
const getDetailItemService = async (id) => {
    const res = await httpRequest.get('lookup.php', {
        params: {
            i: id,
        },
    });

    return res.data.drinks[0];
};

export default getDetailItemService;
