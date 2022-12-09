import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Student = () => {
  const DATA = [
    {
      id: 1,
      name: 'u1',
    },
    {
      id: 2,
      name: 'u2',
    },
    {
      id: 3,
      name: 'u3',
    },
    {
      id: 4,
      name: 'u4',
    },
    {
      id: 5,
      name: 'u5',
    },
  ];
  //   const location = useLocation();
  // 如果路径匹配则返回一个对象，否则返回 null
  //   const match = useMatch('/student/:id');

  // 用于获取跳转页面的函数
  const nav = useNavigate();

  // 获取参数
  const params = useParams();
  const stu = DATA.find((item) => item.id === Number(params.id));
  const clickHandler = () => {
    // nav('/about'); // 使用 push
    nav('/about', { replace: true }); // 使用 replace
  };
  return (
    <div>
      <h1>Student</h1>
      <button onClick={clickHandler}>点击去关于</button>
      id:{stu.id} --- name:{stu.name}
    </div>
  );
};

export default Student;
