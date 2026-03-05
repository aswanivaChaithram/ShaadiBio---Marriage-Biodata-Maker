import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                <img src={logo} alt="" />
                <h2>ShaadiBio</h2>
            </div>

            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <div>
            <p>© 2026 ShaadiBio. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer