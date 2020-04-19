import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";

class LoginScreenBaru extends React.Component {
  state = {
    users: [],
    loginUsername: "",
    loginPassword: "",
    currentUsername: "",
    currentId: null,
    isLoggedIn: false,
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

  loginHandler = () => {
    const { loginUsername, loginPassword, users } = this.state;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == loginUsername &&
        users[i].password == loginPassword
      ) {
        alert(`Welcome ${loginUsername}`);
        this.setState({
          isLoggedIn: true,
          currentUsername: users[i].username,
          loginUsername: "",
          loginPassword: "",
        });
        break;
      }

      if (i == users.length - 1) {
        alert("User tidak ada atau password salah");
      }
    }
  };

  render() {
    const { isLoggedIn, currentUsername } = this.state;
    if (!isLoggedIn) {
      return (
        <div>
          <center>
            <div className="card p-5" style={{ width: "400px" }}>
              <h4>Login</h4>
              <input
                value={this.state.loginUsername}
                className="form-control mt-2"
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  this.setState({ loginUsername: e.target.value })
                }
              />
              <input
                value={this.state.loginPassword}
                className="form-control mt-2"
                type="text"
                placeholder="Password"
                onChange={(e) =>
                  this.setState({ loginPassword: e.target.value })
                }
              />
              <input
                type="button"
                value="Login"
                className="btn btn-primary mt-3"
                onClick={this.loginHandler}
              />
            </div>
          </center>
        </div>
      );
    } else {
      return <Redirect to={`prof/${currentUsername}`} />;
    }
  }
}

export default LoginScreenBaru;
