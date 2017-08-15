import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Header from './Components/Header';
import Books from './Components/Books';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books:[],
      text:'Harry Potter'
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Books />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
