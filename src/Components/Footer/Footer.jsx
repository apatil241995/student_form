import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <i className="fa-brands fa-whatsapp icon"><samp className='samp'> Whatsapp</samp></i>
        <i className="fa-brands fa-instagram icon"><samp className='samp'> Instagram</samp></i>
        <i className="fa-brands fa-facebook-f icon"><samp className='samp'> Facebook</samp></i>
        <i className="fa-brands fa-github icon"><samp className='samp'> Github</samp></i>
        <i className="fa-brands fa-google icon"><samp className='samp'> Gmail</samp></i>
        <i className="fa-brands fa-twitter icon"><samp className='samp'> Twitter</samp></i>
      </div>
    </div>
  );
}

export default Footer;