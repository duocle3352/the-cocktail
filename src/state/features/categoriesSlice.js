import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '~/services';

export const categoriesData = createAsyncThunk('categories/categoriesData', async () => {
    const result = await getCategories();
    return result;
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(categoriesData.pending, (state, action) => {
            if (state.isLoading === false) {
                state.isLoading = true;
            }
        });

        builder.addCase(categoriesData.fulfilled, (state, action) => {
            if (state.isLoading === true) {
                state.categories = action.payload;
                state.isLoading = false;
            }
        });
        builder.addCase(categoriesData.rejected, (state, action) => {
            if (state.isLoading === true) {
                state.isLoading = false;
                state.error = 'Error occured';
            }
        });
    },
});

export default categoriesSlice.reducer;
