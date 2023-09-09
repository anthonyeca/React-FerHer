import { Todolist } from './Todolist'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {
  const {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    totalTodo,
    pendingTodo,
  } = useTodo()

  return (
    <>
      <h1>
        {totalTodo(todos)}
        <small>{pendingTodo(todos)}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <Todolist
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
