import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: false,
    reducers: {
        toggleSearch(state) {
            const newSate = !state;
            return newSate;
        },
    },
});

const { actions, reducer } = searchSlice;
export const { toggleSearch } = actions;
export default reducer;
