import React from 'react';
import "./style.css"
import services from '../Assets/services.png'
const Services = () => {
  return (
    <div className='services'>
        <div className='s-title'><p>Transform your smile with
        veneers, whitening, and implants.</p></div>
        <p>Lorem Ipsum available, but the majority have suffered alteration in some form,<br/> by injected humour, or randomised words which don't look even</p>
        <div><img src={services} alt='service'></img></div>
      
    </div>
  );
}

export default Services;
