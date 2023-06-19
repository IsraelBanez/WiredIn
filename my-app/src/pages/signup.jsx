
import React, { Component, useRef, useState } from 'react';
import '../styles/signup.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Routes, Route, Switch, Link, Redirect, useNavigate  } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavPanel from '../components/NavPanel';
import {database, firestore} from "../firebase";
import { addDoc, collection} from "@firebase/firestore";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '../context/AuthContext'; 
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

function Signup() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const {createUser} = UserAuth();


    const db = getDatabase();
  
    function writeUserData(userId, firstname, lastname, email, password) {
      set(ref(db, 'users/' + userId), {
        userId: userId,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        "CIA Quiz": -1,
        "Browsers Quiz": -1,
        "Tor Quiz": -1,
        "Password Handling Quiz": -1,
        "Anti-Virus Quiz": -1,
        "Encryption Quiz": -1,
        "Malware Quiz": -1,
        "Reality of Security Quiz": -1,
        "Keys Quiz": -1,
        "Machine Learning Quiz": -1,
        "Multi-Factor Quiz": -1,
        
      });
    }


    const signUpUser = async (e) => {
        e.preventDefault();

        setError("")
        try{
          await createUser(email, password)
          writeUserData(getAuth().currentUser.uid, first, last, email, password)
          navigate("/")
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
      };



    return (
        <Container fluid className="body">

        <Form className='form-container' onSubmit={signUpUser}>
          <h1 className='login-header'>Sign Up</h1>

          <Container className='user-name' color='black'>
       
                <Form.Control 
                  className="info-holders-user" 
                  type="first-name"  
                  placeholder="First"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)} />
                <Form.Control 
                  className="info-holders-user" 
                  type="last-name" 
                  placeholder="Last"
                  value={last}
                  onChange={(e) => setLast(e.target.value)} />

          </Container>
          
          <Container className='email-password'>
            <Form.Control 
              className="info-holders" 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  />
            <Form.Control 
              className="info-holders" 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  />

          </Container>

          <Button className="signup-btn" variant='light' type="submit">
            Create Account
          </Button>

          <p className='memeber-section' >Already have an account? <a href="/login">Login</a></p>
        </Form>
        </Container>

       
      );
}

export default Signup;