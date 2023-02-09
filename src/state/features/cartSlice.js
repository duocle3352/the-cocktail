import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.amount++;
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            cartItem
                ? (cartItem.amount += 1)
                : state.cartItems.push({ ...action.payload, amount: 1 });
        },
        increase: (state, action) => {
            state.amount++;
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id,
            );
            state.cartItems[itemIndex].amount += 1;
        },
        decrease: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id,
            );
            state.cartItems[itemIndex].amount > 0 &&
                state.cartItems[itemIndex].amount-- &&
                state.amount--;
        },
        remove: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== cartItem.id);
                    state.amount = state.amount - cartItem.amount;
                }
            });
        },
        total: (state) => {
            let total = 0;
            state.cartItems.forEach((cartItem) => {
                total += cartItem.amount * cartItem.price;
            });
            state.total = total;
        },
        clear: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },
    },
});

const { actions, reducer } = cartSlice;
export const { addToCart, increase, decrease, remove, total, clear } = actions;
export default reducer;
