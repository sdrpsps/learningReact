import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation, useRegisterMutation } from '../../store/api/authAPI';
import { login } from '../../store/reducer/authSlice';

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  // 表单数据
  const [inputData, setInputData] = useState({ username: '', password: '', email: '' });
  // 受控组件 用户名改变时
  const onUserNameChange = (e) => {
    setInputData({ ...inputData, username: e.target.value });
  };
  // 受控组件 密码改变时
  const onPasswordChange = (e) => {
    setInputData({ ...inputData, password: e.target.value });
  };
  // 受控组件 电子邮件改变时
  const onEmailChange = (e) => {
    setInputData({ ...inputData, email: e.target.value });
  };
  // 引入注册 API
  const [registerFn, { error: regError }] = useRegisterMutation();
  // 引入登陆 API
  const [loginFn, { error: loginError }] = useLoginMutation();
  // 引入 dispatch
  const dispatch = useDispatch();
  // 获取跳转 state
  const location = useLocation();
  // 引入路由跳转
  const navigate = useNavigate();
  // 提交
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { ...inputData };
    try {
      if (isLoginForm) {
        delete data.email;
        const res = await loginFn({ identifier: data.username, password: data.password });
        if (res.error) throw new Error(res.error.data.error.message);
        dispatch(login({ token: res.data.jwt, user: res.data.user }));
        // 动态重定向到上次访问的页面，如果没有就直接重定向到主页
        navigate(location.state?.preURL || '/', { replace: true });
      } else {
        const res = await registerFn(data);
        if (res.error) throw new Error(res.error.data.error.message);
      }
      setInputData({ username: '', password: '', email: '' });
      setIsLoginForm(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{isLoginForm ? '登陆' : '注册'}</h1>
      {/* 登陆注册错误显示 */}
      <p style={{ color: 'red' }}>
        {regError && regError.data.error.message}
        {loginError && loginError.data.error.message}
      </p>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label>用户名</label>
          <input type="text" placeholder="用户名" onChange={onUserNameChange} value={inputData.username} />
        </div>
        <div>
          <label>密码</label>
          <input type="password" placeholder="密码" onChange={onPasswordChange} value={inputData.password} />
        </div>
        {!isLoginForm && (
          <div>
            <label>电子邮件</label>
            <input type="email" placeholder="电子邮件" onChange={onEmailChange} value={inputData.email} />
          </div>
        )}
        <div>
          <button>{isLoginForm ? '登陆' : '注册'}</button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLoginForm((prevState) => !prevState);
            }}
          >
            {isLoginForm ? '没有账号，点击注册' : '已有账号，点击登陆'}
          </a>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
