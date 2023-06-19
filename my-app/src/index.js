import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Signup from './pages/signup';
import NavPanel from './components/NavPanel';
import CIA from './pages/CIA';
import About from './pages/about';
import Training from './pages/training';
import Topics from './pages/topics';
import PasswordHandling from './pages/passwordHandling';
import AntiVirus from './pages/AntiVirus';
import Browsers from './pages/Browsers';
import Tor from './pages/Tor';
import Encryption from './pages/Encryption';
import Malware from './pages/Malware';
import RoS from './pages/RoS';
import Keys from './pages/Keys';
import Profile from './pages/profile';
import ML from './pages/ML';
import MultiFactor from './pages/multiFactor';

import {
    createBrowserRouter,
    RouterProvider,
    Route
} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Signup",
    element: <Signup></Signup>,
  },
  {
    path: "/CIA",
    element: <CIA></CIA>
  },
  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/Training",
    element: <Training></Training>,
  },
  {
    path: "/Topics",
    element: <Topics></Topics>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/PasswordHandling",
    element: <PasswordHandling></PasswordHandling>
  },
  {
    path: "/Anti-Virus",
    element: <AntiVirus></AntiVirus>
  },
  {
    path: "/Browsers",
    element: <Browsers></Browsers>
  },
  {
    path: "/Tor",
    element: <Tor></Tor>
  },
  {
    path: "/Encryption",
    element: <Encryption></Encryption>
  },
  {
    path: "/Malware",
    element: <Malware></Malware>
  },
  {
    path: "/RealityOfSecurity",
    element: <RoS></RoS>
  },
  {
    path: "/Keys",
    element: <Keys></Keys>
  },
  {
    path: "/Profile",
    element: <Profile></Profile>
  },
  {
    path: "/MachineLearning",
    element: <ML></ML>
  },
  {
    path: "/MultiFactor",
    element: <MultiFactor></MultiFactor>
  },

 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <RouterProvider router={router}>
      </RouterProvider>
      </AuthContextProvider>
      
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
