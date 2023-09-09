import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../08-useReducer/TodoItem'

describe('Prueba en <TodoItem />', () => {
  const todo = {
    id: 1,
    descripton: 'Piedra del alma',
    done: false,
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('debe de mostrar el Todo Pendiente de completar', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const liElement = screen.getByRole('listitem')
    const spanElement = screen.getByLabelText('span')
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    )
    expect(spanElement.className).toContain('align-self-center')
    expect(spanElement.className).not.toContain('text-decoration-line-through')
    screen.debug()
  })

  test('debe de mostrar el Todo completado', () => {
    todo.done = true
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('text-decoration-line-through')
  })

  test('el span debe de llamar el ToggleTodo cuando se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )
    const spanElement = screen.getByLabelText('span')
    fireEvent.click(spanElement)
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('el button debe de llamar el deleteTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})
