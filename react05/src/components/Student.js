import React, { useContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import StuContext from '../store/StuContext';
import StudentForm from './StudentForm';

const Student = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const ctx = useContext(StuContext);
  const {
    loading,
    error,
    fetchData: deleteHandler,
  } = useFetch({ url: `/students/${props.stu.id}`, method: 'delete' }, ctx.getStuData);

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
