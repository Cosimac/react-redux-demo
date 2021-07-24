/*
 * @Date: 2021-04-05 17:55:03
 * @LastEditors: Cosima
 * @LastEditTime: 2021-07-24 16:26:14
 * @FilePath: /react-test/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp/index';
import { Provider } from "react-redux";
import store from "./redux/modules/index";
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
