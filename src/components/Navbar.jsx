import React from 'react'
import logo from '../assets/logo.png'

const Navbar = ({ setShowLogin, setCurrentState }) => {

  return (
    <nav className="w-full bg-white shadow-md">

      <div className="max-w-[80%] mx-auto flex items-center justify-between py-4">

        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-14 h-14 object-contain rounded-full" />
          <h2 className="text-2xl font-bold text-orange-600">
            ShaadiBio
          </h2>
        </div>

        <div className="navbar-right">
          <button onClick={() => { setCurrentState("Login");
              setShowLogin(true);
            }}
            className="px-6 py-2 rounded-full bg-orange-600 text-white font-bold text-base hover:bg-orange-700 transition duration-500 ease-in-out cursor-pointer">
            Login
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar