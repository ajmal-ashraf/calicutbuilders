import React, {  useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { Icon } from '@iconify/react';
import swal from 'sweetalert';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pefts6m', 'template_asrvq3t', form.current, 'PuwLZhXC8_9BzF37I')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const Alert = () => {
    swal("Done!", "Your message sent successfully", "success");
  }
  return (
    <>
      <section id='contact'>
        <div className='container contact-container'>
           <div className='contact-head' data-aos="fade-up">
               <h1>Contact Us.</h1>
           </div>
           <div className='contact-content'>
            <div className='contact-details' data-aos="fade-up">
                <div className='phone'>
                   <Icon icon="material-symbols:perm-phone-msg-outline-rounded" color="white" height='40' className='contact-icons'/>
                   <div className='phone-number'>
                   <h6>+91 7293161310</h6>
                   <h6>+91 9847109195</h6>
                   </div>
                </div>
                <div className='email'>
                <Icon icon="material-symbols:attach-email-outline" color="white" height='40' className='contact-icons'/>
                  <h6>cltbuildersanddevelopers@gmail.com</h6>
                </div>
                <div className='social-media'>
                    <a href='https://www.instagram.com/'>
                    <Icon icon="mdi:instagram" color="white" height='30' className='socialmedia-icons'/>
                    </a>
                    <a href='https://www.facebook.com/'>
                    <Icon icon="ic:baseline-facebook" color="white" height='30' className='socialmedia-icons'/>
                    </a>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='message-form' data-aos="fade-up">
                 <label>name</label>
                 <input type="text" name="user_name" className='form-input' required placeholder='your name'/>
                 <label>email</label>
                 <input type="email" name="user_email" className='form-input' required placeholder='your e-mail'/>
                 <label>message</label>
                 <textarea name="message" className='form-input' required placeholder='Message' rows="8"/>
                 <input type="submit" value="Submit" className='btn-submit' onClick={Alert}/>
           </form>
           </div>
        </div>
      </section> 
    </>
  )
}

export default Contact
