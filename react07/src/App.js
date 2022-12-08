import React from 'react';
import StudentList from './components/StudentList';
import { useGetStudentsQuery } from './store/studentAPI';

function App() {
  // const { data, isSuccess, isFetching, refetch } = useGetStudentsQuery();
  const result = useGetStudentsQuery(
    null,
    // 第二个参数可以对请求进行配置
    {
      // 设置轮询间隔，单位毫秒 0为不轮询
      pollingInterval: 0,
      // 是否跳过请求
      skip: false,
      // 是否重新获取焦点时获取数据
      refetchOnFocus: false,
      // 是否在网络恢复时获取数据
      refetchOnReconnect: true,
    },
  );
  const { data, isSuccess, isFetching, refetch } = result;
  return (
    <div className="App">
      <button onClick={() => refetch()}>重新加载</button>
      {isFetching && <p>请求中..</p>}
      {isSuccess && <StudentList stus={data} />}
    </div>
  );
}

export default App;
