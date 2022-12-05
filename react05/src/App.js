import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';

function App() {
  // http://localhost:1337/api/students
  // 组件初始化请求数据, useEffect 第二参数为空数组表示只在初始化时执行
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:1337/api/student')
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          throw new Error('数据加载失败');
        }
        return res.json();
      })
      .then((data) => {
        setStuData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);
  const [stuData, setStuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="App">
      {loading && <p>数据加载中</p>}
      {error && <p>服务异常</p>}
      {!loading && !error && <StudentList stus={stuData} />}
    </div>
  );
}

export default App;
