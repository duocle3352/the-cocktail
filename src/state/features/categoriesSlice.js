import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesService } from '~/services';

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    const result = await getCategoriesService();
    return result;
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            if (state.isLoading === false) {
                state.isLoading = true;
            }
        });

        builder.addCase(getCategories.fulfilled, (state, action) => {
            if (state.isLoading === true) {
                state.categories = action.payload;
                state.isLoading = false;
                state.hasError = false;
            }
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            if (state.isLoading === true) {
                state.isLoading = false;
                state.hasError = true;
            }
        });
    },
});

export default categoriesSlice.reducer;
