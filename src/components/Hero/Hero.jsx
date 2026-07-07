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

    // 2. Nakon što se animacija završi, javljamo roditelju da je TAJMER istekao (šaljemo false za muziku)
    const timerRemove = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete(false); 
    }, 3800);

    return () => {
      clearTimeout(timerShow);
      clearTimeout(timerRemove);
    };
  }, [onAnimationComplete]);

  // Korisnik preskače uvod klikom na ekran (šaljemo true jer imamo klik za muziku!)
  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete(true);
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
        <div className="welcome-names">
          Aleksandra, Dušan <br />
          <span className="and-style">&</span> Kasija
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;