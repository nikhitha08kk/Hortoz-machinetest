import React from 'react';
import "./style.css"
import rating from "../Assets/rating.png"
import card from "../Assets/card.png"
const Home = () => {
    return (
        <div className=' home-background'>

            <div className='home-title'><h1><span>Have a shining</span><br/>
            <span>smile with our</span> <br/>
            <span className='modern'>modern methods!</span></h1></div  >
            <div className='rating'><img src={rating} alt='rate'></img></div>
            <div className='card'><img src={card} alt='card'></img></div>


        </div>
    );
}

export default Home;
