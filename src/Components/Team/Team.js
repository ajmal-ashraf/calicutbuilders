import React from 'react'
import './Team.css'
import { Icon } from '@iconify/react';
import mujeeebImg from '../Images/Mujeeb-cropped.jpg'
import koyaImg from '../Images/Koya.jpg'


const Team = () => {
  return (
   <>
     <div id='team'>
        <div className='container team-container'>
            <div className='team-head' data-aos="fade-up">
                <h1>Our Team.</h1>
            </div>
            <div className='team-section'>
            <div className='section' data-aos="fade-up">
              <div className='team-section-image'>
                <img src={mujeeebImg} alt='founder'/>
              </div>
              <div className='team-section-text-1'>
                <h5><Icon icon="ri:double-quotes-l" color="#896c00"  height="28" className='icon'/>We are happy to announce that from the review of our customers , we are the one of the best builders in Calicut in terms of quality of work and the budget friendliness. We make sure everything work as planned at the given time.<Icon icon="ri:double-quotes-r" color="#896c00" height="26" className='icon'/></h5>
                <h3>-Mujeeb</h3>
                <p>Founder , Managing Partner.</p>
              </div>
            </div>
            <div className='section' data-aos="fade-up">
              <div className='team-section-text-2'>
              <h5><Icon icon="ri:double-quotes-l" color="#896c00"  height="28" className='icon'/>Trust and experience are the two major foundations of Calicut builders. We are happy to say that we are the leading builders in Calicut in terms of experience and innovation. And also happy to serve more than hundreds of clients.<Icon icon="ri:double-quotes-r" color="#896c00" height="26" className='icon'/></h5>
                <h3>-Koya E.M</h3>
                <p>Co-founder, Managing Partner.</p>
              </div>
              <div className='team-section-image'>
                <img src={koyaImg} alt='co-founder'/>
              </div>
            </div>
            </div>
        </div>
     </div>
   </>
  )
}

export default Team
