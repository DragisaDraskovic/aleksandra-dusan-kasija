import { useState } from 'react'
import './App.css'

import Hero from "./components/Hero/Hero"
import InvitationText from './components/InvitationText/InvitationText'
import InfiniteGallery from './components/InfinityGallery/InfinityGallery'
import WeddingDetails from './components/WeddingDetails/WeddingDetails'
import Location from './components/Location/Location'
import FooterNotes from './components/FooterNotes/FooterNotes'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="app-container">
      {showWelcome ? (
        <Hero onAnimationComplete={() => setShowWelcome(false)} />
      ) : (
        <main className="main-content fade-in-page">
          
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
