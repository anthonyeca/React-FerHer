import { getHeroById } from './bases/08-imp-ex'

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroById(2)
//     resolve(p1)
//   }, 2000)
// })

// promesa
//   .then((heroe) => {
//     console.log('heroe', heroe)
//   })
//   .catch((err) => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById(id)
      p1 ? resolve(p1) : reject('El Heroe no existe')
    }, 2000)
  })
}

getHeroeByIdAsync(10)
  .then((heroe) => console.log('Heroe', heroe))
  .catch((err) => console.warn(err))

//Tambien se puede hacer de la siguiente forma

// getHeroeByIdAsync(2).then(console.log).catch(console.warn)
