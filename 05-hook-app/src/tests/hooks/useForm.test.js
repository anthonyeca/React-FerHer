const { renderHook, act } = require('@testing-library/react')
const { useForm } = require('../../hooks/useForm')

describe('Pruebas en el useForm', () => {
  const initialForm = {
    name: 'Anthony',
    email: 'Anthony@gmail.com',
  }

  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  test('debe de cambiar le nombre del formulario', () => {
    const newValue = 'Juan'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('debe realizar el reset del fomulario', () => {
    const newValue = 'Juan'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})
