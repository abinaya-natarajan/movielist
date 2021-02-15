import React from 'react';
import PromoTile from '../PromoTile/PromoTile';
import './style.css';

function PromoTileWrapper(props) {
  const { moviesList } = props;

  return (
    <div className="promoTileWrapperContainer">
      {
        moviesList.map((movie) => {
          return <PromoTile movie={movie} />
        })
      }
    </div>
  );
}

export default PromoTileWrapper;
