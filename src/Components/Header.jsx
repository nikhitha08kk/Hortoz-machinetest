import React from 'react';
import "./style.css"
import logo from "../Assets/logo.png"
const Header = () => {
  return (
    <div className='header'>
    <img src={logo} alt='logo' className='logo'></img>
    <nav className="navbar">
          <ul>
          <li><a href="#home"> Home</a></li>
          <li><a href="#about"><span className="dot">•</span> About Us</a></li>
          <li><a href="#services"><span className="dot">•</span> Services</a></li>
          <li><a href="#gallery"><span className="dot">•</span> Gallery</a></li>
          <li><a href="#promotions"><span className="dot">•</span> Promotions</a></li>
          <li><a href="#blogs"><span className="dot">•</span> Blogs</a></li>
          <li><a href="#contact"><span className="dot">•</span> Contact Us</a></li>
            <button>Appointment</button>
          </ul>
        </nav>
      
    </div>
  );
}

export default Header;
