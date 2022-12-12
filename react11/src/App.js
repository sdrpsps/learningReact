import React, { useEffect, useMemo, useRef, useState } from 'react';
import Some from './components/Some';

function sum(a, b) {
  console.log('组件渲染了');
  return a + b;
}

function App() {
  const [count, setCount] = useState(1);
  // sum 函数每次组件渲染都会执行
  // useMemo 用来存储函数的执行结果
  let a = 123;
  let b = 456;
  if (count % 10 === 0) {
    a += count;
  }
  const result = useMemo(() => {
    return sum(a, b);
  }, [a, b]);

  const SomeRef = useRef();
  // 调用子组件方法
  useEffect(() => {
    SomeRef.current.changeInputValue(count);
  }, [SomeRef, count]);
  return (
    <div className="App">
      APP
      <h2>{result}</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <Some ref={SomeRef} />
    </div>
  );
}

export default App;
