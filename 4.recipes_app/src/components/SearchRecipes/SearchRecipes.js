import { useParams } from 'react-router-dom';
import './SearchRecipes.scss';

function SearchRecipes() {
  const params = useParams();


  return (
    <div className='search-recipes'>
      search recipes...
    </div>
  );
}

export default SearchRecipes;
