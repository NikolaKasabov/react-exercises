import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
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
      <ScrollToTop />
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='products/:id' element={<SingleProductPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </>;
}

export default App;
