import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css";
const Navbar = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="logo-name">
                    <h1>Xroot</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                       
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar
