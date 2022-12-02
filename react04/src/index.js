import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/reset.css';
import './assets/css/index.css';

/* 移动端适配 */
/* 除以几视口的宽度就是多少rem，现在我们设置规口的总宽度为750rem */
document.documentElement.style.fontSize = 100 / 750 + 'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
