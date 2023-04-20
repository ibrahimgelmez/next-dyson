import React, { useState } from 'react';
import Image from 'next/image';



const ImageSlider = ( {product, urlMap} ) => {
  const [currentImage, setCurrentImage] = useState(0);

  const newArray = [`https:${product.fields.productImage.fields.file.url}` , ...urlMap]; 
  const images = newArray
  
  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className='flex '>
      <button className='pr-3 text-2xl' onClick={prevImage}>←</button>
      <Image width={500} height={500} src={images[currentImage]} alt="Slider" />
      <button className='pl-3 text-2xl' onClick={nextImage}>→</button>
    </div>
  );
};

export default ImageSlider;
