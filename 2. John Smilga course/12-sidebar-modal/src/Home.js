import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { appContext } from './context';

const Home = () => {
  const { setIsModalOpen, setIsSidebarOpen } = useContext(appContext);

  return (
    <main>
      <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(true)}><FaBars /></button>
      <button className="btn" onClick={() => setIsModalOpen(true)}>show modal</button>
    </main>
  );
}

export default Home;
