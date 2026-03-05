import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Working from '../components/Working'
import Reviews from '../components/Reviews'

const Home = ({ setShowLogin, setCurrentState }) => {

  return (
    <div className="container">
      <Header setShowLogin={setShowLogin} setCurrentState={setCurrentState} />
      <About />
      <Working />
      <Reviews />
    </div>
  )
}

export default Home