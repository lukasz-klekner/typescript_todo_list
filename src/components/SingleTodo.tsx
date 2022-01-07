import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Todo } from '../model'
import { ActionsName, Actions } from '../reducer'

interface Props {
  todo: Todo
  todos: Todo[]
  dispatch: React.Dispatch<Actions>
}

const SingleTodo = ({ todo, todos, dispatch }: Props) => {
  const [edit, setEdit] = useState(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    dispatch({
      type: ActionsName.edit,
      payload: {
        id,
        newValue: editTodo,
      },
    })

    setEdit(false)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          className='todos__single--text'
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}
      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) setEdit(!edit)
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className='icon'
          onClick={() =>
            dispatch({ type: ActionsName.remove, payload: todo.id })
          }
        >
          <AiFillDelete />
        </span>
        <span
          className='icon'
          onClick={() => dispatch({ type: ActionsName.done, payload: todo.id })}
        >
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
