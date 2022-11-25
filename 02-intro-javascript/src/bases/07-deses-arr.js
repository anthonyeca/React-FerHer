const personajes = ['Goku', 'Vegeta', 'Trunks']
const [, , p3] = personajes
console.log(p3)

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

//Tarea
// 1. El primer valor del arr se llamará nombre
// 1. El segundo se llamra setNombre

const usaState = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola Mundo')
    },
  ]
}

const [arr] = usaState('Goku')
console.log(arr)

const [nombre, setNombre] = usaState('Goku')
console.log(nombre)
setNombre()
