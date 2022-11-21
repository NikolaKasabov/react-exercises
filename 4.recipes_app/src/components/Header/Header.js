import Nav from '../Nav/Nav';
import './Header.scss';

function Header() {

  return (
    <div className='header'>
      <div className='logo'>Recipes <span>App</span></div>
      <div>2</div>
      <Nav />
    </div>
  );
}

export default Header;
