import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import RandomRecipe from './components/RandomRecipe/RandomRecipe';
import Category from './components/Category/Category';
import CategoryRecipe from './components/CategoryRecipe/CategoryRecipe';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Categories />} />
          <Route path='/random' element={<RandomRecipe />} />
          <Route path='/category/:categoryId' element={<Category />} />
          <Route path='/recipe/:recipeId' element={<CategoryRecipe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
