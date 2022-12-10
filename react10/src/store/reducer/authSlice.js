import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { isLogin: false, token: null, user: null },
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state, action) {
      state.isLogin = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
