import React from 'react';
import './assets/style/App.css'
import './assets/style/main.css'
import { Navigate , BrowserRouter, Route, Routes} from 'react-router-dom';

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
// Main Content Template
import MainContent from './components/MainContent';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" exact element={<MainContent />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/Assert_Management" element={<Assert_Management/>} />
          <Route path="/Alert_Management" element={<Alert_Management/>} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Device" element={<Device />} />
          <Route path="/Site" element={<Site />} />
          <Route path="/Add_device" element={<Add_device/>} /> 
          <Route path="/edit_device/:r_no" element={<Edit_device/>} /> 
          <Route path="/edit_site/:r_no" element={<Edit_site/>} />
          <Route path="/Add_site" element={<Add_site/>} /> 
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;