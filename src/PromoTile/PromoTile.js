import React from 'react';
import Image from '../Image/Image'
import './style.css';

function PromoTile(props) {
  const { image, name} = props.movie;

  return (
    <div className="promoTileContainer">
      <Image img={image.medium} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default PromoTile;
