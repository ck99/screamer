import React, {useEffect} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SymbolTable from "./components/SymbolTable";

function App() {
  return (
      <Container className="p-3" fluid>
        <Jumbotron>
          <h1 className="header">Binance Bloodbath</h1>
        </Jumbotron>
          <Row>
              <Col><SymbolTable/></Col>
          </Row>
      </Container>
  );
}

export default App;
