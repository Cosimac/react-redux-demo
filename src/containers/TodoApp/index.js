/*
 * @Date: 2021-07-22 22:52:47
 * @LastEditors: Cosima
 * @LastEditTime: 2021-07-24 17:40:33
 * @FilePath: /react-test/src/containers/TodoApp/index.js
 */

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default function TodoApp() {
  return (
    <div className='toda-app'>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}