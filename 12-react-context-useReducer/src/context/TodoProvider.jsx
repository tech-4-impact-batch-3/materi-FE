import React, { createContext, useReducer } from 'react'

export const TodoContext = createContext()

const DELETE_TODO = "DELETE_TODO"

const initialState = {
  todos: ["belajar reaact", "belajar context", "belajar redux"]
}

function reducer(state, action) {
  switch (action.type) {
    case DELETE_TODO:
      const newTodo = state.todos.filter((item, index) => index != action.index )
      return { todos: newTodo }
    default: return state
  }
}

function TodoProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const deleteTodo = (index) => {
    console.log(index);
    dispatch({
      type: DELETE_TODO,
      index
    })
  }

  return (
    <TodoContext.Provider value={{state, deleteTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider