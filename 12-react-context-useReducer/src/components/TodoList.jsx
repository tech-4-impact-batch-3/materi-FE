import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider'

function TodoList() {
  const {state, deleteTodo} = useContext(TodoContext)

  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input type="text" name="" id="" />
        <button>add</button>
      </form>

      <ul>
        {state.todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => deleteTodo(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList