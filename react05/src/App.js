import React, { useState, useEffect } from 'react';

import StudentList from './components/StudentList';

function App() {
  // http://localhost:1337/api/students
  // 组件初始化请求数据, useEffect 第二参数为空数组表示只在初始化时执行
  useEffect(() => {
    fetch('http://localhost:1337/api/students')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStuData(data.data);
      });
  }, []);
  const [stuData, setStuData] = useState([]);
  return (
    <div className="App">
      <StudentList stus={stuData} />
    </div>
  );
}

export default App;
