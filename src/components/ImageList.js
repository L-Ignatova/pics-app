import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div>
      <h2>Image list</h2>
      {images.map(pic => {
        return <img 
          id={pic.id} 
          key={pic.id} 
          src={pic.urls.small} 
          alt={pic.alt_description} 
        />
      })}
    </div>
  );
};

export default ImageList;