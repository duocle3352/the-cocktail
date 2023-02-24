import { createSlice } from '@reduxjs/toolkit';

const signInSlice = createSlice({
    name: 'sign',
    initialState: false,
    reducers: {
        toggleSign(state) {
            const newSate = !state;
            return newSate;
        },
    },
});

const { actions, reducer } = signInSlice;
export const { toggleSign } = actions;
export default reducer;
