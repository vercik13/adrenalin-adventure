import React from 'react';
import logo from '../../assets/logo.jpg';
import './header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <img className="nav--logo" src={logo} alt="" />
        <h1>Adrenalin Adventure</h1>
      </nav>
    </div>
  )
}

export default Header