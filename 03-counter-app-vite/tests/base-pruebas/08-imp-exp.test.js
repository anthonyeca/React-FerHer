import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp'
import heroes from '../../src/data/heroes'

describe('Pruebas 08-imp-test', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {
    const id = 2
    const hero = getHeroeById(id)

    expect(hero).toStrictEqual({
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    })
  })

  test('getHeroeById debe retoranar undefind si no existe el ID', () => {
    const id = 100
    const hero = getHeroeById(id)

    expect(hero).toBeFalsy()
  })

  test('getHeroesByOwner debe retornar un arreglo de 3 heroes', () => {
    const getHeroesDC = getHeroesByOwner('DC')
    const getHeroesMarvel = getHeroesByOwner('Marvel')

    expect(getHeroesDC).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ])

    expect(getHeroesDC.length).toBe(3)

    const owner = 'Marvel'
    expect(getHeroesMarvel).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    )

    expect(getHeroesMarvel.length).toBe(2)
  })
})
