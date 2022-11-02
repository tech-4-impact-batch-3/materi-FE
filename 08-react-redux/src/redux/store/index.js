import { createStore } from 'redux'
import keranjangReducer from '../reducer/keranjangReducer'

const store = createStore(keranjangReducer)

export default store