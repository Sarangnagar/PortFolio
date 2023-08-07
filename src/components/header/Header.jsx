import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headersocials'

const Header = () => {
  return (
    <header>
       <div className="container header_container">
       <h1>
        hello I'm
       </h1>
       <h1>
        Sarang Nagar
       </h1>
       <h5 className='text-light'> Fullstack Developer</h5>
       <CTA/>
       <HeaderSocials/>
       <div className="me"> <img src={ME}alt='me' /></div>
       <a href='#contact' className='scroll__down'> Scroll Down</a>
      </div>
      </header>
  )
}

export default Header
