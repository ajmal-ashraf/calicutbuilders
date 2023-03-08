import React from 'react'
import './Team.css'
import { Icon } from '@iconify/react';


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
                <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='founder'/>
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
                <img src='https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='co-founder'/>
              </div>
            </div>
            </div>
        </div>
     </div>
   </>
  )
}

export default Team
