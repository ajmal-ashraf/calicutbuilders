import React from 'react'
import './About.css'
import aboutImage from '../Images/aboutimage.jpg'

const About = () => {
  return (
    <>
      <section id='about'>
        <div className='container about-container'>
           <div className='about-head' data-aos="fade-up">
               <h1>About Us.</h1>
           </div>
           <div className='about-content'>
              <div className='about-image' data-aos="fade-right">
                <img src={aboutImage} alt='about'/>
              </div>
              <div className='about-text' data-aos="fade-up">
                <h3>Calicut builders is a trustworthy name in the construction and real estate industry. We have proven through our work ethics that it is possible to build house and commercial buildings in a budget friendly and great quality we deals with best engineers and architects to make your dream come true.</h3>
              </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default About
