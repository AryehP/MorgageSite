import React from 'react'
import phone from './img/phone.jpg';
import email from './img/email.png';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <div>
        <div className='contact-details'>
            <img className='phoneicon' src={phone}></img>
            <h4>052-444-1712</h4>
            <img className='emailicon' src={email}></img>
            <h4>somone@gmail.com</h4>
        </div>
    </div>
  )
}

export default FooterComponent