import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Clicky Game</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Score: {this.props.score}</li>
          <li className="itemRight">Top Score: {this.props.topScore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;