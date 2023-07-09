import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/App.css'
import TopNavbar from './TopNavbar';
// import Device from './pages/Device';
// import Add_device from './pages/Add_device';
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
ReactDOM.render(
  <React.StrictMode>
    {/* <TopNavbar /> */}
    {/* <Route path="/" exact element={<Login />} /> */}
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
