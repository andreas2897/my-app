import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class ProfileScreen extends React.Component {
  state = {
    users: [],
  };

  getDataHandler = () => {
    // request GET semua data table
    // Axios.get("http://localhost:3001/users")
    //   .then((res) => {
    //     // res = response dari API

    //     console.log(res.data);
    //     // this.setState({ usersList: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Request GET by ID
    // IDnya diletakkan setelah '/' milik nama table
    // Axios.get("http://localhost:3001/users/1")
    //   .then((res) => {
    //     // res = response dari API
    //     console.log(res.data);
    //     this.setState({ usersList: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Request GET by condition yg kita berikan
    // Axios.get("http://localhost:3001/users", {
    //   params: {
    //     role: "admin",
    //     username: "seto",
    //   },
    // })
    //   .then((res) => {
    //     // res = response dari API
    //     console.log(res.data);
    //     // this.setState({ usersList: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    console.log("bukan axios");
  };

  deleteDataHandler = () => {
    Axios.delete(`${API_URL}/users/1`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postDataHandler = () => {
    Axios.post(`${API_URL}/users`, {
      username: "steve",
      password: "123",
      role: "admin",
      fullName: "steve jobs",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {

    Axios.get(`${API_URL}/users/`, {
      params: {
        username: this.props.match.params.username
      }
    })
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });

      Axios.get(`${API_URL}/users`)
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderUserData = () => {
    const { users } = this.state;
    return users.map((user, index) => {
      return (
        <tr>
          <td> {index + 1} </td>
          <td> {user.username} </td>
          <td> {user.fullName} </td>
          <td> {user.role} </td>
        </tr>
      );
    });
  };

  
  render() {

    const { users } = this.state;
    
    return (
      <div>
        {/* <div className="container">
        <h1>Profile</h1>
        <h2>Welcome, {this.props.match.params.username} </h2>
        <input
          onClick={this.getDataHandler}
          type="button"
          value="Get data"
          className="btn btn-success"
        />
        <input
          onClick={this.deleteDataHandler}
          type="button"
          value="Delete data"
          className="btn btn-danger"
        />
        <input
          onClick={this.postDataHandler}
          type="button"
          value="Post data"
          className="btn btn-primary"
        /> */}

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h2 className="mb-3"> Welcome, {users.username} </h2>
          <form className="form-group mt-2" style={{ width: "30%" }}>
            <label> Username </label>
            <input
              type="text"
              class="form-control mb-3"
              value={users.username}
            />
            <label> Password </label>
            <input
              type="text"
              class="form-control mb-3"
              aria-describedby="textHelp"
              value={users.password}
            />
            <label> Role </label>
            <input
              type="text"
              class="form-control mb-3"
              aria-describedby="textHelp"
              value={users.role}
            />
          </form>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="mt-5 mb-3"> All Users </h3>
          <table className="table" style={{ width: "80%" }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Username</th>
                <th scope="col">Full Name</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>{this.renderUserData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProfileScreen;
