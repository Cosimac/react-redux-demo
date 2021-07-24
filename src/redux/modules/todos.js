/*
 * @Date: 2021-07-20 23:25:09
 * @LastEditors: Cosima
 * @LastEditTime: 2021-07-24 16:18:08
 * @FilePath: /react-test/src/redux/modules/todos.js
 */

const initialState = {
  allIds: [],
  byIds: {}
};

let nextTodoId = 0;

export const types = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SET_FILTER: "SET_FILTER"
}


export const actions = {
  addTodo: content => ({
    type: types.ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content
    }
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const { id, content } = action.payload
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      }
    default:
      return state
  }
}

export default reducer