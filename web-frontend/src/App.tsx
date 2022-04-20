import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import LMS from './components/LMS';
import Home from './components/pages/home/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ResetPassword from './components/pages/ResetPassword';

function App() {
  return (
    <Container fluid="true">
      <LMS/>
    </Container>
  );
}

export default App;
