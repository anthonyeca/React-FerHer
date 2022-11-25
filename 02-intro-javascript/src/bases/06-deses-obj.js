//Desestructuracion
//Asignacion Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado',
}
// const { nombre, edad, clave } = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const usaContext = ({ nombre, edad, clave, rango = 'Capitan' }) => {
  //   console.log(nombre, edad, clave, rango)
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.324,
      lng: -12.5353,
    },
  }
}

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usaContext(persona)

console.log(nombreClave, anios)
console.log(lat, lng)
