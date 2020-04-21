export const usernameInputHandler = (text) => {
  return {
    type: "onChangeUsername",
    payload: text,
  };
};
