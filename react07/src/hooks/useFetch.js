import { useCallback, useState } from 'react';

export default function useFetch({ url, method }, cb) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async (body) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:1337/api${url}`, {
        method: method || 'get',
        headers: { 'Content-Type': 'application/json' },
        body: !body ? null : JSON.stringify({ data: body }),
      });
      if (!res.ok) {
        throw new Error('获取失败');
      }
      const resData = await res.json();
      setData(resData.data);
      cb && cb();
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return { data, loading, error, fetchData };
}
