import React, { useCallback, useContext, useState } from 'react';
import './StudentForm.css';
import StuContext from '../store/StuContext';

const StudentForm = (props) => {
  const [inputData, setInputData] = useState({
    name: props.stu ? props.stu.attributes.name : '',
    gender: props.stu ? props.stu.attributes.gender : '男',
    age: props.stu ? props.stu.attributes.age : '',
    address: props.stu ? props.stu.attributes.address : '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ctx = useContext(StuContext);
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
  const addHandler = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('http://localhost:1337/api/students', {
        method: 'post',
        body: JSON.stringify({ data: inputData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error('添加失败');
      }
      ctx.getStuData();
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [inputData]);
  const editHandler = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:1337/api/students/${props.stu.id}`, {
        method: 'put',
        body: JSON.stringify({ data: inputData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error('添加失败');
      }
      ctx.getStuData();
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  });
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
