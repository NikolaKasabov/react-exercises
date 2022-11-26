import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import Nav from '../Nav/Nav';
import './Header.scss';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function submitHandler(ev) {
    ev.preventDefault();
    if (searchTerm === '') {
      return;
    }

    setSearchTerm('');
    navigate(`/search/${searchTerm}`);
  }

  return (
    <div className='header' onSubmit={submitHandler}>
      <Link className='logo' to='/'>Recipes <span>App</span></Link>
      <form className='form'>
        <input type="text" placeholder='search for recipe...'
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <button type='submit'>
          <FcSearch />
        </button>
      </form>
      <Nav />
    </div>
  );
}

export default Header;
