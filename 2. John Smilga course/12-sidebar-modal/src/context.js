import React, { useState } from 'react';
import { createContext } from 'react';

export const appContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => { },
  isSidebarOpen: false,
  setIsSidebarOpen: () => { },
});

function ContextProvider(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return <appContext.Provider value={{
    isModalOpen,
    setIsModalOpen,
    isSidebarOpen,
    setIsSidebarOpen
  }}>
    {props.children}
  </appContext.Provider>
}

export default ContextProvider;
