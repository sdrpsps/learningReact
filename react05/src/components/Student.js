import React, { useCallback, useState, useContext } from 'react';
import StuContext from '../store/StuContext';
import StudentForm from './StudentForm';

const Student = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const ctx = useContext(StuContext);

  const deleteHandler = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:1337/api/students/${props.stu.id}`, { method: 'delete' });
      if (!res.ok) {
        throw new Error('删除失败');
      }
      ctx.getStuData();
      // const data = await res.json()
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const onCancelHandler = () => {
    setIsEdit(false);
  };
  return (
    <>
      {!isEdit && (
        <tr>
          <td>{props.stu.attributes.name}</td>
          <td>{props.stu.attributes.gender}</td>
          <td>{props.stu.attributes.age}</td>
          <td>{props.stu.attributes.address}</td>
          <td>
            <button onClick={deleteHandler}>删除</button>
            <button onClick={() => setIsEdit(true)}>修改</button>
          </td>
        </tr>
      )}
      {isEdit && <StudentForm stu={props.stu} onCancel={onCancelHandler} />}
      {loading && (
        <tr>
          <td colSpan={5}>正在删除数据</td>
        </tr>
      )}
      {error && (
        <tr>
          <td colSpan={5}>删除数据失败</td>
        </tr>
      )}
    </>
  );
};

export default Student;
