import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HomeItems = (props) => {
  const { item, id } = props;
  const { urlToImage, author, content, description, publishedAt, title } = item;
  const [imageSrc, setImageSrc] = useState(urlToImage);

  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageSrc('https://res.cloudinary.com/dg9itycrz/image/upload/v1708069245/pexels-nappy-935979_x4rtsx.jpg');
    setImageLoadError(true);
  };

  if (imageLoadError) {
    return (
      <div>
        <p>Failed to load image</p>
        <img src={imageSrc} alt="Error" />
      </div>
    );
  }

  return (
    <Link to={`/article/${id}`} className='item'>
      <div className="homeItem">
        <div className='itemIn'>
          <img src={imageSrc} className="itemImg" alt='Image' onError={handleImageError} />
          <h2 className='itemTitle'>{title}</h2>
          <div className='in'>
            <br />
            {"\n"}
            <p className='itemPublished'>{publishedAt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeItems;
