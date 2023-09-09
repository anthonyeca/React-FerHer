import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../03-examples/MultipleCustomHooks'
import { useCounter, useFetch } from '../../hooks'

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks/>', () => {
  const mockIncrement = jest.fn()
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('debe de mostar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText('Breaking Bad Quotes'))
    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    expect(nextButton.disabled).toBeTruthy()
    // screen.debug()
  })

  test('debe mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Anthony',
          quote: 'Hola mundo',
        },
      ],
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)
    expect(screen.getAllByText('Hola mundo')).toBeTruthy()
    expect(screen.getAllByText('Anthony')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    expect(nextButton.disabled).toBeFalsy()
  })

  test('debe de llamar la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Anthony',
          quote: 'Hola mundo',
        },
      ],
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: 'Next quote' })
    fireEvent.click(nextButton)
    screen.debug()

    expect(mockIncrement).toHaveBeenCalled()
  })
})
