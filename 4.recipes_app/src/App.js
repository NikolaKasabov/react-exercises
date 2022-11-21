import './App.scss';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          
        </Routes>
        <Footer />
        {/* <Loader /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
