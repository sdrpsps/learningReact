import React from 'react';
import { useParams } from 'react-router-dom';

const Student = (props) => {
  // console.log(props);
  // const match = useRouteMatch();
  // const location = useLocation();
  // const history = useHistory();
  const params = useParams()

  return <div>id:{params.id}</div>;
};

export default Student;
