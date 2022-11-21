import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className='nav'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/random'}>Random Recipe</NavLink>
    </nav>
  );
}

export default Nav;
