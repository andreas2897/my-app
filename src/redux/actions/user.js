import Axios from "axios";
import { API_URL } from "../../constants/API";

export const usernameInputHandler = (text) => {
  return {
    type: "onChangeUsername",
    payload: text,
  };
};

export const loginHandler = (userData) => {
  return (dispatch) => {
    const { username, password } = userData;

    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0],
          });
        } else {
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "username atau password salah",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const registHandler = (userData) => {
  return (dispatch) => {
    const { regisUsername, regisFullname, regisPassword, regisRole } = userData;
    Axios.get(`${API_URL}/users`, {
      params: {
        username: regisUsername,
      },
    })
      .then((res) => {
        console.log(res.data);

        if (res.data.length == 0) {
          Axios.post(`${API_URL}/users`, {
            username: regisUsername,
            fullName: regisFullname,
            password: regisPassword,
            role: regisRole,
          })
            .then((res) => {
              dispatch({
                type: "ON_LOGIN_SUCCESS",
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("sudah ada yang make usernamenya");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const userKeepLogin = (userData) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/users`, {
      params: {
        id: userData.id,
      },
    })
      .then((res) => {
        alert(res.data.length);
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0],
          });
        } else {
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "username atau password salah",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutHandler = (userData) => {
  return {
    type: "ON_LOGOUT",
    payload: userData,
  };
};
