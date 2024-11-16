import React from 'react';
import './style.css';
import blogd from '../Assets/blogd.png';
import blogb from '../Assets/blogb.png';
import bloga from '../Assets/bloga.png';
import blogc from '../Assets/blogc.png';
const Blogs = () => {
  return (
    <div className='blogs'>
        <div className='top'>
            <div className='div1'><h1>See Our Lates Blogs!</h1></div>
            <div className='div2'> <button className='view'> View All</button></div>
        </div>
    <div className='photocard-blogs'>
        <div>
            <img src={blogd} alt='den1'></img>
            <h3>Lorem Ipsum available, but the
            <br/> majority have suffered</h3>
            <p>Lorem Ipsum available, but the majority have <br/>
            suffered alteration in some form, by injected 
            <br/>humour, or randomised words which don't look<br/> even</p>
            <a href='#read'>READ MORE</a>

        </div>
        <div>
        <img src={blogb} alt='den2'></img>
            <h3>Lorem Ipsum available, but the
                <br/> majority have suffered</h3>
            <p>Lorem Ipsum available, but the majority have <br/>
            suffered alteration in some form, by injected 
            <br/>humour, or randomised words which don't look<br/> even</p>
            <a href='#read'>READ MORE</a>
        </div>
        <div>
        <img src={bloga} alt='den3'></img>
            <h3>Lorem Ipsum available, but the
            <br/> majority have suffered</h3>
            <p>Lorem Ipsum available, but the majority have <br/>
            suffered alteration in some form, by injected 
            <br/>humour, or randomised words which don't look<br/> even</p>
            <a  href='#read'>READ MORE</a>
        </div>
        <div>
        <img src={blogc} alt='den4'></img>
            <h3>Lorem Ipsum available, but the
            <br/> majority have suffered</h3>
            <p>Lorem Ipsum available, but the majority have <br/>
            suffered alteration in some form, by injected 
            <br/>humour, or randomised words which don't look<br/> even</p>
            <a  href='#read'>READ MORE</a>
        </div>
    </div>
      
    </div>
  );
}

export default Blogs;
