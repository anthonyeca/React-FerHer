import { todoReducer } from '../../08-useReducer/todoReducer'

describe('Pruebas en el todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ]

  test('debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('debe de agregar un todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo Todo #2',
        done: false,
      },
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('debe de elimninar 1 state', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    }
    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)
  })

  test('debe de realizar el Toggle del todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    }
    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBe(true)
  })
})
