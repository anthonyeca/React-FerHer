import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('tests para evaluar el componente CounterApp', () => {
  const initialValue = 10
  const value = 100
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={20} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={value} />)
    expect(screen.getByText(100)).toBeTruthy()
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
  })

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('11')).toBeTruthy()
  })

  test('debe de decrementar con el boton -1', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('9')).toBeTruthy()
  })

  test('debe de resetear con el boton reset', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
    expect(screen.getByText(initialValue)).toBeTruthy()
  })
})
