import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Toggle from './Toggle';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        {/*<div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
            />
            <Button buttonStyle='btn--outline'>Search</Button>
          </form>
        </div>*/}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Why My Wallet Is Empty
            {/*<i class='fab fa-typo3' />*/}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/*button && <Button buttonStyle='btn--outline'>SIGN UP</Button>*/}
        </div>
        <div className='navbar-right'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Gifts By Recipient
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gifts By Occasion
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gifts By Category
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gift Guides
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-links'>
                <img
                className='search-icon'
                alt='Search'
                src='images/search-icon-white.png'
              />
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              class='social-icon-link facebook'
              className='nav-links'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              class='social-icon-link instagram'
              className='nav-links'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            </li>
            <li className='nav-item'>
            <Link 
              class='social-icon-link twitter'
              className='nav-links'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            </li>
            <li><Toggle /></li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          </div>
      </nav>
      
    </>
  );
}

export default Navbar;
