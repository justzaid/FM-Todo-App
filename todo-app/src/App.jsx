import { useState } from 'react'

// Components
import NewTodo from './components/NewTodo/NewTodo'
import TodoList from './components/TodoList/TodoList'
import TodoStatus from './components/TodoStatus/TodoStatus'

// CSS
import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to the Todo App</h1>
      <NewTodo />
      <TodoList />
      <TodoStatus />
    </>
  )
}

export default App
