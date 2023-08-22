import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
  return (
    <nav className='navbar-container'>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </nav>
  )
}

export default Navbar