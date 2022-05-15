import React from 'react'
import logo from './img/logo.jpg'
import './HeaderComponent.css';
import { NavLink } from 'react-router-dom';

function HeaderComponent() {
  
  return (
    <div className='header-component'>
        <div className='title'>
            <NavLink to={'/'}><img className='logo' src={logo}></img></NavLink>
            <h1>House Mortgage</h1>
        </div>
    </div>
  )
}

export default HeaderComponent