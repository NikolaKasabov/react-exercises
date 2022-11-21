import './App.scss';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>

        </Routes>
        <Footer />
        <Loading />
      </BrowserRouter>
    </div>
  );
}

export default App;
