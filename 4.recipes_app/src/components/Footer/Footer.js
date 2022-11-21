import './Footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <p>Recipes <span>App</span></p>
      <p className='copy'>&copy;</p>
      {year}
    </div>
  );
}

export default Footer;
