import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentService from '../services/commentService';

export const fetchComments = createAsyncThunk('comments/fetch', async taskId => {
    return await commentService.getComments(taskId);
});

const commentSlice = createSlice({
    name: 'comments',
    initialState: { list: [], loading: false },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchComments.pending, state => {
                state.loading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchComments.rejected, state => {
                state.loading = false;
            });
    }
});

export default commentSlice.reducer;