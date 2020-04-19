import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-around" style={{ height: "80px" }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/prof/:username">Profile</Link>
      </div>
    );
  }
}

export default Navbar;
