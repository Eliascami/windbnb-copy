import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

    <div className='navBar'>
        <div className='logo'>
            <img src="./src/assets/logo.png" alt="logo" />
        </div>
        <div className="serach">
            <button className='cityBtn'>Ciudad</button>
            <button className='guestsBtn'>Add guests</button>
            <button className='searchBtn'><i class="bi bi-search"></i></button>
        </div>
    </div>

  )
}

export default Navbar