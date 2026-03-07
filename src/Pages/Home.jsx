import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Working from '../components/Working'
import Reviews from '../components/Reviews'

const Home = ({ setShowLogin, setCurrentState, isAuthenticated }) => {
  return (
    <div className="container">
      <Header
        setShowLogin={setShowLogin}
        setCurrentState={setCurrentState}
        isAuthenticated={isAuthenticated}
      />
      <About />
      <Working />
      <Reviews />
    </div>
  );
}

export default Home