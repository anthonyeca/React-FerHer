import { getUser } from '../../src/base-pruebas/05-funciones'
import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    }

    const user = getUser()
    expect(testUser).toStrictEqual(user)
  })

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const name = 'Fernando'

    const userActivo = getUsuarioActivo(name)

    expect(userActivo).toStrictEqual({
      uid: 'ABC567',
      username: name,
    })
  })
})
