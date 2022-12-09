import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Hello from './Hello';

const About = (props) => {
  const { path } = useRouteMatch();

  return (
    <div>
      {/* Redirect 重定向 */}
      {/* <Redirect to="/form" /> */}
      About
      <Route path={`${path}/hello`}>
        <Hello />
      </Route>
    </div>
  );
};

export default About;
