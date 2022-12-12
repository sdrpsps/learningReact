import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducer/authSlice';

const useAutoLogout = () => {
  // 登陆状态自动登出校验
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const timeOut = auth.expirationTime - Date.now();
    // 剩余不足一分钟时退出登录
    if (timeOut < 60000) {
      dispatch(logout());
    }
    // 设置定时器
    const timer = setTimeout(() => {
      dispatch(logout());
    }, timeOut);
    return () => {
      // 清除上一个定时器
      clearTimeout(timer);
    };
  }, [auth]);
};

export default useAutoLogout;
