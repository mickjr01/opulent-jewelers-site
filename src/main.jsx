import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/PriceList';
import OrderPage from './pages/OrderPage';
import CustomWork from './pages/CustomWork';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/custom" element={<CustomWork />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
