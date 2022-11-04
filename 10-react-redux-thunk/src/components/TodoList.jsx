import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/action/todoAction";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          todos.map((item) => <li key={item.id}>{item.todo}</li>)
        )}
      </ul>
    </div>
  );
}

export default TodoList;
