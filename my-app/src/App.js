import React, { Component } from 'react';
import './styles/App.css';
import w from './w.png';
import c from'./computer-lock.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiSearch } from "react-icons/fi";
import Figure from 'react-bootstrap/Figure';
import NavPanel from './components/NavPanel';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Switch, Link, Redirect, useNavigate  } from "react-router-dom";
import { UserAuth } from './context/AuthContext';

function App() {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();
  var name, email, photoUrl, uid, emailVerified;
  // console.log(user.uid)
  

  return (
    <Container fluid className="home-body">
      <NavPanel></NavPanel>
      <div className='content'>
      
      <Container className='image-body'>
          <Container className='slogan-container'>
            <h3 className='slogan'>Tech Security Information Without All the Acronymns and Hassle</h3>
            <br></br>
            <Button className="login-button" id="topics" variant="light" href="/Topics">Find Topic</Button>
         </Container>
      </Container>
      <div className='mid-section'>
          {/* <Container className='second-part'> */}
            <img id="computer-lock-image" src={c} alt="computer-lock-image"></img>
          {/* </Container> */}
          <Container className='third-part'>
            <p id="mid-title">An Effort to Make a Difference</p>
            <p id="mid-text">This website was designed for educational purposes and in the scope of a college senior project. Learn more by visiting the About page.</p>
            <Button className="login-button" variant="light" href="/about">About this Project</Button>
          </Container>
      </div>
      </div>
      <Footer></Footer>
    </Container>
    

  );
}

export default App;
