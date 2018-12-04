import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import MapDetail from '../MapDetail/MapDetail.js';
import WeatherDetail from '../WeatherDetail/WeatherDetail.js';
import Sidebar from '../Sidebar/Sidebar.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navigation-bar-container">
            <Sidebar />
          </div>
          <div className="detail-container">
            <Route exact Route = {Route} path="/map" component={MapDetail} />
            <Route exact Route = {Route} path="/weather" component={WeatherDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;