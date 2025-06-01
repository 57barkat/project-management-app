import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import taskService from '../services/taskService';

export const fetchTasks = createAsyncThunk('tasks/fetch', async () => {
    return await taskService.getTasks();
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: { list: [], loading: false },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, state => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchTasks.rejected, state => {
                state.loading = false;
            });
    }
});

export default taskSlice.reducer;