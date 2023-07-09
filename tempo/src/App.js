import React from 'react';
import './assets/style/App.css'
import './assets/style/main.css'
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Device from './pages/Device.jsx';
import Site from './pages/Site.jsx';
import NotFound from './pages/NotFound';
import Add_device from './pages/Add_device';
import Edit_device from './pages/Edit_device';
import Edit_site from './pages/Edit_site';
import Add_site from './pages/Add_site';
import Assert_Management from './pages/Assert_Management.js'
import Alert_Management from './pages/Alert_Management';
import Modbus_Slave from './pages/Modbus_Slave'
import Modbus_Master from './pages/Modbus_Master'
import Event from './pages/Event'
import Device_Connection from './pages/Device_Connection'
import Real_Data from './pages/Real_Data';
import User from './pages/User'
import Alert from './pages/Alert'
// Main Content Template
import MainContent from './components/MainContent';
import Login from './pages/Login';
import TopNavbar from './TopNavbar';

const App = () => {
  // const location = useLocation();
  const isLoginRoute = window.location.pathname === '/login';
  console.log(isLoginRoute);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginRoute && <TopNavbar />}
      {!isLoginRoute &&
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/Assert_Management" element={<Assert_Management />} />
            <Route path="/Alert_Management" element={<Alert_Management />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Device" element={<Device />} />
            <Route path="/Site" element={<Site />} />
            <Route path="/Add_device" element={<Add_device />} />
            <Route path="/edit_device/:r_no" element={<Edit_device />} />
            <Route path="/edit_site/:r_no" element={<Edit_site />} />
            <Route path="/Add_site" element={<Add_site />} />
            <Route path="/Users" element={<User />} />
            <Route path="/Alert" element={<Alert />} />
            <Route path="/Modbus_Slave" element={<Modbus_Slave />} />
            <Route path="/Modbus_Master" element={<Modbus_Master />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Device_Connection" element={<Device_Connection />} />
            <Route path="/Real_Data" element={<Real_Data />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Sidebar>
      }



    </BrowserRouter>
  );
};

export default App;