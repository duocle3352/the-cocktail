import * as httpRequest from '~/utils/httpRequest';

const getCategories = async () => {
    const res = await httpRequest.get('list.php', {
        params: {
            c: 'list',
        },
    });

    return res.data;
};

export default getCategories;
