import React, { useState } from 'react';
import { useDelStudentsByIdMutation } from '../../store/api/studentAPI';
import StudentForm from './StudentForm';

const Student = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const [delStudent, { isSuccess }] = useDelStudentsByIdMutation();

  const deleteHandler = () => {
    delStudent(props.stu.id);
  };

  const onCancelHandler = () => {
    setIsEdit(false);
  };
  return (
    <>
      {!isEdit && !isSuccess && (
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
      {isSuccess && (
        <tr>
          <td colSpan={5}>删除成功</td>
        </tr>
      )}
      {/* {!isSuccess && (
        <tr>
          <td colSpan={5}>删除数据失败</td>
        </tr>
      )} */}

      {isEdit && <StudentForm stuId={props.stu.id} onCancel={onCancelHandler} />}
    </>
  );
};

export default Student;
