import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return { isLogin: false, token: null, user: null, expirationTime: 0 };
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const expirationTime = localStorage.getItem('expirationTime');
    return { isLogin: true, token, user, expirationTime };
  },
  reducers: {
    // 登陆
    login(state, action) {
      state.isLogin = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      /* 保存 token 用户信息 */
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      /* 设置 token 自动失效时间 */
      // 获取当前时间戳
      const currentTime = Date.now();
      // 设置有效时长 (一周)
      const timeOut = 1000 * 60 * 60 * 24 * 7;
      state.expirationTime = currentTime + timeOut;
      localStorage.setItem('expirationTime', state.expirationTime);
    },
    // 登出
    logout(state, action) {
      state.isLogin = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('expirationTime');
    },
  },
});

export const { login, logout } = authSlice.actions;
