import React from 'react';
import './assets/style/App.css'
import { Navigate , BrowserRouter, Route, Routes} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Device from './pages/Device.jsx';
import NotFound from './pages/NotFound';

// Main Content Template
import MainContent from './components/MainContent';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" exact element={<MainContent />} />
          <Route path="/dashboard" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Device" element={<Device />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;