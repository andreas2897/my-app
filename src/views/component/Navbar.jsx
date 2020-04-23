import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHandler } from "../../redux/actions";
import Cookie from "universal-cookie"

const cookiesObject = new Cookie()



class Navbar extends React.Component {

  logoutDataHandler = (userData) => {
    this.props.logoutHandler(userData)
    cookiesObject.remove("authData")
  }

  render() {
    return (
      <div className="d-flex justify-content-around" style={{ height: "80px" }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/prof/:username">Profile</Link>
        <Link onClick={this.logoutDataHandler}>Logout</Link>
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

const mapDispatchToProps = {
  logoutHandler,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
