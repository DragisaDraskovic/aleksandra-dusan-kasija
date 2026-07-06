import React from 'react';
import './InfinityGallery.css';

import Slika1 from '../../assets/Kica5.jpeg';
import Slika2 from '../../assets/Kica2.jpeg';
import Slika3 from '../../assets/Kica3.jpeg';
import Slika4 from '../../assets/Kica4.jpeg';

const InfiniteGallery = () => {
  // Tvoje 4 slike
  const images = [
    { id: 1, url: Slika1, alt: 'Opis' },
    { id: 2, url: Slika2, alt: 'Opis' },
    { id: 3, url: Slika3, alt: 'Opis' },
    { id: 4, url: Slika4, alt: 'Opis' },
    
  ];

  // Dupliramo niz da bismo dobili savršen kontinuitet bez praznog prostora
  const duplicatedImages = [...images, ...images];

  return (
    <div className="gallery-slider-container">
      <div className="gallery-track">
        {duplicatedImages.map((image, index) => (
          <div className="gallery-slide" key={`${image.id}-${index}`}>
            <img src={image.url} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteGallery;