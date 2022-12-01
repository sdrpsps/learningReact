import "./assets/css/App.css";
import { useRef, useState } from "react";
import Rcc from './components/rcc';

function App() {
  //#region useState
  const [count, setCount] = useState(1);

  const addHandler = () => {
    setCount((oldV) => oldV + 1);
  };
  const subHandler = () => {
    setCount((oldV) => oldV - 1);
  };

  // 修改对象
  const [user, setUser] = useState({ name: "iKun", year: "练习时长" });
  const updateUser = () => {
    setUser({ ...user, name: "你干嘛", year: "两年半" });
  };
  //#endregion
  //#region useRef
  const h2Ref = useRef();
  const clickHandler = () => {
    console.log(h2Ref);
  };
  //#endregion
  return (
    <div className="App">
      <div className="item">
        <h1>useState</h1>
        <h2>
          {count}-{user.name}-{user.year}
        </h2>
        <button onClick={addHandler}>+</button>
        <button onClick={subHandler}>-</button>
        <button onClick={updateUser}>油饼</button>
      </div>
      <div className="item">
        <h1>useRef</h1>
        <h2 ref={h2Ref}>1</h2>
        <button onClick={clickHandler}>1</button>
      </div>
      <div className="item">
        <Rcc name='猪八戒' age={18} sex='男'></Rcc>
      </div>
    </div>
  );
}

export default App;
