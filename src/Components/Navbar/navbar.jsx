import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div className='header-navigation'>
      <nav className='header-nav'>
      <ol className='header-nav-list'>
        <li className='li'><a href=""></a>Home</li>
        <li className='li'><a href=""></a>Destinations</li>
        <li className='li' ><a href=""></a>Trip types</li>
        <li className='li'><a href=""></a>Contact us</li>
      </ol>
    </nav>
    <a href="" className='book'>Book us</a>
    </div>
    
  )
}

export default Navbar