import React from 'react'
import templatepreview1 from '../assets/template3Preview.webp'
import templatepreview3 from '../assets/template1Preview.webp'

const Header = ({ setShowLogin, setCurrentState }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 gap-12">

      <div className="flex flex-col gap-4 
        w-full md:w-1/2
        text-center md:text-left
        order-2 md:order-1 pt-6">

        <h1 className="text-4xl md:text-7xl font-bold text-orange-600 leading-tight">
          The Ultimate Marriage Biodata Maker
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
          Everything you need to design, customize, preview, and download
          your matrimonial profile.
        </p>

        <button
          onClick={() => {
            setCurrentState("Register");
            setShowLogin(true);
          }}
          className="w-fit mx-auto md:mx-0 px-6 py-2 rounded-full bg-orange-600 text-white font-bold text-base hover:bg-orange-700 transition duration-500 ease-in-out cursor-pointer"
        >
          Register Now
        </button>

      </div>

      <div className="
        relative 
        w-full md:w-1/2 
        flex justify-center items-center
        order-1 md:order-2 group">

        <img
          src={templatepreview3}
          alt="template preview 2"
          className="w-60 md:w-80 absolute top-10 right-20 sm:left-20 md:right-40 
           md:translate-x-0
            transition duration-500 ease-in-out 
            group-hover:-translate-y-2 
            group-hover:scale-105"
        />

        <img
          src={templatepreview1}
          alt="template preview 1"
          className="w-60 md:w-80 relative left-10 z-10 sm:left-16 xl:left-30
          transition duration-500 ease-in-out 
            group-hover:-translate-y-4 
            group-hover:scale-105"
        />

      </div>

    </div>
  )
}

export default Header