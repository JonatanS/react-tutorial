import React, { Component } from "react";

// Stateless functional component:
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      {/* <span className="navbar-brand mb-0 h1">NavBar</span> */}
      <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
      </span>
    </nav>
  );
};

export default NavBar;