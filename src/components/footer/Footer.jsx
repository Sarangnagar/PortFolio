import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <footer>
      <a href='a' className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href='a'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://twitter.com'><FaTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Sarang nagar.All rights reserved.</small>
      </div>
      </footer>
  )
}

export default Footer
