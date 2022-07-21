import React from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import ContextProvider from './context';

function App() {
  return (
    <ContextProvider>
      <Home />
      <Modal />
      <Sidebar />
    </ContextProvider>
  );
}

export default App;
