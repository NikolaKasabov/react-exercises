import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Categories from './components/Categories/Categories';
import RandomRecipe from './components/RandomRecipe/RandomRecipe';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Categories />} />
          <Route path='/random' element={<RandomRecipe />} />
          <Route path='/category/:categoryId' element={<Category />} />
        </Routes>
        <Footer />
        {/* <Loader /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
