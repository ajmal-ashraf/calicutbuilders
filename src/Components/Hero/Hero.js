import React, { useEffect } from 'react'
import './Hero.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Icon } from '@iconify/react';

const Hero = () => {

   useEffect(()=> {
    Aos.init({duration: 2000});
   },[])

  return (
   <>
     <section id='home'>
        <div className='container hero-container'>
            <div className='hero-text' data-aos="fade-up">
                <h1><span>Integrity </span>in<br/>every aspect of<br/><span>Home-building.</span></h1>
                <p>Calicut builder and developers Is Here To Help You For your dream come true for any of your construction needs. We are one of the major builders in Calicut with more than a decade of experience. We expertise in building home and commercial projects the way client needs.</p>
                <button className='cta-btn'>
                <a href='#contact'>Contact Us</a>
                </button>
                    <div className='experience'>
                        <div className='projects'>
                            <Icon icon="mdi:briefcase-variant" height="20" className='projects-icon'/>
                            <h5><span>100+ </span>Projects Build.</h5>
                        </div>
                        <div className='projects'>
                            <Icon icon="ph:handshake-fill" height="20" className='projects-icon'/>
                            <h5><span>15+ </span>Years of experience.</h5>
                        </div>
                    </div>
                </div>
                <div className='hero-image' data-aos="fade-left">
                    <img src='https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80' alt='hero'/>
            </div>
        </div>
     </section>
   </>
  )
}

export default Hero
