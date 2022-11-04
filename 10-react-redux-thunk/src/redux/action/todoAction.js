import axios from "axios";

export const GET_TODO = "GET_TODO";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function successGetTodo(data) {
  return {
    type: SUCCESS_GET_TODO,
    payload: data,
  };
}

export const getTodo = () => {
  return async (dispatch) => {
    // ubah loading jadi true
    dispatch(fetchStart());

    // axios -> isi data todos, loading jadi false
    const result = await axios.get(
      "https://63478a450484786c6e82998f.mockapi.io/todo"
    );
    dispatch(successGetTodo(result.data));
  };
};

// export const addTodo = () => async (dispatch) => {
//   // ubah loading jadi true
//   dispatch(fetchStart());

//   // axios -> isi data todos, loading jadi false
//   const result = await axios.post(
//     "https://63478a450484786c6e82998f.mockapi.io/todo"
//   , {todo: "thunk itu mudah"});
//   dispatch(successGetTodo(result.data));
// };
