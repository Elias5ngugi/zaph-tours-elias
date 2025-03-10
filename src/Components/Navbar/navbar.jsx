import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const NavLinks = [
  { to: `/`, label: "home"},
  { to: `/Destinations`, label: "Destinations"},
  { to: `/Triptypes`, label: "Triptypes"},
  { to: `/Contact-us`, label: "Contact-us"},
]

function Navbar() {
  return (
    <div className='header-navigation'>
      <nav className='header-nav'>
      <ol className='header-nav-list'>
        <NavigationLink to="/" label="Home"/>
        <NavigationLink to="/Destinations" label="Destinations"/>
        <NavigationLink to="/Triptypes" label="Triptypes"/>
        <NavigationLink to="/Contact-us" label="Contact-us"/>
      </ol>
    </nav>
    <a href="" className='book'>Book us</a>
    </div>
    
  )
}

export default Navbar

function NavigationLink({to,label}){
  return(
    <li>
      <NavLink to={to} className={({isActive}) =>isActive ===true && "active-link"}>{label}</NavLink>
    </li>
  )
}