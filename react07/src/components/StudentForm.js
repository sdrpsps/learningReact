import React, { useEffect, useState } from 'react';
import { useAddStudentsMutation, useGetStudentsByIdQuery, useUpdateStudentsMutation } from '../store/studentAPI';
import './StudentForm.css';

const StudentForm = (props) => {
  const { data: stuData, isSuccess } = useGetStudentsByIdQuery(props.stuId, { skip: props.stuId ? false : true });
  const [inputData, setInputData] = useState({
    name: '',
    gender: '男',
    age: '',
    address: '',
  });
  // 请求最新数据
  useEffect(() => {
    if (isSuccess) {
      setInputData(stuData.attributes);
    }
  }, [isSuccess]);

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

  const [addStudent] = useAddStudentsMutation();
  const addHandler = () => {
    addStudent(inputData);
    setInputData({ name: '', gender: '男', age: '', address: '' });

  };

  const [updateStudent] = useUpdateStudentsMutation();
  const updateHandler = () => {
    updateStudent({ id: props.stuId, data: inputData });
    props.onCancel();
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
          {props.stuId && (
            <>
              <button onClick={props.onCancel}>取消</button>
              <button onClick={updateHandler}>确认</button>
            </>
          )}
          {!props.stuId && <button onClick={addHandler}>添加</button>}
        </td>
      </tr>
      <tr>{/* {!isAddSuccess && <td colSpan={5}>添加失败</td>} */}</tr>
    </>
  );
};

export default StudentForm;
