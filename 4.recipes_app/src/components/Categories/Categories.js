import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Categories.scss';
import Loader from '../Loader/Loader';

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(data => {
        setCategories(data?.data?.categories);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  function clickHandler(category) {
    navigate(`/category/${category}`);
  }

  if (isLoading) {
    return (
      <div className='categories'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='categories'>
      <h1>Categories:</h1>
      <div className='categories-container'>
        {categories.map(category => (
          <div className='category-wrapper' key={category.idCategory} onClick={() => clickHandler(category.strCategory)}>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{category.strCategory}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
