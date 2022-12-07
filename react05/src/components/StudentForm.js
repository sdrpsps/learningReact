import React, { useContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import StuContext from '../store/StuContext';
import './StudentForm.css';

const StudentForm = (props) => {
  const [inputData, setInputData] = useState({
    name: props.stu ? props.stu.attributes.name : '',
    gender: props.stu ? props.stu.attributes.gender : '男',
    age: props.stu ? props.stu.attributes.age : '',
    address: props.stu ? props.stu.attributes.address : '',
  });
  const ctx = useContext(StuContext);
  // 输入框双向绑定
  const nameChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, name: e.target.value }));
  };
  const genderChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, gender: e.target.value }));
  };
  const ageChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, age: e.target.value }));
  };
  const addressChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, address: e.target.value }));
  };
  const {
    loading,
    error,
    fetchData: updateStudent,
  } = useFetch(
    { url: props.stu ? `/students/${props.stu.id}` : '/students', method: props.stu ? 'put' : 'post' },
    ctx.getStuData,
  );
  const addHandler = () => {
    updateStudent(inputData);
  };
  const editHandler = () => {
    updateStudent(inputData);
  };
  return (
    <>
      <tr className="StudentForm">
        <td>
          <input type="text" value={inputData.name} onChange={nameChangeHandler} />
        </td>
        <td>
          <select value={inputData.gender} onChange={genderChangeHandler}>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </td>
        <td>
          <input type="number" value={inputData.age} min="0" onChange={ageChangeHandler} />
        </td>
        <td>
          <input type="text" value={inputData.address} onChange={addressChangeHandler} />
        </td>
        <td>
          {props.stu && (
            <>
              <button onClick={props.onCancel}>取消</button>
              <button onClick={editHandler}>确认</button>
            </>
          )}
          {!props.stu && <button onClick={addHandler}>添加</button>}
        </td>
      </tr>
      <tr>
        {loading && <td colSpan={5}>添加中</td>}
        {error && <td colSpan={5}>添加失败</td>}
      </tr>
    </>
  );
};

export default StudentForm;
