import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import { Actions } from '../reducer'

interface Props {
  todos: Todo[]
  dispatch: React.Dispatch<Actions>
}

const TodoList: React.FC<Props> = ({ todos, dispatch }) => (
  <div className='todos'>
    {todos.map((todo) => (
      <SingleTodo key={todo.id} todo={todo} todos={todos} dispatch={dispatch} />
    ))}
  </div>
)

export default TodoList
