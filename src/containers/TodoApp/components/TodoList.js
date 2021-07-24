/*
 * @Date: 2021-07-24 16:54:06
 * @LastEditors: Cosima
 * @LastEditTime: 2021-07-24 17:41:12
 * @FilePath: /react-test/src/containers/TodoApp/components/TodoList.js
 */
import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        return <li key={todo.id}>{todo.content}</li>
      })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && state.todos.allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
