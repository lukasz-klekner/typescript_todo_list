import React from 'react'
import './style.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input
        type='text'
        placeholder='Enter a Todo'
        className='input__box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='submit' className='input__submit'>
        GO
      </button>
    </form>
  )
}

export default InputField
