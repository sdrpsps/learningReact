import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Student from './components/Student';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="hello" element={<Hello />} />
        </Route>
        <Route path="/student/:id" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
