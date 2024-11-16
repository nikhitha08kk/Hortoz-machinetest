import React from 'react';
import './style.css'
import gala from '../Assets/gala.png'
import galb from '../Assets/galb.png'
import galc from '../Assets/galc.png'
import frame from '../Assets/frame.png'
const Gallary2 = () => {
  return (
    <div className='gallary2'>
        <div className='two'>
            <div><h1>Exclusive<br/>
            Monthly Dental Offers</h1></div>
            <div>
            <p>Unlock your smile’s potential with our exclusive
            dental offers for this month</p>
            </div>
        </div>
        <div className='phocard2'>
            <div><img src={galc}alt="ab"></img>
            <p>Cleaning Polishing, Teeth Whitening<br/>
            and Comprehensive Consultation</p>
            <h1 className='aed'>599 AED</h1>
            <hr/>
            <p>Flash Tooth Whitening System for 1 Hour</p>
            <hr/>
            <p>Deep Cleaning and Polishing</p>
            <hr/>
            <p>Full Mouth Treatment Plan Included</p>
            <button className='apoint'>MAKE AN APPOINMENT</button>
            </div>
            <div><img src={galb} alt='ab1'></img>
            <p>Orthodontic Braces</p>
            <h1 className='aed'>2499 AED</h1>
            <hr/>
            <p>American Association of Orthodontist Member</p>
            <hr/>
            <p>Align Your Complete Teeth in 6-12 Months</p>
            <hr/>
            <p>Complimentary Teeth Cleaning During<br/>
            Orthodontic Treatment</p>
            <button className='apoint'>MAKE AN APPOINMENT</button>
            </div>
            <div><img src={gala} alt='ab2'></img>
            <p>Premium Quality Hollywood<br/>
            Smile 20 Teeth</p>
            <h1 className='aed'>14000 AED</h1>
            <hr/>
            <p>German Quality Super Thin Veneers</p>
            <hr/>
            <p>Painless and Delivered in 5 Days in 2 Sessions</p>
            <hr/>
            <p>German Trained Cosmetic Dentist Who<br/>
            Delivered More than 2000 Smiles</p>
            <button className='apoint'>MAKE AN APPOINMENT</button>
            </div>
            <img src={frame} alt='frame'></img>

        </div>
      
    </div>
  );
}

export default Gallary2;
