export const ADD_TODO = "ADD_TODO"

export function addTodo(todo) {
  console.log(todo, "dari action");
  return {
    type: ADD_TODO,
    payload: todo
  }
}