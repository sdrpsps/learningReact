import React, { useCallback, useState, useContext } from 'react';
import StuContext from '../store/StuContext';

const Student = ({
  stu: {
    id,
    attributes: { name, age, gender, address },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ctx = useContext(StuContext);

  const deleteHandler = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:1337/api/students/${id}`, { method: 'delete' });
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

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>
          <button onClick={deleteHandler}>删除</button>
        </td>
      </tr>
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
