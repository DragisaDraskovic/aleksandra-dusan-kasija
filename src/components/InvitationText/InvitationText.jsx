import React from 'react';
import './InvitationText.css';

import Slika1 from '../../assets/Kica1.jpeg'

const InvitationText = () => {
  return (
    <div className="invitation-text-container">
      <p className="invitation-paragraph">
        Ljubav dobija pravu vrednost kada se deli sa onima koji nam najviše znače, 
        zato vas pozivamo da budete deo našeg venčanja i Kasijinog 1. rođendana
      </p>
      <div className="featured-image-wrapper">
        <img 
          src={Slika1} 
          alt="Glavna fotografija" 
          className="featured-image" 
        />
      </div>
    </div> 
  );
};

export default InvitationText;