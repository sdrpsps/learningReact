import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/reducer/authSlice';

const MainMenu = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <header>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        {!auth.isLogin && (
          <li>
            <Link to="/auth">登陆注册</Link>
          </li>
        )}
        {auth.isLogin && (
          <>
            <li>
              <Link to="/profile">{auth.user.username}</Link>
            </li>
            <li>
              <Link to="/" onClick={() => dispatch(logout())}>
                登出
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default MainMenu;
