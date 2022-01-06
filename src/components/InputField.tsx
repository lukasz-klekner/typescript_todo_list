import React, { useRef } from 'react'
import './style.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className='input'
      onSubmit={(event) => {
        handleAdd(event)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
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
