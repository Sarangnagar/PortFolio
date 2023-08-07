import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <div>
     <section id ='services'>
      <h5>
        What I Offer
      </h5>
      <h2> Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3> UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            
          </ul>
        </article>
        {/* END OF WEBDEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            <l1> 
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </l1>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
     </section>
    </div>
  )
}

export default Services
