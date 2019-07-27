import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import axios from 'axios';


class NavBar extends Component {
  render() {
    return (
      <div className="navbar-component">
        <NavLink exact to = '/'>Home</NavLink>
        <NavLink exact to = '/allbeers'>All Beers</NavLink>
        <NavLink exact to = '/randombeer'>Random Beers</NavLink>
        <NavLink exact to = '/addnewbeer'>Add New Beer</NavLink>
      </div>
    );
  }
}

export default NavBar;




