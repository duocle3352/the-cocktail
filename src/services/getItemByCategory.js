import * as httpRequest from '~/utils/httpRequest';

// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
const getItemByCategory = async (category) => {
    const res = await httpRequest.get('filter.php', {
        params: {
            c: category,
        },
    });

    return res.data;
};

export default getItemByCategory;
