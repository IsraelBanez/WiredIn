import React, { Component } from 'react';
import '../styles/NavPanel.css';
import w from '../w.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiSearch } from "react-icons/fi";
import Figure from 'react-bootstrap/Figure';
import { BrowserRouter, Routes, Route, Switch, Link, Redirect, useNavigate  } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

function NavPanel() {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const logoutUser = async () => {
      try{
        await logout()
        navigate("/")
        console.log("You are logged out!")
      }catch (e){
        console.log(e.message)
      }
  
    }
    return (
        <Navbar  className='nav-bar-head'>
        <Container className="nav-conatiner" >
          <Navbar.Brand className="brand-container" href="/">
            <a class="navbar-brand">
              <img src={w} alt="Logo Icon" width="65" height="65"></img>
              <h1 className='brand-name'>i r e d I n </h1>
            </a>
          </Navbar.Brand>
          
          {/* <Form className='search-container'>
            <div className='search-icon'><FiSearch /></div>
            <Form.Control className="search-bar"
              type="search"
              aria-label="Search"
            /> 
          </Form> */}

          <Nav className='nav-link'>
            <Nav.Link href="/Topics">Find Topic</Nav.Link>
            <Nav.Link href="/Training">Training</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <div className='dividor'></div>
           
            {/* {user ?  <Button className="login-button" onClick={logoutUser} variant="light">Logout</Button> : 
             <Button className="login-button" href="/signup" variant="light">Sign Up</Button>} */}
             {user ? <Button className='login-button' href='/Profile' variant="light">Profile</Button>  :
             <Button className="login-button" href="/signup" variant="light">Sign Up</Button>}
            
          
            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavPanel