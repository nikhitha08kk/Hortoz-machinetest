import React from 'react';
import './style.css'
import doca from '../Assets/doca.png'
import docb from '../Assets/docb.png'
import docc from '../Assets/docc.png'
import docd from '../Assets/docd.png'

const Gallary = () => {
  return (
    <div className='gallary'>
      <div className=' meet'>
        <h1>Meet Our Team</h1>
        <p className='lorem'>Lorem Ipsum available, but the majority have suffered alteration in some form,<br/>
             by injected humour, or randomised words which don't look even</p>
      </div>
      <div className='photocard'>
        <div><img src={doca} alt='q'></img>
        <h2>Dr. Jhon Paul</h2>
        <p>General Dentist</p>
        </div>
        <div><img src={docb} alt='b'></img>
        <h2>Dr. Khaled Abul</h2>
        <p>Children's Dentist</p>
        </div>
        <div><img src={docc} alt='c'></img>
        <h2>Dr. Marwan Serhal</h2>
        <p>Children's Dentist</p>
        </div>
        <div><img src={docd} alt='d'></img>
        <h2>Dr. Chinchu Mathew</h2>
        <p>Children's Dentist</p>
        </div>

      </div> 
      <button className='view'>View All Team</button>
    </div>
  );
}

export default Gallary;
