import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/App.css'
import TopNavbar from './TopNavbar';
import Device from './pages/Device';
import Add_device from './pages/Add_device';
ReactDOM.render(
  <React.StrictMode>
    {/* Top Navbar */}
    <TopNavbar />
    {/* Conent Division */}
    <App />
    {/* <Add_new_div /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals();
