import React, { useEffect } from 'react';
import StudentList from './components/StudentList';
import useFetch from './hooks/useFetch';
import StuContext from './store/StuContext';

function App() {
  const { data: stuData, loading, error, fetchData: getStuData } = useFetch({ url: '/students' });

  // 组件初始化请求数据, useEffect 第二参数为空数组表示只在初始化时执行
  useEffect(() => {
    getStuData();
  }, []);

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
