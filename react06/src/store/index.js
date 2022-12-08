import { configureStore } from '@reduxjs/toolkit';
import { schoolReducer } from './schoolSlice';
import { stuReducer } from './stuSlice';

const store = configureStore({
  reducer: {
    student: stuReducer,
    school: schoolReducer,
  },
});

export default store;
