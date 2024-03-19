// src/routes.js
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';




const AppRoutes = () => (
  
  <Routes>
 <Route  path="/"  element={<HomePage />}></Route>
    <Route path="/about"  element={<AboutPage/>} />
     

   
  </Routes>
);

export default AppRoutes;
