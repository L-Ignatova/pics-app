import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div>
      <h2>Image list</h2>
      {images.map(({id, urls, alt_description}) => {
        return <img 
          id={id} 
          key={id} 
          src={urls.small} 
          alt={alt_description} 
        />
      })}
    </div>
  );
};

export default ImageList;