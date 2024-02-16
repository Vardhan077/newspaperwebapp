// import React, { useState } from 'react';
// import { Navigate,Link } from 'react-router-dom'
// import ArticleDetailScreen from '../ArticleDetailScreen'
// import './index.css'

// const HomeItems = props =>{
//     const [imageSrc, setImageSrc] = useState('original_image_url.jpg');
//     const {item,id} = props
//     console.log(id,'is url from home item')
//     const {urlToImage,author,content,description,publishedAt,title} = item

//     const handleImageError = () => {
//         setImageSrc('https://res.cloudinary.com/dg9itycrz/image/upload/v1708069245/pexels-nappy-935979_x4rtsx.jpg');
//       };

//     return(
//         <Link to={`/article/${id}`} className='item' >
//             <div className="homeItem" >
//                 <div className='itemIn'>
//                     <img src={urlToImage} className="itemImg" alt = {'Image'} onError={handleImageError} />
//                     <h2 className='itemTitle'>{title}</h2>
//                     {/* <h3 className='itemContent'>{content}</h3> */}
//                     {/* <p>{description}</p> */}
//                     <div className='in'>
//                         {/* <p className='itemAuthor'>{author}</p> */}
//                         <br/>{"\n"}
//                         <p className='itemPublished'>{publishedAt}</p>
//                     </div>
//                 </div>
//             </div>
//         </Link>
        
//     )
    
// }


// export default HomeItems






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HomeItems = (props) => {
  const { item, id } = props;
  const { urlToImage, author, content, description, publishedAt, title } = item;

  // State to manage image source
  const [imageSrc, setImageSrc] = useState(urlToImage);
  // State to track image loading status
  const [imageLoadError, setImageLoadError] = useState(false);

  // Event handler for image error
  const handleImageError = () => {
    // Set alternative image URL if original image fails to load
    console.log('EROOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRR')
    setImageSrc('https://res.cloudinary.com/dg9itycrz/image/upload/v1708069245/pexels-nappy-935979_x4rtsx.jpg');
    setImageLoadError(true);
  };

  // Check if image failed to load
  if (imageLoadError) {
    // Render an error message or placeholder image
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
          {/* Use imageSrc state for the image source */}
          <img src={imageSrc} className="itemImg" alt='Image' onError={handleImageError} />
          <h2 className='itemTitle'>{title}</h2>
          {/* <h3 className='itemContent'>{content}</h3> */}
          {/* <p>{description}</p> */}
          <div className='in'>
            {/* <p className='itemAuthor'>{author}</p> */}
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
