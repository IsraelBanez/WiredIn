import React from 'react';
import '../styles/Footer.css';
import w from '../w.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Footer() {
  return (
    <div className='footer'>
        <Nav className='footer-link'>
            <Nav.Link href="/Topics">Find Topic</Nav.Link>
            <Nav.Link href="/Training">Training</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="https://www.freeprivacypolicy.com/live/fadea788-4b64-438e-8228-e1db3b0c383a">Privacy Policy</Nav.Link>
        </Nav>
        <Navbar.Brand className="footer-brand-container" href="/">
            <a class="footer-brand">
              <img src={w} alt="Logo Icon" width="65" height="65"></img>
              <h1 className='footer-brand-name'>i r e d I n </h1>
            </a>
          </Navbar.Brand>
    </div>
  )
}

export default Footer