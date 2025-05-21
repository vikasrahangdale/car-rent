import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DashBoard from '../components/DashBoard';
import Category from '../components/Category';
import Info from '../components/Info';
import Home from '../pages/Home';
import Payment from '../pages/Payment';

const AppRoutes = () => {
  return (
   <div>
<Navbar/>
 

      
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/info" element={<Info />} />
          <Route path="/payment" element={<Payment />} />
      </Routes>
        </div>
   
  );
};

export default AppRoutes;
