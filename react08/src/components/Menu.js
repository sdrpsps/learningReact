import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.module.css';

const Menu = () => {
  /* 使用react router 时，不要使用 a 标签 */
  /* Link 和 NavLink 作用相似，但 NavLink 可以添加指定激活样式 */
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} exact to="/">
            主页
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} exact to="/about">
            关于
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} exact to="/student/1">
            学生
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} exact to="/form">
            表单
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
