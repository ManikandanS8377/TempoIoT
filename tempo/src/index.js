import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/App.css'
import TopNavbar from './TopNavbar';
// import Device from './pages/Device';
// import Add_device from './pages/Add_device';
ReactDOM.render(
  <React.StrictMode>
    <TopNavbar />
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
