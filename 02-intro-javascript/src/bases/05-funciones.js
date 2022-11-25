// Funciones en JS

const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

//console.log(saludar('Goku'))

console.log(saludar)
console.log(saludar2('Goku'))
console.log(saludar3('Goku'))

const getUser = () => ({
  uid: 'ABC123',
  username: 'Ramon123',
})

const user = getUser()
console.log(user)

//Tarea
//1. Transformar a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

// function getUsuarioActivo(nombre) {
//   return {
//     uid: 'ABC567',
//     username: nombre,
//   }
// }

const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre,
})

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)
