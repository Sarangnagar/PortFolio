import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const headersocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_black'><BsLinkedin/></a>
        <a href='https://github.com' target='_black'><FaGithub/></a>
        <a href='https://dribbble.com' target='_black'><FiDribbble/></a>
      
    </div>
  )
}

export default headersocials
