import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe('Pruebas en 09-promeses', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      })

      done()
    })
  })

  test('getHeroeByIdAsync debe de retornar un error si no se envia un ID', (done) => {
    const id = 100
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy()
        done()
      })

      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el heroe ${id}`)
        done()
      })
  })
})
