import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <div>
      <section id = 'about'>
        <h5> Get To Know</h5>
        <h2> About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt='About Image'/>
            </div>

          </div>
          <div className='about__content'>
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>

                <h5>Experience</h5>
                <small> 3+Years Working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon'/>

                <h5>Clients</h5>
                <small> 300 + Clients World wide</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>

                <h5>Projects</h5>
                <small>80 + Completed </small>
              </article>
            </div>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque dignissimos earum adipisci rerum voluptatibus nostrum quisquam quis, neque expedita asperiores? Minus ullam autem tempore consectetur tenetur dolorum in pariatur!
</p>
<a href='#contact' className='btn btn-primary'> Let's Talk</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
