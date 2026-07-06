import React, { useState, useEffect } from 'react';
import './Hero.css';
import rukeIlustracija from "../../assets/rukaLepsa.png"

const WelcomeScreen = ({ onAnimationComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Ekran stoji prikazan 3 sekunde
    const timerShow = setTimeout(() => {
      setIsFading(true); // Pokrećemo fade-out animaciju
    }, 3000);

    // 2. Nakon što se animacija završi (npr. 800ms), javljamo roditeljskoj komponenti da skloni ekran iz DOM-a
    const timerRemove = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 3800);

    return () => {
      clearTimeout(timerShow);
      clearTimeout(timerRemove);
    };
  }, [onAnimationComplete]);

  // Omogućavamo korisniku da preskoči uvod ako klikne na ekran
  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 800);
  };

  return (
    <div 
      className={`welcome-overlay ${isFading ? 'fade-out' : ''}`}
      onClick={handleSkip}
    >
      <div className="welcome-content-container">
        <div className="welcome-image-wrapper">
          <img 
            src={rukeIlustracija} 
            alt="Dobrodošli" 
            className="welcome-image"
            loading="eager" 
          />
        </div>
        {/* Novi deo sa tvojim imenima */}
        <div className="welcome-names">
          Aleksandra, Dušan <br />
          <span className="and-style">&</span> Kasija
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;