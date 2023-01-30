import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '~/state/features/cartSlice';
import categoriesSlice from '~/state/features/categoriesSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        categories: categoriesSlice,
    },
});

export default store;
