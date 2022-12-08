import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import studentAPI from './studentAPI';

const store = configureStore({
  reducer: {
    [studentAPI.reducerPath]: studentAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(studentAPI.middleware),
});

// 设置以后，将会支持 refetchOnFocus refetchOnReconnect
setupListeners(store.dispatch);

export default store;
