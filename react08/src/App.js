import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import MyForm from './components/MyForm';
import Student from './components/Student';
import Login from './components/Login';

function App() {
  const [isLogin] = useState(false);
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/form">{isLogin ? <MyForm /> : <Redirect to="/login" />}</Route>
        {/* <Route  path="/student/:id" component={Student} /> */}
        {/* <Route  path="/student/:id" render={(routeProps) => <Student {...routeProps} />} /> */}
        <Route path="/student/:id" render={() => <Student />} />
        <Route path="*">
          <div>路径错误</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
