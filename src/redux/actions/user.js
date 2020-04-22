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
            type: "ON_LOGIN_SUCCESS",
            payload: "username atau password salah",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
