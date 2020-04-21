const init_state = {
  id: 0,
  username: "Hai",
};

export default (state = init_state, action) => {
    if (action.type == "onChangeUsername") {
      return { ...state, username: action.payload };
    } else {
  return state;
    // return { ...state };
    }
};
