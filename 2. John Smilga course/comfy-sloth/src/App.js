import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from './components';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { fetchProductsThunk } from './store/productsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return <>
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='products' element={<ProductsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </>;
}

export default App;
