import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <Container fluid="true">
      <Register/>
    </Container>
  );
}

export default App;
