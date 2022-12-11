import { render, renderHook, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('pruebas en <GifExpertApp />', () => {
  test('debemos tener una snapshot', () => {
    const { container } = render(<GifExpertApp />)
    expect(container).toMatchSnapshot()
  })
  test('should first', () => {
    const { result } = renderHook(() => GifExpertApp())
    const { categories } = result.current
    console.log(categories)
  })
})
