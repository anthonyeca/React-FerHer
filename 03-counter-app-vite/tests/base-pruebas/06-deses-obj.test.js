import { usContext } from '../../src/base-pruebas/06-deses-obj'

describe('Pruebas en archivo 06', () => {
  test('usContext debe retornar un objeto con sus props', () => {
    const clave = 'Fernando'
    const edad = 29

    const usContexto = usContext({ clave, edad })

    expect(usContexto).toStrictEqual({
      nombreClave: 'Fernando',
      anios: 29,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    })
  })
})
