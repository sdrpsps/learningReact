import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from './store';

function App() {
  const student = useSelector((state) => state.student);

  const dispatch = useDispatch();
  const nameChanger = () => {
    dispatch(setName('你干嘛～哎呦～'));
  };
  const ageChanger = () => {
    dispatch(setAge('鸡你太美！鸡你太美！'));
  };

  return (
    <div className="App">
      <span>{student.name}|</span>
      <span>{student.age}|</span>
      <span>{student.gender}|</span>
      <span>{student.address}</span>
      <button onClick={nameChanger}>修改name</button>
      <button onClick={ageChanger}>修改age</button>
    </div>
  );
}

export default App;
