import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '~/state/features/cartSlice';
import getCategoriesSlice from '~/state/features/getCategoriesSlice';
import nonAlcoholicSlice from '~/state/features/nonAlcoholicSlice';
import paginationSlice from '~/state/features/paginationSlice';
import signInSlice from '~/state/features/signInSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        categories: getCategoriesSlice,
        alcoholic: nonAlcoholicSlice,
        pagination: paginationSlice,
        sign: signInSlice,
    },
});

export default store;
