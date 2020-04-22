import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoHandler,
  loginHandler,
} from "../../redux/actions";

class ToDoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>todo screen</h1>
        {/* <h1>{this.props.todo.todoInput}</h1>
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
        <input type="button" value="add todo" /> */}
        <p>testing 1 : {this.props.user.testing}</p>
        <p>testing 2 : {this.props.user.testing2}</p>
        <input
          type="button"
          value="Testing"
          className="btn btn-success"
          onClick={this.props.onlogin}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
  onChangeUsername: usernameInputHandler,
  onlogin: loginHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoReduxScreen);
