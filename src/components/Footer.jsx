import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[rgb(6,40,115)] text-white pt-12 pb-6">

      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div className="flex items-center gap-1">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 object-contain rounded-full"
          />
          <h2 className="text-3xl font-bold text-orange-600">
            ShaadiBio
          </h2>
        </div>

        {/* Links */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-orange-400 transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#review" className="hover:text-orange-400 transition">
                Reviews
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <hr className="max-w-[80%] mx-auto border-black my-8" />

      {/* Bottom Text */}
      <div className="max-w-[80%] mx-auto text-center">
        <p className="text-white text-sm">
          © 2026 ShaadiBio. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer