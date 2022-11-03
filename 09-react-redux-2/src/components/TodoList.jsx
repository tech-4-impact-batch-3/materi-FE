import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action/todoAction";

function TodoList() {
  const dispatch = useDispatch()
  const [inputTodo, setInputTodo] = useState("");
  const todos = useSelector((state) => state.todo.data);




  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputTodo, "dari event");
    dispatch(addTodo(inputTodo))
  };







  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Todo List</h2>
        <input
          type="text"
          name="inputTodo"
          value={inputTodo}
          onChange={handleChange}
        />
        <button>add</button>
      </form>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
