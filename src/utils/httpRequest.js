import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
});

export const get = async (past, option = {}) => {
    try {
        const response = await httpRequest(past, option);
        return response;
    } catch (error) {
        console.log('Have Error:', error);
    }
};

export default httpRequest;
