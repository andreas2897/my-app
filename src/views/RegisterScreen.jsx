import React from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";

class RegisterScreen extends React.Component {
  state = {
    users: [],
    regisUsername: "",
    regisFullname: "",
    regisPassword: "",
    regisRole: "",
  };

  componentDidMount() {
    Axios.get(`${API_URL}/users`)
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  registHandler = () => {
    const {
      users,
      regisUsername,
      regisFullname,
      regisPassword,
      regisRole,
    } = this.state;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == regisUsername) {
        alert("Username sudah ada");
        break;
      }

      if (i == users.length - 1) {
        Axios.post(`${API_URL}/users`, {
          regisUsername,
          regisFullname,
          regisPassword,
          regisRole,
        })
        alert("data masuk")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    this.setState({
      username: "",
      fullName: "",
      password: "",
      role: "",
    });
  };

  render() {
    const {
      regisUsername,
      regisFullname,
      regisPassword,
      regisRole,
    } = this.state;

    return (
      <center className="container">
        <div className="card p-5" style={{ width: "400px" }}>
          <h4>Register</h4>
          <input
            value={regisUsername}
            className="form-control mt-2"
            type="text"
            placeholder="Username"
            onChange={(e) => this.setState({ regisUsername: e.target.value })}
          />
          <input
            value={regisFullname}
            className="form-control mt-2"
            type="text"
            placeholder="Fullname"
            onChange={(e) => this.setState({ regisFullname: e.target.value })}
          />
          <input
            value={regisPassword}
            className="form-control mt-2"
            type="text"
            placeholder="Password"
            onChange={(e) => this.setState({ regisPassword: e.target.value })}
          />
          <input
            value={regisRole}
            className="form-control mt-2"
            type="text"
            placeholder="Role"
            onChange={(e) => this.setState({ regisRole: e.target.value })}
          />
          <input
            type="button"
            value="Register"
            className="btn btn-primary mt-3"
            onClick={this.registerHandler}
          />
        </div>
      </center>
    );
  }
}

export default RegisterScreen;
