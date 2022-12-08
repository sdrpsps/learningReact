import { createSlice } from '@reduxjs/toolkit';

const stuSlice = createSlice({
  name: 'stu', // 用来自动生成 action 的 type
  // state 的初始值
  initialState: {
    name: 'iKun',
    age: 18,
    gender: '女',
    address: '坤坤心里',
  },
  // 指定 state 的各种操作，
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { reducer: stuReducer } = stuSlice;
export const { setName: setStuName, setAge: setStuAge } = stuSlice.actions;
