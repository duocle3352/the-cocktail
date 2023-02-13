import { createSlice } from '@reduxjs/toolkit';

const categoryPageSlice = createSlice({
    name: 'category page',
    initialState: 0,
    reducers: {
        resetStart() {
            const newState = 0;
            return newState;
        },
        newStart(state, action) {
            const newState = action.payload;
            return newState;
        },
    },
});

const { actions, reducer } = categoryPageSlice;
export const { resetStart, newStart } = actions;
export default reducer;
