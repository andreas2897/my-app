import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { todoInputhandler, usernameInputHandler } from "../../redux/actions";

class Navbar extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-around" style={{ height: "80px" }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/prof/:username">Profile</Link>
        {this.props.pengguna.username}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pengguna: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
