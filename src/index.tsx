import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/pages/Home/Home';
import Device from '../src/pages/Device/Device';
import Form from '../src/pages/Form/Form';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
