
import React, { Component, useState } from 'react';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/login.css'
import { BrowserRouter, Routes, Route, Switch, Link, Redirect, useNavigate  } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '../context/AuthContext'; 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { loginUser } = UserAuth();


    const signInUser = async (e) => {
        e.preventDefault();

        setError("")
        try {
          await loginUser(email, password)
          navigate("/")
        } catch (e){
          setError(e.message)
          console.log(e.message)
        }
    };

    return (
        <Container fluid className="body">
        <Form 
          className='form-container' 
          onSubmit={signInUser}
        >
          <h1 className='login-header'>Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              className="info-holders" 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              className="info-holders" 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <a className='forgot-link' href="#!">Forgot password?</a>

          <Button className="login-btn" variant='light' type="submit">
            Login
          </Button>
          <Container className='line-section'>
            <Container className='line'></Container>
            <p className='or'>OR</p>
            <Container className='line'></Container>
          </Container>
          
          <p className='new-section' >New? <a href="/signup">Create an account</a></p>
        </Form>
        </Container>

       
      );
}

export default Login;