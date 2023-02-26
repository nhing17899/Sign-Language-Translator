import React from 'react';
import './Dictionary.css';

const Dictionary = () => {
  return (
    <div className='dictionary'> 
      <span>What do you want to know today?</span>
      <div className="search-area">
        <input className="search-input" type="text" placeholder="Search..." />
      </div>
      <span className='hot-search'>Hot Search</span>
      <div className="picture-grid">
        <div className="image">1</div>
        <div className="image">1</div>
        <div className="image">1</div>
        <div className="image">1</div>
      </div>
    </div>
  )
}

export default Dictionary;