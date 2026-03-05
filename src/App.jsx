import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './Pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [currentState, setCurrentState] = useState("Login");

  return (
    <>
      {showLogin && ( <Login setShowLogin={setShowLogin}
          currentState={currentState} setCurrentState={setCurrentState} />
      )}

      <Navbar setShowLogin={setShowLogin} setCurrentState={setCurrentState} />

      <div className='app'>
        <Routes>
          <Route path='/' element={<Home setShowLogin={setShowLogin} setCurrentState={setCurrentState} />} />
        </Routes>
      </div>

      <Footer />

    </>
  )
}

export default App