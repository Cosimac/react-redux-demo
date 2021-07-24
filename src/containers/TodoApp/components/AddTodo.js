/*
 * @Date: 2021-07-22 22:58:11
 * @LastEditors: Cosima
 * @LastEditTime: 2021-07-24 16:52:07
 * @FilePath: /react-test/src/containers/TodoApp/components/AddTodo.js
 */
import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/modules/todos";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo: actions.addTodo }
)(AddTodo);
// export default AddTodo;
