import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <h3>Counter with context</h3>
      <Counter1 />

      <h3>Counter with context and useReducer</h3>
      <Counter2 />

      <TodoList />
    </div>
  )
}

export default App
