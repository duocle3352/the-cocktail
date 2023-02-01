import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '~/state/features/cartSlice';
import categoriesSlice from '~/state/features/categoriesSlice';
import nonAlcoholicSlice from '../features/nonAlcoholicSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        categories: categoriesSlice,
        alcoholic: nonAlcoholicSlice,
    },
});

export default store;
