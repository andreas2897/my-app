import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoHandler,
} from "../../redux/actions";

class ToDoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>todo screen</h1>
        <h1>{this.props.todo.todoInput}</h1>
        <input
          type="text"
          className="form-control"
          placeholder="input todo"
          onChange={(e) => this.props.onChangeTodo(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="input username"
          onChange={(e) => this.props.onChangeUsername(e.target.value)}
        />
        <input type="button" value="add todo" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.haha,
  };
};

const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
  onChangeUsername: usernameInputHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoReduxScreen);
