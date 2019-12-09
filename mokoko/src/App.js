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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* Navigation - make me pretty */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/water">Water Meter</Link>
            </li>

            <li>
              <Link to="/stats">Statistics</Link>
            </li>
          </ul>

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
