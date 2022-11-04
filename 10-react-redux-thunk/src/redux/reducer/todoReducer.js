import { FETCH_START, SUCCESS_GET_TODO } from "../action/todoAction";

const initialState = {
  todos: [],
  isLoading: false,
  err: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_GET_TODO:
      return {
        ...state,
        todos: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};

export default todoReducer;