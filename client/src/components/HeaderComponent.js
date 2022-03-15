import React from 'react'
import logo from './img/logo.jpg'
import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <div className='header-component'>
        <div className='title'>
            <img className='logo' src={logo}></img>
            <h1>House Mortgage</h1>
        </div>
    </div>
  )
}

export default HeaderComponent