import React, { useState, useEffect, useCallback } from 'react';
import StudentList from './components/StudentList';
import StuContext from './store/StuContext';

function App() {
  // 组件初始化请求数据, useEffect 第二参数为空数组表示只在初始化时执行
  useEffect(() => {
    getStuData();
  }, []);
  // 请求数据 使用useCallback 避免函数重复创建
  const getStuData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('http://localhost:1337/api/students');
      if (!res.ok) {
        throw new Error('获取失败');
      }
      const data = await res.json();
      setStuData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  });
  const [stuData, setStuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <StuContext.Provider value={{ getStuData }}>
      <div className="App">
        <button onClick={getStuData}>加载数据</button>
        {loading && <p>数据加载中</p>}
        {error && <p>服务异常</p>}
        {!loading && !error && <StudentList stus={stuData} />}
      </div>
    </StuContext.Provider>
  );
}

export default App;
