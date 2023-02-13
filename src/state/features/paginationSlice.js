import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: 0,
    reducers: {
        resetPageItem() {
            const newState = 0;
            return newState;
        },
        newPageItem(state, action) {
            const newState = action.payload;
            return newState;
        },
    },
});

const { actions, reducer } = paginationSlice;
export const { resetPageItem, newPageItem } = actions;
export default reducer;
