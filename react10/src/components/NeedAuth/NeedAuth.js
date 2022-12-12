import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const NeedAuth = (props) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  // 判断是否登陆，是就返回包裹的组件，否则重定向到登陆
  return auth.isLogin ? props.children : <Navigate to="/auth" state={{ preURL: location.pathname }} replace />;
};

export default NeedAuth;
