/*
 * @Date: 2021-07-20 23:25:25
 * @LastEditors: Cosima
 * @LastEditTime: 2021-07-24 17:41:29
 * @FilePath: /react-test/src/redux/modules/index.js
 */
import { createStore } from 'redux'
import { combineReducers } from "redux";
import todos from './todos'

export default createStore(combineReducers({ todos }))

