import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authAPI } from './api/authAPI';
import { authSlice } from './reducer/authSlice';

export const store = configureStore({
  reducer: { [authAPI.reducerPath]: authAPI.reducer, auth: authSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware),
});

setupListeners(store.dispatch);
