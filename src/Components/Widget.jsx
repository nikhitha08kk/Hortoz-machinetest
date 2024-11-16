import React from 'react';
import "./style.css";
import wid from '../Assets/wid.png'

const Widget = () => {
  return (
    <div className='widget'>
      <div className='widgets'><img src={wid} alt='wid'></img></div>
      
    </div>
  );
}

export default Widget;
