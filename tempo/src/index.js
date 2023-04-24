import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/App.css'
import TopNavbar from './TopNavbar';
import Device from './pages/Device';
ReactDOM.render(
  <React.StrictMode>
    {/* Top Navbar */}
    <TopNavbar />
    {/* Conent Division */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals();
