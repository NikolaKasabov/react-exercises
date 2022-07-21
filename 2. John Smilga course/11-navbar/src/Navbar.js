import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const linksContainerRef = useRef(null);
  const linksUlRef = useRef(null);
  const [areLinksShown, setAreLinksShown] = useState(false);

  function toggleLinksHandler() {
    setAreLinksShown(prev => !prev);
  }

  useEffect(() => {
    if (areLinksShown) {
      const linksHeight = linksUlRef.current.getBoundingClientRect().height;
      linksContainerRef.current.style.height = linksHeight + 'px';
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [areLinksShown]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='logo' alt="logo" />
          <button className="nav-toggle" onClick={toggleLinksHandler}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksUlRef}>
            {links.map(link => {
              return <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>;
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map(item => {
            return <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
