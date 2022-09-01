import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from './components';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
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
        <Route path='products/:id' element={<SingleProductPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </>;
}

export default App;
