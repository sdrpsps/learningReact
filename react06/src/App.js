import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSchoolAddress, setSchoolName } from './store/schoolSlice';
import { setStuName, setStuAge } from './store/stuSlice';

function App() {
  const { student, school } = useSelector((state) => state);

  const dispatch = useDispatch();
  const stuNameChanger = () => {
    dispatch(setStuName('你干嘛～哎呦～'));
  };
  const stuAgeChanger = () => {
    dispatch(setStuAge('鸡你太美！鸡你太美！'));
  };
  const schoolNameChanger = () => {
    dispatch(setSchoolName('你干嘛～哎呦～'));
  };
  const schoolAddressChanger = () => {
    dispatch(setSchoolAddress('鸡你太美！鸡你太美！'));
  };

  return (
    <div className="App">
      <span>{student.name}|</span>
      <span>{student.age}|</span>
      <span>{student.gender}|</span>
      <span>{student.address}</span>| <br />
      <span>{school.name}</span>|<span>{school.address}</span>|<button onClick={stuNameChanger}>修改学生名</button>
      <button onClick={stuAgeChanger}>修改年龄</button>
      <button onClick={schoolNameChanger}>修改学校名</button>
      <button onClick={schoolAddressChanger}>修改学校地址</button>
    </div>
  );
}

export default App;
