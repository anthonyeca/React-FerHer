import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../08-useReducer/TodoApp'
import { useTodo } from '../../hooks/useTodo'

jest.mock('../../hooks/useTodo')

describe('Pruebas en <TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true },
    ],
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    totalTodo: jest.fn(),
    pendingTodo: jest.fn(),
  })

  test('debe de mostar el componente correctamente', () => {
    render(<TodoApp />)
    expect(screen.getByText('Todo #1')).toBeTruthy()
    expect(screen.getByText('Todo #2')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
