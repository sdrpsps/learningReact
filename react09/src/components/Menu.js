import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { background: 'yellow' } : null;
            }}
            to="/"
          >
            主页
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">关于</NavLink>
        </li>
        <li>
          <NavLink to="/student/2">学生</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
