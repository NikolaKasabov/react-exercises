import { useEffect, useState } from 'react';
import axios from 'axios';
import './Categories.scss';
import Loader from '../Loader/Loader';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(data => {
        console.log(data);
        setCategories(data.data.categories);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

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
          <div className='category' key={category.idCategory}>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{ category.strCategory}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
