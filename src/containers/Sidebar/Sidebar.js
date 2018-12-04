import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import logo from './logo.svg';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
         <Link className = "tab" to="/map">
          Map
        </Link>
        <Link className = "tab" to="/weather">
          Weather
        </Link>
      </div>
    );
  }
}

export default Sidebar;
