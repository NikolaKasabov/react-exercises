import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      
      <Routes>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
