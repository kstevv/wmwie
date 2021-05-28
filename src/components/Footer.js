import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>*/}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>By Recipient</h3>
            <Link to='/'>Gifts For Men</Link>
            <Link to='/'>Gifts For Women</Link>
            <Link to='/'>Gifts For Kids</Link>
            <Link to='/'>Gifts For Boyfriends</Link>
            <Link to='/'>Gifts For Girlfriends</Link>
          </div>
          <div class='footer-link-items'>
            <h3>More Gift Ideas</h3>
            <Link to='/'>Anniversary Gifts</Link>
            <Link to='/'>Christmas Gifts</Link>
            <Link to='/'>Funny Gifts</Link>
            <Link to='/'>Gifts Under $20</Link>
            <Link to='/'>Gifts For Couples</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>Helpful Links</h3>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>Submit A Product</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Blog</Link>
          </div>
          <div class='footer-link-items'>
            <h3>Social Media</h3>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Tumblr</Link>
            <Link to='/'>Pinterest</Link>
            <Link to='/'>RSS</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WMWIE
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>WMWIE © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
