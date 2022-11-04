import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from '../reducer/todoReducer';

const allReducer = combineReducers({
  todo: todoReducer,
  // user: userReducer,
  // product: productReducer
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store