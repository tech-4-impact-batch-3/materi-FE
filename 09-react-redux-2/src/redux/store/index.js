import { combineReducers, createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
import todoReducer from "../reducer/todoReducer";

const allReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
})

const store = createStore(allReducer);

export default store;
