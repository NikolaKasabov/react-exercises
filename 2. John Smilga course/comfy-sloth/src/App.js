import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from './components';
import { fetchProductsThunk } from './store/productsSlice';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // dispatch(fetchProductsThunk());
  }, [dispatch]);

  return <>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      
      <Routes>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
