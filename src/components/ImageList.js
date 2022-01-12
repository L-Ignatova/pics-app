import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const picsList = images.map(image => {
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <div>
      <h2>Image list</h2>
      <div className='image-list'>{picsList}</div>
    </div>
  );
};

export default ImageList;