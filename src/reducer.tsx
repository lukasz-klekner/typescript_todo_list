import { useReducer } from 'react'
import { Todo } from './model'

export enum ActionsName {
  add = 'ADD',
  remove = 'REMOVE',
  done = 'DONE',
  edit = 'EDIT',
}

export type Actions =
  | {
      type: ActionsName.add
      payload: string
    }
  | {
      type: ActionsName.remove | ActionsName.done
      payload: number
    }
  | {
      type: ActionsName.edit
      payload: {
        id: number
        newValue: string
      }
    }

const todoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case ActionsName.add:
      return [{ id: Date.now(), todo: action.payload, isDone: false }, ...state]
    case ActionsName.remove:
      return state.filter((todo) => todo.id !== action.payload)
    case ActionsName.done:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      )
    case ActionsName.edit:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.newValue }
          : todo
      )
    default:
      return state
  }
}

export const useTodoReducer = (initialState: Todo[]) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  return { todos, dispatch }
}
