import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {
  const title = 'Hola Soy Goku'
  const subTitle = 'Soy un subittulo'
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
    // screen.debug()
  })

  test('debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', { leavel: 1 }).innerHTML).toBe(title)
  })

  test('debe de mostarar el subtitulo enviado por las props', () => {
    render(<FirstApp title={title} subTitle={subTitle} />)
    expect(screen.getAllByText(subTitle).length).toBe(2)
  })
})
