import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCocktailNonAlcoholic } from '~/services';

export const getNonAlcoholic = createAsyncThunk('alcoholic/getNonAlcoholic', async () => {
    const result = await getCocktailNonAlcoholic();
    return result;
});

export const nonAlcoholicSlice = createSlice({
    name: 'alcoholic',
    initialState: {
        nonAlcoholic: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNonAlcoholic.pending, (state, action) => {
            if (state.isLoading === false) {
                state.isLoading = true;
            }
        });

        builder.addCase(getNonAlcoholic.fulfilled, (state, action) => {
            if (state.isLoading === true) {
                state.nonAlcoholic = action.payload;
                state.isLoading = false;
                state.hasError = false;
            }
        });
        builder.addCase(getNonAlcoholic.rejected, (state, action) => {
            if (state.isLoading === true) {
                state.isLoading = false;
                state.hasError = true;
            }
        });
    },
});

export default nonAlcoholicSlice.reducer;
