const init_state = {
  id: 0,
  username: "Hai",
  fullName: "",
  role: "",
  testing: "",
  testing2: "",
  errMsg: "",
};

export default (state = init_state, action) => {
  if (action.type == "onChangeUsername") {
    return { ...state, username: action.payload };
  } else if (action.type == "ON_LOGIN_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id };
  } else if (action.type == "ON_LOGIN_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type == "ON_LOGOUT") {
    const { username, fullName, role } = action.payload;
    return { ...state, username, fullName, role };
  } else {
    return { ...state };
  }
};
