import { useState, useEffect, useRef } from 'react'
import './App.css'

import Hero from "./components/Hero/Hero"
import InvitationText from './components/InvitationText/InvitationText'
import InfiniteGallery from './components/InfinityGallery/InfinityGallery'
import WeddingDetails from './components/WeddingDetails/WeddingDetails'
import Location from './components/Location/Location'
import FooterNotes from './components/FooterNotes/FooterNotes'
import { ImVolumeMute, ImVolumeMute2 } from "react-icons/im";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('Muzika za Kicu.mp3');
    audioRef.current.loop = true;
    audioRef.current.volumen = 0.4;
  }, [])

  const handleStartApp = (wasClicked = false) => {
    setShowWelcome(false);

    if (audioRef.current) {
      if (wasClicked) {
        // Ako je gost kliknuo, puštamo zvuk regularno
        audioRef.current.play().catch(err => console.log("Play blokiran uprkos kliku:", err));
      } else {
        // Ako je istekao tajmer bez klika, mutiramo audio i puštamo ga "u pozadini" bez greške
        audioRef.current.muted = true;
        setIsMuted(true); // Setujemo stanje da ikonica zvučnika bude prekrštena
        audioRef.current.play().catch(err => console.log("Muted play blokiran:", err));
      }
    }
  };

  if(audioRef.current) {
    audioRef.current.play().catch(error => {
      console.log("Muzika je blokirana zbog pretrazivaca.", error);
    })
  }

  const toggleMute = () => {
    if(audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  }

  return (
    <div className="app-container">
      {showWelcome ? (
        <Hero onAnimationComplete={handleStartApp} />
      ) : (
        <main className="main-content fade-in-page">
          
          <button onClick={toggleMute} className="mute-btn" title="Ugasi/Upali muziku">
            {isMuted ? <ImVolumeMute2 /> : <ImVolumeMute />}
          </button>

          {/* 1. Komponenta sa tekstom pozivnice */}
          <InvitationText />

          {/* 2. Beskonačna galerija koja ide odmah ispod teksta */}
          <WeddingDetails />
          <InfiniteGallery />
          <Location />
          <FooterNotes />
        </main>
      )}
    </div>
  )
}

export default App
