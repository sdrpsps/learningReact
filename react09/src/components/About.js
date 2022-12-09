import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Navicate 用来跳转到指定的位置，默认使用 push  */}
      {/* <Navigate to="/student/1" replace /> */}
      <h2>关于页面</h2>
      {/* Outlet 用来表示嵌套路由中的组件，类似 Vue router-view */}
      <Outlet />
    </div>
  );
};

export default About;
