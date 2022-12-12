import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authAPI } from './api/authAPI';
import { studentAPI } from './api/studentAPI';
import { authSlice } from './reducer/authSlice';

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    auth: authSlice.reducer,
    [studentAPI.reducerPath]: studentAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware, studentAPI.middleware),
});

setupListeners(store.dispatch);
