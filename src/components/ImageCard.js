import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div className="image-wrapper">
        <img 
          src={urls.small}
          alt={alt_description} 
        />
      </div>
    );
  }
}

export default ImageCard;