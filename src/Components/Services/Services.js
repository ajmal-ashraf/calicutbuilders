import React from 'react'
import './Services.css'
import { Icon } from '@iconify/react';

const Services = () => {
  return (
  <>
    <section id='services'>
        <div className='container services-container'>
        <div className='service-head' data-aos="fade-up">
               <h1>Services.</h1>
           </div>
           <div className='cards' >
            <div className='card-content' data-aos="fade-up">
                <Icon icon="mdi:construction-outline" color="#896c00" height="50" className='card-icon'/>
                <h3>Civil constructions</h3>
                <p>We take all kinds of civil construction works from foundation to make the project ready to consumer. We take utmost good care from foundation to implementing all the design criteria's. We make sure the project is fully constructed with industry standard materials. </p>
            </div>
            <div className='card-content' data-aos="fade-up">
                <Icon icon="ic:round-construction" color="#896c00" height="50" className='card-icon'/>
                <h3>Renovations.</h3>
                <p>We also take all kinds of renovation works. from understanding the requirements by the customer to make the end product as it need by the customer. With the best material and experience we can make your dream come true.  </p>
            </div>
            <div className='card-content' data-aos="fade-up">
                <Icon icon="bi:buildings" color="#896c00" height="50" className='card-icon'/>
                <h3>Commercial Works.</h3>
                <p>We do all kinds of commercial constructions. As an owner you can save your time and headache by searching for the materials and civil labor. With industry standard machinery and equipment's we can build your dream project in a best budget friendly way. </p>
            </div>
           </div>
        </div>
    </section>
  </>
  )
}

export default Services
