import React from 'react';
import './Image.css';

const Image = (props) => {
  const { src, caption, alt } = props;

  return (
    <div className="image-container">
      <img className="image" src={src} alt={alt} />
      <div className="caption">{caption}</div>
    </div>
  ); 
}

export default Image;