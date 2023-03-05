import React from 'react'
import './Header.css'
import Logo from '../Images/Calicut.jpg'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id='navbar-nav'>
          <div className="container">
           <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo"/>
           </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ms-auto">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#home">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#about">About</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#team">Team</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#services">Services</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#contact">Contact</a>
               </li>
             </ul>
           </div>
  </div>
</nav>
    </>
  )
}

export default Header
