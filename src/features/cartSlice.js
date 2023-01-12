import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [
        {
            id: '11424',
            name: 'English Rose Cocktail',
            thumb: 'https://www.thecocktaildb.com/images/media/drink/quksqg1582582597.jpg',
            price: 24,
            quantity: 1,
        },
        {
            id: '17305',
            name: 'Godmother',
            thumb: 'https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg',
            price: 5,
            quantity: 2,
        },
    ],
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action) {
            state.amount++;

            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            cartItem
                ? (cartItem.amount += 1)
                : state.cartItems.push({ ...action.payload, amount: 1 });
        },
    },
});

const { actions, reducer } = cartSlice;
export const { addCartItem } = actions;
export default reducer;
