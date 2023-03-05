import React from 'react'
import './Hero.css'
import projectsIcon from '../Images/suitcase-alt.svg'
import handShakeIcon from '../Images/handshake-bold.svg'

const Hero = () => {
  return (
   <>
     <section id='hero'>
        <div className='container hero-container'>
                    <div className='hero-text'>
                        <h1><span>Integrity </span>in<br/>every aspect of<br/><span>Home-building.</span></h1>
                        <p>Calicut builder and developers Is Here To Help You For your dream come true for any of your construction needs. We are one of the major builders in Calicut with more than a decade of experience. We expertise in building home and commercial projects the way client needs.</p>
                        <button className='cta-btn'>
                        <a href='#contact'>Contact Us</a>
                        </button>
                        <div className='experience'>
                            <div className='projects'>
                                <img src={projectsIcon}/>
                                <h5><span>100+ </span>Projects Build.</h5>
                            </div>
                            <div className='projects'>
                                <img src={handShakeIcon}/>
                                <h5><span>15+ </span>Years of experience.</h5>
                            </div>
                        </div>
                    </div>
                    <div className='hero-image'>
                        <img src='https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80' alt='hero-image'/>
                 </div>
        </div>
     </section>
   </>
  )
}

export default Hero
