import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tasksReducer from '../features/taskSlice'; // add this line

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer, // add this line
  },
});
