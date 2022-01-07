import React, { useState } from 'react'

import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { ActionsName, useTodoReducer } from './reducer'

const App: React.FC = () => {
  const [todo, setTodo] = useState('')
  const { todos, dispatch } = useTodoReducer([])

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault()

    if (todo) {
      dispatch({
        type: ActionsName.add,
        payload: todo,
      })
      setTodo('')
    }
  }

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  )
}

export default App
