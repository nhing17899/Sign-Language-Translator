import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className='container'>
      <div className='slogan'>
        <span className='blue-text'>About Us</span>
        <h3>Slogan 1</h3>
        <h3>Slogan 2</h3>
      </div>

      <div className='about-sections'>
        <h2>Our Story</h2>
        <div className='about-section'>
          <p>Text</p>
          <div className='image'/>
        </div>
      </div>
    
      <div className='about-sections'>
        <h2>Our Vision</h2>
        <div className='about-section'>
          <p>Short Text</p>
          <p>Long Text</p>
        </div>
      </div>

      <div className='about-sections'>
        <h2>Our Mission</h2>
        <div className='about-section'>
          <p>Short Text</p>
          <p>Long Text</p>
        </div>
      </div>


    </div>
  )
}

export default AboutUs;