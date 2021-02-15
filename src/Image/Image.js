import React from 'react';
import './style.css';

function Image(props) {
  const {img, alt} = props;

  return (
    <div className="imageContainer">
      <img src={img} alt={alt} />
    </div>
  );
}

export default Image;
