import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import StatisticsPage from './Pages/StatisticsPage';
import WaterMeterPage from './Pages/WaterMeterPage';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends Component {
  render() {
    return (

      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Mokoko</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">MealMaker</Link>
              <Link className="nav-link" to="/water">Water</Link>
              <Link className="nav-link" to="/stats">Stats</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="App">

          {/*
            A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            https://reacttraining.com/react-router/web/guides/quick-start
        */}
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/water">
              <WaterMeterPage />
            </Route>
            <Route exact path="/stats">
              <StatisticsPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
